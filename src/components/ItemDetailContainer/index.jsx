import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";

function getItems() {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        nombre: "Fideos",
        precio: "$150",
        url: "./assets/fideos.png",
      },
    ];
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
  return myPromise;
}

function ItemDetailContainer() {
  const [oneProduct, setOneProduct] = useState([]);
  console.log("OneProduct", oneProduct);
  useEffect(() => {
    getItems().then((res) => {
      setOneProduct(res);
    });
  }, []);

  return (
    <>
      {oneProduct.map((product) => {
        console.log("product in map", product);
        return <ItemDetail key={product.id} product={product} />;
      })}
    </>
  );
}

export default ItemDetailContainer;
