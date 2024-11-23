import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className='w-full h-auto  font-poppins'>
           <section className='w-full h-auto bg-[#00C07C] px-[20px] md:px-[150px] '>
            <section className='w-full h-auto  flex justify-start md:flex-row flex-col gap-[30px] md:gap-[120px] border-b-[1px] border-[#eee] py-[50px]'>
               <div className='w-[100%] lg:w-[40%] h-auto'>
                   <h1 className='text-[18px] text-white mb-[25px]'>NEWSLETTER</h1>
                   <h1 className='text-[22px] text-white font-poppins font-[600] mb-[15px]'>Get latest Updates directly in inbox</h1>
                  <form action="">
                    <input type="text"placeholder='Your email here'className='p-[20px] w-full h-[55px] mb-[10px] text-[16px] outline-indigo-600 border-[1px] border-white bg-transparent placeholder-gray-200 text-white text-[14px]' /><br />
                                            <button className='px-[20px] py-[12px] bg-[#E70F47] text-[17px] text-white cursor-pointer font-[500]'>Subscribe</button>
                  </form>
               </div>
               <div className='w-[100%] md:w-auto h-auto'>
                   <h1 className='text-[18px] text-white mb-[25px] font-[600]'>Nevigation</h1>
                     <ul className='flex flex-col gap-[15px]'>
                      <li className='font-[400] text-[16px] text-white'>
                        <NavLink>About Us</NavLink>
                      </li>
                    <li className='font-[400] text-[16px] text-white'>
                        <NavLink>Manifesto</NavLink>
                      </li>
                       <li className='font-[400] text-[16px] text-white'>
                        <NavLink>Issues</NavLink>
                      </li>
                        <li className='font-[400] text-[16px] text-white'>
                        <NavLink>Blog Post</NavLink>
                      </li>
                       <li className='font-[400] text-[16px] text-white'>
                        <NavLink>Contact us</NavLink>
                      </li>
       
                    </ul>
</div>
        <div className='w-[100%] md:w-auto h-auto'>
                   <h1 className='text-[18px] text-white mb-[25px] font-[600]'>Important</h1>
                     <ul className='flex flex-col gap-[15px]'>
                      <li className='font-[400] text-[16px] text-white'>
                        <NavLink>About Us</NavLink>
                      </li>
                    <li className='font-[400] text-[16px] text-white'>
                        <NavLink>Manifesto</NavLink>
                      </li>
                       <li className='font-[400] text-[16px] text-white'>
                        <NavLink>Issues</NavLink>
                      </li>
                        <li className='font-[400] text-[16px] text-white'>
                        <NavLink>Blog Post</NavLink>
                      </li>
                       <li className='font-[400] text-[16px] text-white'>
                        <NavLink>Contact us</NavLink>
                      </li>
       
                    </ul>
</div>
        <div className='w-[100%] md:w-auto h-auto'>
                   <h1 className='text-[18px] text-white mb-[25px] font-[600]'>Contact info</h1>
                     <ul className='flex flex-col gap-[15px]'>
                      <li className='font-[400] text-[16px] text-white'>
                        <NavLink>About Us</NavLink>
                      </li>
                    <li className='font-[400] text-[16px] text-white'>
                        <NavLink>Manifesto</NavLink>
                      </li>
                       <li className='font-[400] text-[16px] text-white'>
                        <NavLink>Issues</NavLink>
                      </li>
                        <li className='font-[400] text-[16px] text-white'>
                        <NavLink>Blog Post</NavLink>
                      </li>
                       <li className='font-[400] text-[16px] text-white'>
                        <NavLink>Contact us</NavLink>
                      </li>
       
                    </ul>
</div>
            </section>
            <section>
            <div className='w-full h-auto py-[20px] flex justify-between items-center md:flex-row flex-col gap-[10px] '>
         <p className='text-[15px] m-auto text-white'>Copyright © 2024 Abu Said Shihab  All rights reserved</p>
    </div>
            </section>
           </section>
          
    </footer>
  )
}

export default Footer