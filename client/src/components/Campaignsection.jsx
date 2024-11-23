import React,{useState,useEffect} from 'react'
import axios from "axios"
import { IoLocationSharp } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";
import { NavLink } from 'react-router-dom';
const Campaignsection = () => {
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
    useEffect(()=>{
         getcampaign();
    },[])
  return (
   <>
   {
    campaign.length > 0 ?    <section className='px-[20px] lg:px-[50px] py-[80px] font-main_font xl:px-[100px] 2xl:px-[170px]'>
                   <div className='w-[100%] lg:w-[60%] m-auto text-center'>
                       <h1 className='text-[25px] lg:text-[30px] xl:text-[35px] font-[700] text-[#333]'>Upcoming Campaign</h1>
                       <p className='text-[14px] lg:text-[16px] font-poppins mt-[10px] text-neutral-600'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                   </div>
                   {/* -----------------campaign----------------- */}
                   <section className='mt-[50px] font-poppins flex justify-center lg:flex-row flex-col items-center gap-[20px]'>
                   {
                    campaign.slice(0,3).map((data)=>{
                        return(
                            <NavLink to={`/campaign-description/${data._id}`} className=" w-[100%] lg:w-[33%]">
                         <div className='relative'>
                            <img className='w-full h-[300px] lg:h-[450px]' src={`https://politics-backend.phpshottershondhane.com/images/${data.photo}`} alt="" />
                          <div className='absolute top-0  left-0 w-full p-[20px] h-[100%] bg-[rgba(0,0,0,0.4)]'>
                               <div className='w-full h-[100%] flex justify-end items-start flex-col'>
                                <h1 className='text-[16px] text-white mb-[5px]'>{data.title}</h1>
                                <div className='flex justify-start items-center gap-[5px] text-white'>
                                    <IoLocationSharp/>
                                    <p className='text-[14px] '>{data.address}</p>
                                </div>
                                <div  className='flex justify-start mt-[5px] items-center gap-[5px] text-white'>
                                    <WiTime3/>
                                    <p className='text-[14px] '>{data.createdAt.slice(0,10)}</p>
                                </div>
                               </div>
                          </div>
                    </div>
                                </NavLink>

                     
                        )
                    })
                   }
                
                   </section>
      </section>:""
   }

   </>
  )
}

export default Campaignsection