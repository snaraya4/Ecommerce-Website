import React, {useContext, useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [Menu,setMenu] = useState("Shop");
    const {getTotalCartItems} = useContext(ShopContext);
    

  return (
    <div className='navbar'>
        <div className="nav_logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='nav_menu'>
            <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{Menu==="Shop"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration: 'none'}} to='/Men'>Men</Link>{Menu==="Men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration: 'none'}} to='/Women'>Women</Link>{Menu==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration: 'none'}} to='/Kids'>Kids</Link>{Menu==="Kids"?<hr/>:<></>}</li>

        </ul>
        <div className="nav_login_cart">
            <button><Link style={{textDecoration: 'none'}} to='/Login'>Login</Link></button>
            <Link style={{textDecoration: 'none'}} to='/Cart'><img src={cart_icon} alt=""  /></Link>
            <div className="nav_cart_count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar