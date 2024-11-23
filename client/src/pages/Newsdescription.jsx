import React,{useState,useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { GoArrowUpRight } from "react-icons/go";
import Footer from '../components/Footer';
import axios from "axios"
const Newsdescription = () => {
        const [newsdata,setnewsdata]=useState([]);
        const {id}=useParams();
    const getnewses=()=>{
        axios.get(`https://politics-backend.phpshottershondhane.com/find-news/${id}`)
        .then((res)=>{
            if(res){
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
   <section>
    <section className='bg-[url("https://assets.website-files.com/63d5ec95050b76dc48ad34fd/63ddf53dcc6c48b7b428ef5f_breadcrumb-background.jpg")] bg-no-repeat bg-cover px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[170px]'>
     <Header/>
      
    </section>
         
      {/* all news */}
      <section className='px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[170px] py-[40px]  lg:py-[100px]'>
               <div className='w-[100%] lg:w-[80%] bg-white m-auto'>
                        <div className='w-[100%]'>
                            <img className='w-[100%] h-[250px] lg:h-[350px]' src={`https://politics-backend.phpshottershondhane.com/images/${newsdata.photo}`} alt="" />
                        </div>
                        <div className='py-[20px]'>
                            <div className='flex justify-between items-center'>
                                <span className='text-[16px] text-black font-poppins'>{newsdata.createdAt}</span>
                            </div>
                           <h1 className='mt-[5px] text-[22px] lg:text-[25px] font-[600] text-heading_color'>{newsdata.title}</h1>        
                                 <p className='text-[16px] mt-[10px] mb-[10px]  text-neutral-600 leading-[27px]'>{newsdata.description}</p>
                                       </div>
                                       </div>
      </section>
                          <Footer/>
   </section>
  )
}

export default Newsdescription