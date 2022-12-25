import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tableContext } from "./TableContext";

function Detail() {
  const { id } = useParams();
  let navigate = useNavigate();
  let { detail, setDetail } = useContext(tableContext);
  useEffect(() => {
    console.log("id", id);
  }, [id]);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data);
      });
  }, [id]);

  return (
    <>
      <section className="detail_div">
        <h1>
          Id: <span>{detail.id}</span>
        </h1>
        <h1>
          Name: <span>{detail.name}</span>
        </h1>
        <h1>
          QuantityperUnit: <span>{detail.quantityPerUnit}</span>
        </h1>
        <h1>
          Unitprice: <span>{detail.unitPrice}</span>
        </h1>
        <h1>
          UnitsInStock: <span>{detail.unitsInStock}</span>
        </h1>
        <h1>
          UnitsOnOrder: <span>{detail.unitsOnOrder}</span>
        </h1>
        <h1>
          ReorderLevel: <span>{detail.reorderLevel}</span>
        </h1>
        <button onClick={() => navigate(-1)}>Go to Back</button>
      </section>
    </>
  );
}

export default Detail;
