import React from 'react';
import Style from './product.module.css'
import {useGlobalContext} from '../../context/Context'

const ProductCard = ({imgUrl,itemName,price,total,cost,item}) => {
    const {increment,decrement,} = useGlobalContext();
    const inc = {
        item:item.item,
        price:item.price,
        image:imgUrl,
        total: item.total+1,
        cost: item.cost+item.price
    }
    const dec = {
        item:item.item,
        price:item.price,
        image:imgUrl,
        total: item.total-1,
        cost: item.cost-item.price
    }
  return (
    <div className={Style.cardParent}>
        <div className={Style.cardImgbx}>
            <img src={imgUrl} alt='item' />
        </div>
        <div className={Style.cardDetail}>
            <h3> {itemName}</h3>
            <p>Price: {price}</p>
            {total !==0 ? <p> Total: {total}</p> : ''}
            {cost !==0 ? <p>Cost: {cost}</p> : ''}
            <div className={Style.cardBtn}>
                <button onClick={()=>{increment(inc)}}>+</button>
                <button onClick={()=>{
                    if (total>0) {
                        
                        decrement(dec)
                    }
                 } }>-</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard