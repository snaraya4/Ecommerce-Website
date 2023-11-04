import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='ProductDisplay'>
        <div className="ProductDisplay_left">
            <div className="ProductDisplay_imgList">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="ProductDisplay_image">
                <img className='ProductDisplay_mainImg' src={product.image} alt="" />
            </div>
        </div>
        <div className="ProductDisplay_right">
            <h1>{product.name}</h1>
            <div className="ProductDisplay_rightStar">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="ProductDisplay_rightPrices">
                <div className="ProductDisplay_rightPrice_old">
                    ${product.old_price}
                </div>
                <div className="ProductDisplay_rightPrice_new">
                    ${product.new_price}
                </div>
            </div>
            <div className="ProductDisplay_rightDescription">
                Introducing our Olive Green Turtle Neck Full Sleeve Sweater - a timeless blend of comfort and style. Crafted from a soft, breathable material, it keeps you warm without sacrificing breathability. The classic turtle neck adds a touch of sophistication, while the rich olive green hue complements a variety of outfits. 
            </div>
            <div className="ProductDisplay_rightSize">
                <h1>Select Size</h1>
                <div className="ProductDisplay_rightSizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='ProductDisplay_rightCategory'>
                <span>Category: </span>Women, T-Shirt, Crop Top
            </p>
            <p className='ProductDisplay_rightCategory'>
                <span>Tags: </span>Modern, Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay