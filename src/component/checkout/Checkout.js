import React from 'react';
import Style from './checkout.module.css'

const Checkout = () => {
  return (
    <div className={Style.checkParent}>
        <div className={Style.checkinner}>
            <h2>Checkout</h2>
            <h3>
                Thank You For Your Order.
            </h3>
        </div>
    </div>
  )
}

export default Checkout
