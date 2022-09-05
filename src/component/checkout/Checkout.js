import React from 'react';
import Style from './checkout.module.css'

const Checkout = () => {
  return (
    <div className={Style.checkParent}>
        <div className={Style.checkinner}>
            <h2>Checkout</h2>
            <p>
                Thankyou for your order.
            </p>
        </div>
    </div>
  )
}

export default Checkout