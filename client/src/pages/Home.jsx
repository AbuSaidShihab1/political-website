import React,{useEffect} from 'react'
import Header from '../components/Header'
import client_photo from "../assets/client_photo.png"
import { RiExchangeFundsFill } from "react-icons/ri";
import { FiCheckSquare } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { ImNewspaper } from "react-icons/im";
import { NavLink, useLocation } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import { FaBriefcaseMedical } from "react-icons/fa";
import AOS from 'aos';
import { LuWebhook } from "react-icons/lu";
import { BsShop } from "react-icons/bs";
import { SiSololearn } from "react-icons/si";
import { RiAppsLine } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import 'aos/dist/aos.css';
import { HiZoomIn } from "react-icons/hi";
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Newssection from '../components/Newssection';
import Campaignsection from '../components/Campaignsection';
const Home = () => {
         const pathname=useLocation();
      useEffect(()=>{
        window.scrollTo(0,0)
  },[pathname]);
  return (
    <section>
        <section className='w-full  h-[100vh] font-main_font bg-[#00C07C] px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[170px]'>
             <Header/>
             {/* -------------------hero section------------------ */}
              <section className='w-full h-auto lg:h-[88vh] flex justify-between items-center flex-col'>
                     <div className='w-[100%] lg:w-[80%] xl:w-[70%] '>
                    <img className='w-[100%] xl:w-[75%] m-auto' src={client_photo} alt="" />
                    <div className='w-full h-[70px] lg:h-[110px] bg-[rgba(0,0,0,0.4)] flex justify-center items-center '>
                            <div className='w-[25%] h-[70px] lg:h-[110px] bg-[#E70F47] flex  lg:flex-row flex-col justify-center items-center gap-[5px] lg:gap-[10px]'>
                                <div>
                                    <RiExchangeFundsFill className='text-[20px] lg:text-[30px] text-white'/>
                                </div>
                                <h2 className='text-[12px] lg:text-[18px] font-[600] text-white'>Contribute</h2>
                            </div>
                             <div className='w-[25%]  h-[70px] lg:h-[110px]  flex justify-center lg:flex-row flex-col items-center gap-[10px]'>
                                <div>
                                    <FiCheckSquare className='text-[20px] lg:text-[30px] text-white'/>
                                </div>
                                <h2 className='text-[12px] lg:text-[18px] font-[600] text-white'>Volunteer</h2>
                            </div>
                                   <div className='w-[25%]  h-[70px] lg:h-[110px]  flex justify-center lg:flex-row flex-col items-center gap-[10px]'>
                                <div>
                                    <MdEmail className='text-[20px] lg:text-[30px] text-white'/>
                                </div>
                                <h2 className='text-[12px] lg:text-[18px] font-[600] text-white'>Email Updates</h2>
                            </div>
                                   <div className='w-[25%]  h-[70px] lg:h-[110px]  flex justify-center lg:flex-row flex-col items-center gap-[10px]'>
                                <div>
                                    <ImNewspaper className='text-[20px] lg:text-[30px] text-white'/>
                                </div>
                                <h2 className='text-[12px] lg:text-[18px] font-[600] text-white'>Latest News</h2>
                            </div>
                    </div>
                              <h1  className='text-[15px] lg:text-[20px] w-[85%] lg:w-[70%] m-auto text-center text-white mt-[20px]'>"Together we the people achieve more than any single person could ever do alone.It is time to move beyond partnership and build a stronger tomorrow."</h1>
                               {/* <button className='w-[200px] h-[50px] border-[2px] border-white background-traparent text-[17px] text-white m-auto block mt-[10px]'>Read more</button> */}
                  </div>
                    {/* <div className='w-[50%]'>
                              <h1>"Together we the people achieve more than any single person could ever d alone.It is time to move beyond partnership andbuild a stronger tomorrow."</h1>
                  </div> */}
             
              </section>
             {/* -------------------hero section------------------ */}
        </section>
            {/* ----------------about us----------------- */}
      <section className='px-[20px] font-main_font lg:px-[50px] xl:px-[100px] 2xl:px-[150px] py-[50px] lg:py-[80px] flex lg:flex-row flex-col justify-center  lg:gap-[30px] xl:gap-[50px] gap-[20px]'>
        <section className='w-[100%] lg:w-[50%] h-full'>
         <img className='w-[80%] m-auto lg:w-[90%] h-[300px] lg:h-[100%]' src="https://assets.website-files.com/63d5ec95050b76dc48ad34fd/63eb4495aecb727e1b01fc11_1.jpg" alt="" />
     </section>
     <section className='w-[100%] lg:w-[50%]'>
        <h1 className='text-[25px] md:text-[30px] lg:text-[40px] xl:text-[45px] font-outfit lg:leading-[60px] mb-[10px] text-[#190E4E] font-[700]'>We Fight for the better Living & better Country</h1>
        <p className='text-[16px] leading-[25px] mt-[20px] font-poppins mb-[20px] text-neutral-600'>To make sure all Citizen rights, you have to work together and make a better country for our child. So we have to take initiative proper way to ensure the all right and make the country better for living</p>
     <div className='lg:pl-[30px] lg:border-l-[1px] border-[#333]'>
        <div className='mb-[10px]'>
            <h2  className='text-[18px] md:text-[14px] lg:text-[20px] font-poppins text-[#333] font-[600]'>Our Party is Growing</h2>
            <p className='text-[16px] leading-[25px] mt-[10px] font-poppins mb-[20px] text-neutral-600'>To make sure all Citizen rights, you have to work together better country for our child. So we have to take initiative way ensure the all right and make the country better for living</p>
        </div>
         <div>
            <h2 className='text-[18px] md:text-[14px] lg:text-[20px] font-poppins text-[#333] font-[600]'>We care about Issues</h2>
            <p className='text-[16px] leading-[25px] mt-[10px] font-poppins mb-[20px] text-neutral-600'>To make sure all Citizen rights, you have to work together better country for our child. So we have to take initiative way ensure the all right and make the country better for living</p>
        </div>
     </div>
        <button className='px-[30px] py-[13px] bg-[#16327A] text-[16px] mt-[20px] text-white'>Campaign</button>
     </section>

      </section>
      {/* ----------------about us----------------- */}

      {/* -----------------Join Our Movement----------------------- */}
      <section className='px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[170px] pt-[30px] pb-[80px]'>
          <div className='w-[100%] lg:w-[80%] m-auto text-center'>
            <div className='w-full lg:w-[80%] m-auto'>
                   <h1 className='text-[25px] lg:text-[30px] xl:text-[40px] font-poppins font-[600] text-[#333] mb-[10px]'>Join Our Movement</h1>
            <p className='text-[16px] leading-[25px] mt-[10px] font-poppins mb-[20px] text-neutral-600'>To make sure all Citizen rights, you have to work together and make better country for our child. So we have to take initiative proper</p>
            </div>
                <div className='w-full lg:bg-[#EAEAEA] p-[20px]'>
                <form action=""className='w-full flex lg:flex-row flex-col justify-center items-center h-auto lg:h-[55px] gap-[5px]'>
                    <input type="text"placeholder='Your Name'className='w-[100%] lg:border-none border-[1px] border-[#eee] lg:w-[28%] h-[55px] bg-white placeholder-gray-500 font-poppins text-[16px] pl-[20px] pr-[10px]  outline-none' />
                    <input type="text"placeholder='Email here'className='w-[100%] lg:border-none border-[1px] border-[#eee] lg:w-[28%] h-[55px] bg-white placeholder-gray-500 font-poppins text-[16px] pl-[20px] pr-[10px]  outline-none' />
                    <input type="text"placeholder='Phone number'className='w-[100%] lg:border-none border-[1px] border-[#eee] lg:w-[28%] h-[55px] bg-white placeholder-gray-500 font-poppins text-[16px] pl-[20px] pr-[10px]  outline-none' />
        <button className='w-[100%] lg:w-[20%] lg:mt-0 mt-[15px] h-[55px]  font-poppins bg-[#16327A] text-[16px] text-white'>Join us</button>
                </form>
            </div>
         </div>
      </section>
      {/* banner */}
      <section className='bg-[#00C07C] font-poppins px-[20px] lg:px-[50px] flex justify-center lg:flex-row gap-[30px] flex-col items-center xl:px-[100px] 2xl:px-[170px] py-[80px]'>
             <div className='w-[100%] lg:w-[30%] text-center lg:border-r-[1px] border-white'>
                <div className='mb-[20px]'>
                    <img className='w-[60px] lg:w-[80px] m-auto' src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63d793adcaff17214b253de4_box-donation.svg" alt="" />
                </div>
                <h2 className='text-[20px] lg:text-[22px] text-white font-[600] mb-[8px]'>Our Campaign</h2>
                <p  className='text-[16px]  text-neutral-300 '>Learn about our Mission</p>
             </div>
                       <div className='w-[100%] lg:w-[30%] text-center lg:border-r-[1px] border-white'>
                <div className='mb-[20px]'>
                    <img className='w-[60px] lg:w-[80px] m-auto' src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63d79362a7491ddfe98d6818_mike.svg" alt="" />
                </div>
                <h2 className='text-[20px] lg:text-[22px] text-white font-[600] mb-[8px]'>Join Volunteer</h2>
                <p  className='text-[16px]  text-neutral-300 '>Be a part of us</p>
             </div>
                       <div className='w-[100%] lg:w-[30%] text-center '>
                <div className='mb-[20px]'>
                    <img className='w-[60px] lg:w-[80px] m-auto' src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63d793ad9c1d37240d521161_raise-hand.svg" alt="" />
                </div>
                <h2 className='text-[20px] lg:text-[22px] text-white font-[600] mb-[8px]'>Donation</h2>
                <p  className='text-[16px] text-neutral-300 '>Your Donation helps us</p>
             </div>
      </section>
      {/* -------------------campaign------------- */}
      <Campaignsection/>
      {/* -----------------our services--------------- */}
         <section className='px-[20px] lg:px-[50px] pb-[80px] pt-[20px] font-main_font xl:px-[100px] 2xl:px-[170px]'>
             <div className='text-center'>
            <h1 className='text-[17px] lg:text-[18px] font-[500] text-indigo-500 underline'>what we offer</h1>
            <h1 className='text-[35px] lg:text-[42px] font-[600] text-heading_color'>What We Do</h1>
           </div>
           {/* what we offer */}
           <section className='w-full flex justify-center gap-[30px] mt-[50px] lg:flex-row flex-col'>
              <div  className='box w-[100%]   mr-[10px] bg-white shadow-lg z-[10000]  rounded-[5px] min-h-[240px] flex justify-start pt-[20px] items-start flex-col cursor-pointer transition-all duration-500  h-auto p-[20px]'>
                <div className='mb-[10px] flex  justify-between items-center w-full '>
                  <div className='w-[70px] h-[70px] bg-[#28262A] rounded-full flex justify-center items-center text-[30px] text-[#EBA43B]'>
                    <SiSololearn/>
                  </div>
                <h1 className=' text-[50px] font-[700] text-[#eee]'>01</h1>
                </div>
                <h1 className='text-[20px] text-black font-[600]'>Economic
                </h1>
                <p className='mt-[10px] text-[16px] text-neutral-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione, necessitatibus quibusdam quos quam fugit.</p>
            </div>
     <div  className='box w-[100%]   mr-[10px] bg-white shadow-lg z-[10000]  rounded-[5px] min-h-[240px] flex justify-start pt-[20px] items-start flex-col cursor-pointer transition-all duration-500  h-auto p-[20px]'>
                <div className='mb-[10px] flex  justify-between items-center w-full '>
                  <div className='w-[70px] h-[70px] bg-[#FFDE96] rounded-full flex justify-center items-center text-[30px] text-[#EBA43B]'>
                    <CgWebsite/>
                  </div>
                <h1 className=' text-[50px] font-[700] text-[#eee]'>02</h1>
                </div>
                <h1 className='text-[20px] text-black font-[600]'>Development
                </h1>
                <p className='mt-[10px] text-[16px] text-neutral-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione, necessitatibus quibusdam quos quam fugit.</p>
            </div>
         {/* =-===============bottom box================= */}
         <div  className='box w-[100%]   mr-[10px] bg-white shadow-lg z-[10000]  rounded-[5px] min-h-[240px] flex justify-start pt-[20px] items-start flex-col cursor-pointer transition-all duration-500  h-auto p-[20px]'>
                <div className='mb-[10px] flex  justify-between items-center w-full '>
                  <div className='w-[70px] h-[70px] bg-[#B1F3D4] rounded-full flex justify-center items-center text-[30px] text-green-500'>
                    <FaBriefcaseMedical/>
                  </div>
                <h1 className=' text-[50px] font-[700] text-[#eee]'>03</h1>
                </div>
                <h1 className='text-[20px] text-black font-[600]'>Medical
                </h1>
                <p className='mt-[10px] text-[16px] text-neutral-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione, necessitatibus quibusdam quos quam fugit.</p>
            </div>
         {/* =-===============bottom box================= */}
       
           </section>
         </section>
         {/* -------------------our gallery------------------ */}
         <Gallery/>
         {/* ------------our latest news------------------- */}
           <Newssection/>
         {/* ------------our latest news------------------- */}
         {/* ------------------our partner-------------- */}
         <section className='px-[20px] lg:px-[50px] pb-[80px] pt-[20px] font-main_font xl:px-[100px] 2xl:px-[170px]'>
            <Marquee>
                <div className='mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4edf7736b07f878110a6_1.svg" alt="" />
                </div>
                   <div className='mr-[100px]'>
                    <img src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4f128c99fe315d08eb0f_4.svg" alt="" />
                </div>
                   <div className='mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4eeb03182983ba77f10c_2.svg" alt="" />
                </div>
                     <div className='mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4f04e80417743f565ded_3.svg" alt="" />
                </div>
                     <div className='mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4f128c99fe315d08eb0f_4.svg" alt="" />
                </div>
                  <div className='mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4edf7736b07f878110a6_1.svg" alt="" />
                </div>
                   <div className='mr-[100px]'>
                    <img src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4f128c99fe315d08eb0f_4.svg" alt="" />
                </div>
                   <div className='mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4eeb03182983ba77f10c_2.svg" alt="" />
                </div>
            </Marquee>
         </section>
                  <Footer/>
    </section>
  )
}

export default Home