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
const Profile = () => {
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
   const [email,setemail]=useState("");
   const [password,setpassword]=useState("");
   const [counter,setcounter]=useState(1);
    const find_admin=()=>{
        axios.get(`https://politics-backend.phpshottershondhane.com/profile`)
        .then((res)=>{
            if(res){
              setemail(res.data.admin_info[0].email);
              setpassword(res.data.admin_info[0].password);
            }
        }).catch((err)=>{
            toast.error(err.name)
        })
        };

    const handleform=(e)=>{
       e.preventDefault();
       if(email=="" || password==""){
                seterrortext("Please fill up your information!")
       }else if(!email=="" || !password==""){
                axios.post(`https://politics-backend.phpshottershondhane.com/update-profile`,{email,password})
                .then((res)=>{
                    if(res.data.success){
                          toast.success("Admin info has been updated!");
                          setcounter(counter+1)
                    }

                }).catch((err)=>{
                 toast.error("Please try after some time!")
                })
       }
    };
    useEffect(()=>{
     find_gallery();
     find_admin();
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
                    <h1 className='text-[20px] lg:text-[30px] font-[600] mb-[30px]'>Profile Information (Admin)</h1>
                    <form action=""className='w-full'onSubmit={handleform}>
                          <input type="email"onChange={(e)=>{setemail(e.target.value)}} value={email} placeholder='Enter email'className='w-full h-[55px] border-[1px] border-[#eee] p-[20px] outline-[#00C07C] rounded-[5px]' /> <br />
                         <input className='w-full h-[55px] border-[1px] border-[#eee] p-[20px] outline-[#00C07C] rounded-[5px] mt-[20px]'placeholder='Enter passwrod' id="file_input" type="password"onChange={(e)=>{setpassword(e.target.value)}} value={password} />
                        <button className='w-full h-[55px] bg-[#00C07C] text-[16px] text-white mt-[10px] rounded-[5px]'>Update</button>
                    </form>
                </section>
       </section>
        </section>
    </section>
  )
}

export default Profile