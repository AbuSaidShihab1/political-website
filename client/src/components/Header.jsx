import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import logo from "../assets/logo2.png"
const Header = () => {
    const [sidebar,setsidebar]=useState(false);
  return (
    <section className='font-main_font h-[12vh]'>
        {/* top header */}
        {/* <section className=' border-b-[1px] border-[] w-full py-[20px] flex justify-between items-center'>
            <div>
                <p className='text-[14px] text-[#d6d6d6] font-[500]'>Press:New Political Issue is comming...</p>
            </div>
            <div className='flex justify-center items-center gap-[10px] lg:gap-[20px]'>
                 <NavLink>
                    <FaFacebookF className='text-[20px] text-white cursor-pointer hover:translate-y-[-5px] transition-all duration-200'/>
                 </NavLink>
                     <NavLink>
                    <FaXTwitter className='text-[20px] text-white cursor-pointer hover:translate-y-[-5px] transition-all duration-200'/>
                 </NavLink>
                     <NavLink>
                    <FaPinterest className='text-[20px] text-white cursor-pointer hover:translate-y-[-5px] transition-all duration-200'/>
                 </NavLink>
                     <NavLink>
                    <MdEmail className='text-[20px] text-white cursor-pointer hover:translate-y-[-5px] transition-all duration-200'/>
                 </NavLink>
            </div>
        </section> */}
        {/* top header */}
        <header className='py-[20px] flex justify-between items-center'>
            <div className="logo">
                <img className='w-[150px] lg:w-[200px] lg:scale-[1.3]' src={logo} alt="" />
            </div>
            <nav className='lg:flex hidden '>
                <ul className='flex justify-center items-center gap-[30px]'>
                    <li>
                        <NavLink to="/" className="text-[18px] text-white hover:text-[#E70F47]">Home</NavLink>
                    </li>
                       <li>
                        <NavLink to="/about" className="text-[18px] text-white hover:text-[#E70F47]">About</NavLink>
                    </li>
                       <li>
                        <NavLink to="/campaign" className="text-[18px] text-white hover:text-[#E70F47]">Campaign</NavLink>
                    </li>
                       <li>
                        <NavLink to="/news" className="text-[18px] text-white hover:text-[#E70F47]">News</NavLink>
                    </li>
                       <li>
                        <NavLink to="/contact" className="text-[18px] text-white hover:text-[#E70F47]">Contact</NavLink>
                    </li>
                               <li>
                        <NavLink to="/admin-login" className="text-[18px] text-white hover:text-[#E70F47]">Admin</NavLink>
                    </li>
                    <li>
                        <NavLink to="/donate">
                            <button className='px-[20px] py-[10px] bg-[#E70F47] text-[17px] text-white cursor-pointer font-[600]'>Donate</button>
                        </NavLink>
                    </li>
       

                </ul>
            </nav>
                <nav className={sidebar ?  'lg:hidden fixed transition-all duration-300 top-0 right-0 bg-white w-[60%] h-[100vh] shadow-md ':'lg:hidden fixed top-0 right-[-120%] transition-all duration-300 bg-white w-[60%] h-[100vh] shadow-md '}>
                  <div className='absolute top-[5%] right-[5%]'onClick={()=>{setsidebar(false)}}>
                    <CgClose className='text-[25px] cursor-pointer'/>
                  </div>
                <ul className='flex  flex-col justify-start items-center gap-[10px] pt-[100px]'>
                    <li>
                        <NavLink to="/" className="text-[18px] text-black hover:text-[#E70F47]">Home</NavLink>
                    </li>
                       <li>
                        <NavLink to="/about" className="text-[18px] text-black hover:text-[#E70F47]">About</NavLink>
                    </li>
                       <li>
                        <NavLink to="/campaign" className="text-[18px] text-black hover:text-[#E70F47]">Campaign</NavLink>
                    </li>
                       <li>
                        <NavLink to="/news" className="text-[18px] text-black hover:text-[#E70F47]">News</NavLink>
                    </li>
                       <li>
                        <NavLink to="/contact" className="text-[18px] text-black hover:text-[#E70F47]">Contact</NavLink>
                    </li>
                             <li>
                        <NavLink to="/admin-login" className="text-[18px] text-black hover:text-[#E70F47]">Admin</NavLink>
                    </li>
                    <li>
                        <NavLink to="/donate">
                            <button className='px-[20px] py-[10px] bg-[#E70F47] text-[17px] text-white cursor-pointer font-[600]'>Donate</button>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="menu lg:hidden cursor-pointer"onClick={()=>{setsidebar(true)}}>
                <CgMenuRight className='text-[30px] text-white'/>
            </div>
        </header>
    </section>
  )
}

export default Header