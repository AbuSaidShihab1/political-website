import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { LuPlus } from "react-icons/lu";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
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
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Editgallery = () => {
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
     const {id}=useParams();
        const find_gallery=()=>{
        axios.get(`https://politics-backend.phpshottershondhane.com/find-gallery/${id}`)
        .then((res)=>{
            if(res){
              settitle(res.data.gallery.title);
            }
        }).catch((err)=>{
            toast.error(err)
        })
        };
   //    ------------add gallery------------
   const [title,settitle]=useState("");
   const [file,setfile]=useState();
   const [counter,setcounter]=useState(1)
    const handleform=(e)=>{
       e.preventDefault();
       if(title==""){
                seterrortext("Please fill up your information!")
       }else if(!title=="" ){
               const formdata=new FormData();
                formdata.append("title",title);
                formdata.append("file",file)
                axios.post(`https://politics-backend.phpshottershondhane.com/update-gallery/${id}`,formdata)
                .then((res)=>{
                    if(res.data.success){
                          toast.success("Photo has been added!");
                          setcounter(counter+1)
                    }

                }).catch((err)=>{
                 toast.error("Please try after some time!")
                })
       }
    };
    useEffect(()=>{
     find_gallery();
    },[counter])
  return (
    <section className='w-full h-[100vh] flex font-poppins'>
        <section className={activesidebar ? 'w-0 h-[100vh] transition-all duration-300 overflow-hidden':'w-0 md:w-[20%] transition-all duration-300 h-[100vh]'}>
            <Dashboardleftside/>
        </section>
        <section className={activesidebar ? 'w-[100%] h-[100vh] overflow-y-auto transition-all duration-300':' transition-all duration-300 w-[100%] overflow-y-auto md:w-[85%] h-[100vh]'}>
        <Dashboradheader/> 
        <ToastContainer/>
       <section className='w-[100%] lg:w-[60%] m-auto py-[20px] xl:py-[40px] px-[30px]'>
                <section>
                    <h1 className='text-[20px] lg:text-[30px] font-[600] mb-[30px]'>Update Photo</h1>
                    <form action=""className='w-full'onSubmit={handleform}>
                        <input type="text"onChange={(e)=>{settitle(e.target.value)}} value={title} placeholder='Enter Title'className='w-full h-[55px] border-[1px] border-[#eee] p-[20px] outline-[#00C07C] rounded-[5px]' /> <br />
                         <input className="block w-full p-[20px] mt-[10px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"onChange={(e)=>{setfile(e.target.files[0])}} />
                        <button className='w-full h-[55px] bg-[#00C07C] text-[16px] text-white mt-[10px] rounded-[5px]'>Publish</button>
                    </form>
                </section>
       </section>
        </section>
    </section>
  )
}

export default Editgallery