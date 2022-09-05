import React , {useState} from "react";
import { useGlobalContext } from "../../context/Context";
import Style from "./header.module.css";
import { Link } from "react-router-dom";
import Listitem from "./Listitem/Listitem";

const Header = () => {
  const { state } = useGlobalContext();
  const [modal, setModal] = useState(false)
  const numofitem = state.data.filter((item) => {
    return item.total !== 0;
  });
  return (
    <>
    { modal ? numofitem.reduce((acc,curitem) => {
      console.log(acc);
      console.log(curitem);
      return acc + curitem.cost
    },0) === 0 ? '' : <div className={Style.modalParent}>
    <div className={Style.modalinner}>
      <h2>Order List</h2>
      {numofitem.map((item, index) => {
        return (
          <Listitem
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
      <p className={Style.modalTotal}>
       Total Cost :{" "}
        {numofitem.reduce((acc, curitem) => {
          console.log(acc);
          console.log(curitem);
          return acc + curitem.cost;
        }, 0)}
      </p>
      <Link className={Style.modalbtn} to="/checkout"  onClick={() => setModal(false)}>
              <a href="/checkout">
                CheckOut
              </a>{" "}
            </Link>
            <button className={Style.modalbtn} onClick={() => setModal(false)}>Cancel</button>
    </div>

  </div> : ''}
      
      <div className={Style.header}>
        <div className={Style.headerleft}>
          <h1> Food's Restuarant</h1>
        </div>
        <div className={Style.headerright}>
          {numofitem.length > 0 ? (
                <span onClick={() => setModal(true)}><h3>Cart:{numofitem.length}</h3></span>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
