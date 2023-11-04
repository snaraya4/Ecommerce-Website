import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);
   

  return (
    <div className='CartItems'>
        <div className="CartItems_formatMain">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                    <div className="CartItems_format CartItems_formatMain">
                        <img src={e.image} alt="" className='CartIcon_productIcon'/>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='CartItems_quantity'>{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img src={remove_icon} alt="" className='CartItems_removeIcon' onClick={()=>{removeFromCart(e.id)}}/>
                    </div>
                    <hr/>
                </div>
            }
            else{
                return null;
            }
        })}
        <div className="CartItems_down">
            <div className="CartItems_total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="CartItems_totalItem">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="CartItems_totalItem">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="CartItems_totalItem">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed to Checkout</button>
            </div>
            <div className="CartItems_promocode">
                <p>If you have a promo code, enter it here</p>
                <div className="CartItems_promobox">
                    <input type="text" placeholder='Promo Code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems