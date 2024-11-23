import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import { GoArrowUpRight } from "react-icons/go";
import Footer from '../components/Footer';
import axios from "axios";
const News = () => {
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
   <section>
    <section className='bg-[url("https://assets.website-files.com/63d5ec95050b76dc48ad34fd/63ddf53dcc6c48b7b428ef5f_breadcrumb-background.jpg")] bg-no-repeat bg-cover px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[170px]'>
     <Header/>
           <div className='w-full h-[40vh] lg:h-[50vh] relative '>
        <div className='absolute flex justify-center items-center top-0 left-0 w-full h-[100%] '>
          <div className='w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%] text-center'>
                 <h2 className='text-[22px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px] font-Prociono font-[600] text-white mb-[10px]'>News List</h2>
                 <ul className='flex justify-center items-center gap-[10px]'>
                <p className='text-[18px] lg:text-[25px] font-[500] text-white'>Home / <span className='element bg-gradient-to-r from-[#80fcf0] bg-[#efce85]   to-[#ac5dfa] inline-block text-transparent bg-clip-text'>News</span></p>
          
                 </ul>
          </div>
        </div>
      </div>
    </section>
         
      {/* all news */}
      {
        newsdata.length > 0 ?  <section className=' flex flex-wrap  gap-[30px] lg:flex-row flex-col px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[170px] py-[100px]'>
                    
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
                        
                            <NavLink to={`/news-description/${data._id}`} className="text-[#285BD4] text-[16px] flex justify-normal items-center gap-[5px]">
                                Read more <GoArrowUpRight/>
                            </NavLink>
                        </div>
                    </div>
                        )
                    })
                 } 
                </section>:<section className='px-[20px] font-poppins py-[50px] text-center'>
                    <h1 className='text-[25px] '>News are empty!</h1>
                </section>
      }
              
              
                         <Footer/>
   </section>
  )
}

export default News