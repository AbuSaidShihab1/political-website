import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Contextapi } from '../../context/Appcontext';
import Dashboardleftside from '../../components/Dashboard/Dashboardleftside';
import Dashboradheader from '../../components/Dashboard/Dashboardheader';
import logo from "../../assets/logo.png"
import moment from "moment"
const Dashcampaign = () => {
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
   },[]);
//    all campaign 
         const [campaign,setcampaign]=useState([]);
       const getcampaign=()=>{
        axios.get(`https://politics-backend.phpshottershondhane.com/campaign`)
        .then((res)=>{
            if(res.data.success){
                setcampaign(res.data.campaign);
            }
        }).catch((err)=>{
            console.log(err.name)
        })
    };
        const deletecampaign=(id)=>{
            let confirm_box=confirm("Are you sure?");
            if(confirm_box){
     axios.get(`https://politics-backend.phpshottershondhane.com/delete-campaign/${id}`)
        .then((res)=>{
            if(res.data.success){
               toast.success(`News has been deleted!`)
            }
        }).catch((err)=>{
            toast.error(err.name)
        })
            }
   
    }
    useEffect(()=>{
        getcampaign()
    },[deletecampaign]);
  return (
    <section className='w-full h-[100vh] flex font-poppins'>
        <section className={activesidebar ? 'w-0 h-[100vh] transition-all duration-300 overflow-hidden':'w-0 md:w-[20%] transition-all duration-300 h-[100vh]'}>
            <Dashboardleftside/>
        </section>
        <section className={activesidebar ? 'w-[100%] h-[100vh] overflow-y-auto transition-all duration-300':' transition-all duration-300 w-[100%] overflow-y-auto md:w-[85%] h-[100vh]'}>
        <Dashboradheader/> 
  <section className='w-[100%] m-auto py-[20px] xl:py-[40px] px-[10px]'>
               <div className='w-full flex justify-between items-center'>
                <h1 className='text-[20px] lg:text-[25px] font-[600]'>All Campaign</h1>
                  <NavLink to="/add-campaign">
                           <button className='px-[20px] lg:px-[25px] py-[12px] bg-[#00C07C] rounded-[5px] text-white cursor-pointer text-[14px] lg:text-[16px]'>Add Campaign</button>                  
                  </NavLink>
               </div>
               {/* --------------------table--------------- */}
               <section className='pt-[50px]'>
{
    campaign.length > 0 ? <div className="relative overflow-x-auto border-[1px] border-[#eee]">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr className='flex justify-between'>
        <th scope="col" className="px-6 py-3">
          Title
        </th>
        <th scope="col" className="px-6 py-3 hidden lg:block">
          Description
        </th>
           <th scope="col" className="px-6 py-3 hidden lg:block">
          Address
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
            campaign.map((data)=>{
                return(
      <tr className="bg-white border-b dark:bg-gray-800 flex justify-between items-center dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium flex justify-start items-center gap-[10px] text-gray-900 whitespace-nowrap dark:text-white">
           <img className='w-[30px] lg:w-[50px] h-[30px]  lg:h-[50px]' src={`https://politics-backend.phpshottershondhane.com/images/${data.photo}`} alt="" />
          {
            data.title.length > 20 ? <p>{data.title.slice(0,20)}..</p>:<p>{data.title}</p>
          }
        </th>
        <td className="px-6 py-4 hidden lg:block">
          {
            data.description.length > 30 ? <p>{data.title.slice(0,30)}..</p>:<p>{data.description}</p>
          }
        </td>
         <td className="px-6 py-4 hidden lg:block">
           {
            data.address.length > 30 ? <p>{data.address.slice(0,30)}..</p>:<p>{data.address}</p>
          }
        </td>
        <td className="px-6 py-4 hidden lg:block">
          {moment(data.createdAt).fromNow()}
        </td>
        <td className="px-6 py-4  flex justify-center gap-[5px] items-center lg:flex-row flex-col">
          <NavLink to={`/edit-campaign/${data._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</NavLink>
          <button onClick={()=>{deletecampaign(data._id)}} className="font-medium ml-[15px] text-red-600 dark:text-blue-500 hover:underline">Delete</button>
        </td>
      </tr>
                )
            })
        }


    </tbody>
  </table>
</div>:<div>
    <h1 className="text-center text-[25px]">Please add campaign!</h1>
</div>
}



               </section>
       </section>
        </section>
    </section>
  )
}

export default Dashcampaign