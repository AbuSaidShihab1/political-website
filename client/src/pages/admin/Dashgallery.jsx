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
import moment from "moment"
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
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Dashgallery = () => {
   const navigate=useNavigate();
     const {activesidebar,setactivesidebar,activetopbar,setactivetopbar}=useContext(Contextapi);
     const [showmodal,setmodal]=useState(false);
       const admin_info=JSON.parse(localStorage.getItem("admin_info"));
   
   useEffect(()=>{
         if(!admin_info){
             navigate("/admin-login")
         }
   },[])
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
   },[])
   const [gallery,setgallery]=useState([])
    const getgallery=()=>{
        axios.get(`https://politics-backend.phpshottershondhane.com/gallery`)
        .then((res)=>{
            if(res){
              console.log(res.data.gallery)
                setgallery(res.data.gallery);
            }
        }).catch((err)=>{
            console.log(err.name)
        })
    };

    // delete news
    const [counter,setcounter]=useState(1)
    const deletgallery=(id)=>{
      const confirm_box=confirm("Are you sure?");
      if(confirm_box){
      axios.get(`https://politics-backend.phpshottershondhane.com/delete-gallery/${id}`)
        .then((res)=>{
            if(res.data.success){
               toast.success(`Photo has been deleted!`);
               setcounter(counter+1)
            }
        }).catch((err)=>{
            toast.error(err.name)
        })
      }
       
    }
      useEffect(()=>{
      getgallery();;
    },[counter])
  return (
    <section className='w-full h-[100vh] flex font-poppins'>
        <section className={activesidebar ? 'w-0 h-[100vh] transition-all duration-300 overflow-hidden':'w-0 md:w-[20%] transition-all duration-300 h-[100vh]'}>
            <Dashboardleftside/>
            <ToastContainer/>
        </section>
        <section className={activesidebar ? 'w-[100%] h-[100vh] overflow-y-auto transition-all duration-300':' transition-all duration-300 w-[100%] overflow-y-auto md:w-[85%] h-[100vh]'}>
        <Dashboradheader/> 
  <section className='w-[100%] m-auto py-[20px] xl:py-[40px] px-[10px]'>
               <div className='w-full flex justify-between items-center'>
                <h1 className='text-[25px] font-[600]'>All Photos</h1>
               <NavLink to="/add-gallery">
                 <button className='px-[25px] py-[12px] bg-[#00C07C] rounded-[5px] text-white cursor-pointer text-[16px]'>Add Photo</button>
               </NavLink>
               </div>
               {/* --------------------table--------------- */}
               <section className='pt-[50px]'>

                


{
    gallery.length > 0 ? <div className="relative overflow-x-auto border-[1px] border-[#eee]">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr className='flex justify-between items-center'>
        <th scope="col" className="px-6 py-3">
          Title
        </th>
        <th scope="col" className="px-6 py-3 hidden lg:block">
          Created At
        </th>
     <th scope="col" className="px-6 py-3">
           Action
        </th>
      </tr>
    </thead>
    <tbody>
        {
            gallery.map((data)=>{
                return(
      <tr className="bg-white border-b dark:bg-gray-800 flex justify-between items-center dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium flex justify-start items-center gap-[10px] text-gray-900 whitespace-nowrap dark:text-white">
           <img className='w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]' src={`https://politics-backend.phpshottershondhane.com/images/${data.photo}`} alt="" />
          {
            data.title.length > 20 ? <p>{data.title.slice(0,20)}..</p>:<p>{data.title}</p>
          }
        </th>
      
        <td className="px-6 py-4 hidden lg:block">
          {moment(data.createdAt).fromNow()}
        </td>
        <td className="px-6 py-4 flex flex-col lg:flex-row gap-[5px] justify-center items-center">
          <NavLink to={`/edit-gallery/${data._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</NavLink>
          <button onClick={()=>{deletgallery(data._id)}} className="font-medium ml-[15px] text-red-600 dark:text-blue-500 hover:underline">Delete</button>
        </td>
      </tr>
                )
            })
        }


    </tbody>
  </table>
</div>:<div>
    <h1 className="text-center text-[25px]">Please add photo!</h1>
</div>
}



               </section>
       </section>
        </section>
    </section>
  )
}

export default Dashgallery