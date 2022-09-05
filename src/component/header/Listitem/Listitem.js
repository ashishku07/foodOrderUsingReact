import React from 'react';
import { useGlobalContext } from '../../../context/Context';
import Style from './list.module.css'

const Listitem = ({imgUrl,itemName,price,total,cost,item}) => {
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
    <div>
        <div className={Style.listParent}>
            <h3> {itemName}</h3>  :
            {total !==0 ? <p>{total}</p> : ''} :
            <div >
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

export default Listitem