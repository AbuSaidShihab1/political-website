import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { LuPlus } from "react-icons/lu";
import { NavLink, useNavigate } from 'react-router-dom';
import { RiShoppingBag4Line } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { FcShipped } from "react-icons/fc";
import { CgShoppingCart } from "react-icons/cg";
import { FiDollarSign } from "react-icons/fi";
import { TbBrandPaypal } from "react-icons/tb";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import axios from 'axios'
import { GoSearch } from "react-icons/go";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FiTrendingUp } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { PiScreencastLight } from "react-icons/pi";
import { TbReload } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";
import { TbCoinTakaFilled } from "react-icons/tb";
import { GrDeliver } from "react-icons/gr";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import { CiGrid41 } from "react-icons/ci";
import { FcProcess } from "react-icons/fc";
import { HiDotsHorizontal } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { Contextapi } from '../../context/Appcontext';
import Dashboardleftside from '../../components/Dashboard/Dashboardleftside';
import Dashboradheader from '../../components/Dashboard/Dashboardheader';
import logo from "../../assets/logo.png"
const Dashboard = () => {
   const navigate=useNavigate();
   const admin_info=JSON.parse(localStorage.getItem("admin_info"));
   
   useEffect(()=>{
         if(admin_info){
          navigate("/admin")
         }else{
          navigate("/admin-login")
         }
   },[])
   
   console.log(admin_info)
     const {activesidebar,setactivesidebar,activetopbar,setactivetopbar}=useContext(Contextapi);
     const [showmodal,setmodal]=useState(false);
     const uploadpost=()=>{
                setmodal(true)
     }
    function handlesidebar(){
        setactivesidebar(!activesidebar)
    }
        useEffect(()=>{
     window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
             setactivetopbar(true)
      }else{
             setactivetopbar(false)
      }
     })
   },[]);
  //  dashboard 
     const [newscount,setnewscount]=useState();
      const [campaigncount,setcampaigncount]=useState();
      const [gallerycount,setgallerycount]=useState();
    const getdashboarddata=()=>{
        axios.get(`https://politics-backend.phpshottershondhane.com/admin`)
        .then((res)=>{
            if(res){
                setnewscount(res.data.count_news);
                setcampaigncount(res.data.count_campaign);
                setgallerycount(res.data.count_gallery)
            }
        }).catch((err)=>{
            console.log(err.name)
        })
    };
    useEffect(()=>{
      getdashboarddata()
    },[])
  return (
    <section className='w-full h-[100vh] flex font-poppins'>
        <section className={activesidebar ? 'w-0 h-[100vh] transition-all duration-300 overflow-hidden':'w-0 md:w-[20%] transition-all duration-300 h-[100vh]'}>
            <Dashboardleftside/>
        </section>
        <section className={activesidebar ? 'w-[100%] h-[100vh] overflow-y-auto transition-all duration-300':' transition-all duration-300 w-[100%] overflow-y-auto md:w-[85%] h-[100vh]'}>
        <Dashboradheader/> 
       <section className='w-[100%] m-auto py-[20px] xl:py-[40px] px-[30px]'>
                <section className='w-full h-auto flex justify-between items-center gap-[20px] lg:flex-row flex-col'>
                 <div className='w-[100%] lg:w-[32%] h-[200px]  p-[30px] bg-[#EBF3FE] rounded-[5px] flex  justify-between items-center'>
                    <div>
                 <h1 className='text-[16px] text-indigo-500 font-[500]'>News</h1>
                <h1 className='text-indigo-600 font-[600] text-[25px]'>{newscount}</h1> 
                   </div>
                       <div>
                         <img className='w-[60px]' src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/svgs/icon-connect.svg" alt="" />
                       </div>
                      </div>
                    <div className='w-[100%] lg:w-[32%] h-[200px]  p-[30px] bg-[#E6FFFA]  rounded-[5px] flex justify-between items-center'>
                      <div>
                    <h1 className='text-[16px] text-[#50DEB9] font-[500]'>Campaign</h1>
                  <h1 className='text-[#50DEB9] font-[600] text-[25px]'>{campaigncount}</h1>
                    </div>
                       <div>
                        <img className='w-[60px]' src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/svgs/icon-speech-bubble.svg" alt="" />
                        </div>
                      </div>
                      <div className='w-[100%] lg:w-[32%] h-[200px] p-[30px] bg-[#FBF2EF]  rounded-[5px] flex justify-between items-center'>
                    <div>
                     <h1 className='text-[16px] text-[#FA896B] font-[500]'>Gallery</h1>
                       <h1 className='text-[#FA896B] font-[600] text-[25px]'>{gallerycount}</h1>
                   </div>
                        <div>
                          <img className='w-[60px]' src="https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/svgs/icon-favorites.svg" alt="" />
                    </div>
                     </div>
                  </section>
       </section>
        </section>
    </section>
  )
}

export default Dashboard