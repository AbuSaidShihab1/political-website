import React,{useState,useEffect} from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import axios from "axios"
const Newssection = () => {
      const [newsdata,setnewsdata]=useState([]);
    const getnewses=()=>{
        axios.get(`https://politics-backend.phpshottershondhane.com/news`)
        .then((res)=>{
            if(res.data.success){
                setnewsdata(res.data.news);
            }
        }).catch((err)=>{
            console.log(err.name)
        })
    };
    useEffect(()=>{
      getnewses();
    },[])
  return (
    <>
    {
      newsdata.length > 0 ?  <section className='px-[20px] lg:px-[50px] pb-[80px] pt-[20px] font-main_font xl:px-[100px] 2xl:px-[170px]'>
             <div className='text-center'>
            <h1 className='text-[17px] lg:text-[18px] font-[500] text-indigo-500 underline'>Our News</h1>
            <h1 className='text-[35px] lg:text-[42px] font-[600] text-heading_color'>Latest News</h1>
           </div>
           {/* ------------------------all images---------------------- */}
                  <section>
                       <section className='pt-[50px] flex  gap-[30px] lg:flex-row flex-col'>
                  {
                    newsdata.map((data)=>{
                        return(
                   <div className='w-[100%] lg:w-[31%] bg-white shadow-md border-[1px] border-neutral-200'>
                        <div className='w-[100%]'>
                            <img className='w-[100%] h-[200px] lg:h-[250px]' src={`https://politics-backend.phpshottershondhane.com/images/${data.photo}`} alt="" />
                        </div>
                        <div className='p-[20px]'>
                            <div className='flex justify-normal items-center gap-[20px]'>
                                <span className='px-[15px] text-[16px] py-[10px] bg-[#285BD4] text-white rounded-[5px] shadow-sm'>{data.createdAt.slice(0,10)}</span>
                                <h2 className='text-[16px] text-[#5e7290] font-[500] hover:text-[#285BD4]'>By admin</h2>
                            </div>
                              {
                                data.title.length > 30 ? <h1 className='mt-[15px] text-[22px] lg:text-[25px] font-[600] text-heading_color'>{data.title.slice(0,30)}..</h1>:<h1 className='mt-[15px] text-[22px] lg:text-[25px] font-[600] text-heading_color'>{data.title}</h1>
                              }
                                 {
                                data.description.length > 150 ?     <p className='text-[16px] mt-[10px] mb-[10px]  text-neutral-600 leading-[27px]'>{data.description.slice(0,150)}..</p>:    <p className='text-[16px] mt-[10px] mb-[10px]  text-neutral-600 leading-[27px]'>{data.description}</p>
                              }
                        
                            <NavLink className="text-[#285BD4] text-[16px] flex justify-normal items-center gap-[5px]">
                                Read more <GoArrowUpRight/>
                            </NavLink>
                        </div>
                    </div>
                        )
                    })
                 } 
                </section>
                  </section>
         </section>:""
    }
     
    </>
  )
}

export default Newssection