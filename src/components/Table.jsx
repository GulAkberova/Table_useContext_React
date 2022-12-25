import React, { useContext } from "react";
import { tableContext } from "./TableContext";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

function Table() {
  let {
    all,
    setAll,
    favorite,
    setFavorite,
    value,
    setValue,
    name,
    setName,
    quantity,
    setQuantity,
    price,
    setPrice,
    loading,
    setLoading,
  } = useContext(tableContext);
  let navigate = useNavigate();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Silmək istədiyinizdən əminsinizmi ?",
      text: "Bu əməliyyat geri alına bilməz.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Bəli",
      cancelButtonText: "Xeyr",
    }).then((result) => {
      if (result.isConfirmed) {
        let newAll = all.filter((q) => q.id !== id);
        setAll(newAll);
        Swal.fire("Silindi!", "Məhsul silindi.", "success");
      }
    });
   
  };

  const handleFavorite = (index) => {
    setFavorite(() => {
      if (favorite.includes(index)) {
        return favorite.filter((q) => q !== index);
      } else {
        return [...favorite, index];
      }
    });
  };
  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleAddTable = () => {
    console.log("dsefes");
    let newTable = {
      id: all[all.length - 1].id + 1,
      name: name,
      unitPrice: price,
      quantityPerUnit: quantity,
    };
  
    setAll([...all, newTable]);
    setName(" ")
    setPrice('')
    setQuantity('')
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
      <section className="table_div">
        <div className="table_search">
      
          <div className="table_search_mini">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              placeholder="Search..."
              type={"text"}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div className="table_bigdiv">
          <table id="customers">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>UnitPrice</th>
                <th>QuantityPerUnit</th>
                <th>Delete</th>
                <th>Favorite</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
              <div className="loading_div"> <div class="lds-circle"><div></div></div></div>
              ) : (
                all &&
                all
                  ?.filter((m) => m.name.toLowerCase().includes(value))
                  .map((i, key) => {
                    return (
                      <tr key={key}>
                        <td>{i.id}</td>
                        <td>
                          <Link to={`/detail/${i.id}`}>{i.name}</Link>
                        </td>
                        <td>{i.unitPrice}</td>
                        <td>{i.quantityPerUnit}</td>
                        <td onClick={() => handleDelete(i.id)}>
                          <i className="fa-solid fa-trash-can"></i>
                        </td>
                        <td onClick={() => handleFavorite(i)}>
                          <i
                            className={
                              favorite.includes(i)
                                ? "fa-solid fa-heart"
                                : "fa-regular fa-heart"
                            }
                          ></i>
                        </td>
                        <td onClick={() => handleDetail(i.id)}>
                          <i className="fa-solid fa-right-long"></i>
                        </td>
                      </tr>
                    );
                  })
              )}
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="table_add">
            <div className="add_h1">
              <h3>Add New Data</h3>
            </div>
            <div className="add_input">
              <input
                placeholder="Name"
                type={"text"}
                required="required"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="UnitPrice"
                type={"number"}
                required="required"
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                placeholder="QuantityPerUnit"
                type={"number"}
                required="required"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button onClick={() => handleAddTable()}>Add</button>
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Table;
