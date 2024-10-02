import React from 'react'
import './Header.css'
import { FaSearch } from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
const Header = () => {
  return (
    <div className='header'>
      <img  className="header-icon"    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTykArUHzgC5fN0Z7L3cgvZ1szSOk2iq23Psw&s'></img>
      <div className="header_center">
        <input type="text"placeholder='search'/>
        <FaSearch />
      </div>
      <div className="header_right">
        <p>Become a host</p>
        <MdOutlineLanguage />
        <FaArrowDown />
        <RxAvatar />
      </div>
    </div>
  )
}

export default Header
