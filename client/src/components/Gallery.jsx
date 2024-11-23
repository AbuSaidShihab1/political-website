import React,{useState,useEffect} from 'react'
import axios from "axios"
const Gallery = () => {
    const [gallery,setgallery]=useState([])
    const getgallery=()=>{
        axios.get(`https://politics-backend.phpshottershondhane.com/gallery`)
        .then((res)=>{
            if(res){
                setgallery(res.data.gallery);
            }
        }).catch((err)=>{
            console.log(err.name)
        })
    };
  useEffect(()=>{
   getgallery();
  },[])
  return (
    <>
    {
        gallery.length > 0 ?        <section className='px-[20px] lg:px-[50px] pb-[80px] pt-[20px] font-main_font xl:px-[100px] 2xl:px-[170px]'>
             <div className='text-center'>
            <h1 className='text-[17px] lg:text-[18px] font-[500] text-indigo-500 underline'>happy moments</h1>
            <h1 className='text-[35px] lg:text-[42px] font-[600] text-heading_color'>Photo Gallery</h1>
           </div>
           {/* ------------------------all images---------------------- */}
           <section className='mt-[20px] lg:mt-[50px] flex justify-center lg:justify-between items-center gap-[10px]  lg:gap-y-[25px] flex-wrap'>
        {
            gallery.map((data)=>{
                return(
                        <div className='w-[46%] lg:w-[32%] h-[200px] lg:h-[300px] relative group overflow-hidden'>
                <img className='w-full h-[300px]' src={`https://politics-backend.phpshottershondhane.com/images/${data.photo}`} alt="" />
                <div className='absolute top-0 left-[-120%] p-[10px] z-[1000] w-full h-[100%] group-hover:left-0 transition-all duration-200'>
                     <div className='w-full h-full p-[20px] bg-[rgba(0,0,0,0.4)] flex justify-center items-center'>
                             <h1 className='text-white text-[16px] lg:text-[20px] font-poppins font-[600]'>{data.title}</h1>
                             {/* <div className='w-[80px] h-[80px] bg-[#16327A] flex justify-center items-center rounded-full'>
                                   <HiZoomIn className='text-[32px] text-white cursor-pointer'/>
                             </div> */}
                     </div>
                </div>
            </div>
                )
            })
        }         
           </section>
         </section>:""
    }
    </>

  )
}

export default Gallery