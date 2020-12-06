import React from "react";
import Item from "./Item";

function ItemList() {
  return (
    <div>
      {Array.from({ length: 5 }).map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
