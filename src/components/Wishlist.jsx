import React, { useContext } from "react";
import { tableContext } from "./TableContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Wishlist() {
  let { favorite, setFavorite } = useContext(tableContext);
  const handleWishDelete = (item) => {
    let newFavorite = favorite.filter((q) => q.id !== item);
    setFavorite(newFavorite);
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
   
  };
  return (
    <>
      <div className="clear_div">
        <button onClick={() => setFavorite([])}>Clear All</button>
      </div>

      <section className="favori_div">
        {favorite.length ? (
          favorite.map((i, key) => {
            return (
              <div className="favori" key={i.id}>
                <h1>
                  Id: <span>{i.id}</span>
                </h1>
                <h1>
                  Name: <span>{i.name}</span>
                </h1>
                <h1>
                  QuantityperUnit: <span>{i.quantityPerUnit}</span>
                </h1>
                <h1>
                  Unitprice: <span>{i.unitPrice}</span>
                </h1>
                <button onClick={() => handleWishDelete(i.id)}>Delete</button>
                <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
              </div>
            );
          })
        ) : (
          <h1>Data bos...</h1>
        )}
      </section>
    </>
  );
}

export default Wishlist;
