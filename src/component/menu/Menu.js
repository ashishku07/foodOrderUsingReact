import React from "react";
import ProductCard from "../productCard/ProductCard";
import Style from "./menu.module.css";
import { useGlobalContext } from "../../context/Context";

const Menu = () => {
  const { state } = useGlobalContext();

 
  return (
    <div className={Style.menuParent}>
    {state.data.map((item, index) => {
      return (
        <ProductCard
          key={index}
          imgUrl={item.image}
          itemName={item.item}
          price={item.price}
          total={item.total}
          cost={item.cost}
          item={item}
        />
      );
    })}
  </div>
  )
};

export default Menu;
