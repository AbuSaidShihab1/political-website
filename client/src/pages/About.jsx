import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Marquee from "react-fast-marquee";
import { MdKeyboardArrowDown } from "react-icons/md";
import Footer from '../components/Footer';
const About = () => {
    const [accordion1,setaccordion1]=useState(false);
    const [accordion2,setaccordion2]=useState(false);
    const [accordion3,setaccordion3]=useState(false);
    const [accordion4,setaccordion4]=useState(false);
  return (
   <section>
    <section className='bg-[url("https://assets.website-files.com/63d5ec95050b76dc48ad34fd/63ddf53dcc6c48b7b428ef5f_breadcrumb-background.jpg")] bg-no-repeat bg-cover px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[170px]'>
     <Header/>
           <div className='w-full  h-[40vh] lg:h-[50vh] relative '>
        <div className='absolute flex justify-center items-center top-0 left-0 w-full h-[100%] '>
          <div className='w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%] text-center'>
                 <h2 className='text-[22px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px] font-Prociono font-[600] text-white mb-[10px]'>About us</h2>
                 <ul className='flex justify-center items-center gap-[10px]'>
                <p className='text-[25px] font-[500] text-white'>Home / <span className='element bg-gradient-to-r from-[#80fcf0] bg-[#efce85]   to-[#ac5dfa] inline-block text-transparent bg-clip-text'>About</span></p>
          
                 </ul>
          </div>
        </div>
      </div>
    </section>
         
        {/* ----------------about us----------------- */}
  <section className='px-[20px] font-main_font lg:px-[50px] xl:px-[100px] 2xl:px-[150px] py-[50px] lg:py-[80px] flex lg:flex-row flex-col justify-center  lg:gap-[30px] xl:gap-[50px] gap-[20px]'>
        <section className='w-[100%] lg:w-[50%] h-full'>
         <img className='w-[80%] m-auto lg:w-[90%] h-[300px] lg:h-[100%]' src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63e0ddeccc6c4858375e1a84_1.png" alt="" />
     </section>
     <section className='w-[100%] lg:w-[50%]'>
        <h1 className='text-[25px] md:text-[30px] lg:text-[40px] xl:text-[45px] font-outfit lg:leading-[60px] mb-[10px] text-[#190E4E] font-[700]'>We Fight for the better Living & better Country</h1>
        <p className='text-[16px] leading-[25px] mt-[20px] font-poppins mb-[20px] text-neutral-600'>To make sure all Citizen rights, you have to work together and make a better country for our child. So we have to take initiative proper way to ensure the all right and make the country better for living</p>
     <div className='lg:pl-[30px] lg:border-l-[1px] border-[#333]'>
        <div className='mb-[10px]'>
            <h2  className='text-[18px] md:text-[14px] lg:text-[20px] font-poppins text-[#333] font-[600]'>Our Party is Growing</h2>
            <p className='text-[16px] leading-[25px] mt-[10px] font-poppins mb-[20px] text-neutral-600'>To make sure all Citizen rights, you have to work together better country for our child. So we have to take initiative way ensure the all right and make the country better for living</p>
        </div>
         <div>
            <h2 className='text-[18px] md:text-[14px] lg:text-[20px] font-poppins text-[#333] font-[600]'>We care about Issues</h2>
            <p className='text-[16px] leading-[25px] mt-[10px] font-poppins mb-[20px] text-neutral-600'>To make sure all Citizen rights, you have to work together better country for our child. So we have to take initiative way ensure the all right and make the country better for living</p>
        </div>
     </div>
        <button className='px-[30px] py-[13px] bg-[#16327A] text-[16px] mt-[20px] text-white'>Campaign</button>
     </section>

      </section>
      {/* ----------------about us----------------- */}
              <section className='w-full font-poppins h-auto bg-white px-[20px] lg:pb-[120px] lg:px-[20px] xl:px-[100px] 2xl:px-[150px] py-[50px]'>
          <div className='text-center w-[100%] lg:w-[80%] xl:w-[60%] m-auto'>
            <h1 className='text-[17px] lg:text-[18px] font-[500] text-indigo-500 underline'>Our services</h1>
            <h1 className='text-[30px] lg:text-[42px] font-[600] text-heading_color'>Our Mission & Vission</h1>
             <p className='text-[16px] mt-[5px] text-neutral-500'>To make sure all Citizen rights, you have to work together and make better country for our child. So we have to take initiative proper</p>
           </div>
           <section className='w-full flex flex-wrap justify-center gap-[30px] lg:gap-[30px] xl:gap-[50px] mt-[40px] lg:mt-[70px] lg:flex-row flex-col'>
                <div className='w-[100%] lg:w-[27%] flex justify-start gap-[20px]'>
                    <div>
                        <img className='w-[100px]' src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63ede474b6b5f3170c5fe289_1.svg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[20px] text-[#333] mb-[15px] font-[600]'>Economic</h1>
                        <p className='text-[16px] leading-[25px]'>To make sure all Citizen rights better country for our child are ensure the our Economic</p>
                    </div>
                </div>
              <div className='w-[100%] lg:w-[27%] flex justify-start gap-[20px]'>
                    <div>
                        <img className='w-[100px]' src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63ede4732d142e3ff508fb9e_3.svg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[20px] text-[#333] mb-[15px] font-[600]'>Education</h1>
                        <p className='text-[16px] leading-[25px]'>To make sure all Citizen rights better country for our child are ensure the our Economic</p>
                    </div>
                </div>
                      <div className='w-[100%] lg:w-[27%] flex justify-start gap-[20px]'>
                    <div>
                        <img className='w-[100px]' src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63ede4734ccacbc686ff4298_2.svg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[20px] text-[#333] mb-[15px] font-[600]'>Development</h1>
                        <p className='text-[16px] leading-[25px]'>To make sure all Citizen rights better country for our child are ensure the our Economic</p>
                    </div>
                </div>
                      <div className='w-[100%] lg:w-[27%] flex justify-start gap-[20px]'>
                    <div>
                        <img className='w-[100px]' src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63ede47310ff3efe2df8b3c5_4.svg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[20px] text-[#333] mb-[15px] font-[600]'>Social</h1>
                        <p className='text-[16px] leading-[25px]'>To make sure all Citizen rights better country for our child are ensure the our Economic</p>
                    </div>
                </div>
                      <div className='w-[100%] lg:w-[27%] flex justify-start gap-[20px]'>
                    <div>
                        <img className='w-[100px]' src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63ede4739ceec63149fe2b95_5.svg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[20px] text-[#333] mb-[15px] font-[600]'>Economic</h1>
                        <p className='text-[16px] leading-[25px]'>To make sure all Citizen rights better country for our child are ensure the our Economic</p>
                    </div>
                </div>
                      <div className='w-[100%] lg:w-[27%] flex justify-start gap-[20px]'>
                    <div>
                        <img className='w-[100px]' src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63ede474bbc5997e023582fb_6.svg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[20px] text-[#333] mb-[15px] font-[600]'>Business</h1>
                        <p className='text-[16px] leading-[25px]'>To make sure all Citizen rights better country for our child are ensure the our Economic</p>
                    </div>
                </div>
           </section>
           </section>
        {/* our member */}
                   <section className='w-full font-poppins h-auto bg-white px-[20px] lg:pb-[120px] lg:px-[20px] xl:px-[100px] 2xl:px-[150px] py-[50px]'>
          <div className='text-center w-[100%] lg:w-[80%] xl:w-[60%] m-auto'>
            <h1 className='text-[17px] lg:text-[18px] font-[500] text-indigo-500 underline'>Members</h1>
            <h1 className='text-[30px] lg:text-[42px] font-[600] text-heading_color'>Responsible Party Member</h1>
             <p className='text-[16px] mt-[5px] text-neutral-500'>To make sure all Citizen rights, you have to work together and make better country for our child. So we have to take initiative proper</p>
           </div>
            {/* ------------our memeber------------ */}
            <section className='w-full flex justify-center gap-[30px] mt-[50px] flex-col lg:flex-row'>
                <div className='w-[100%] lg:w-[22%] bg-[#F5F5F5] group '>
                    <div className='w-full h-[300px] overflow-hidden'>
                        <img className='w-full h-[300px] group-hover:rotate-[-5deg] group-hover:scale-[1.2] transition-all duration-200' src="https://cdn.prod.website-files.com/63d9f15fff9f963ee8f24538/63de282d70afa60a9e9df334_1.jpg" alt="" />
                    </div>
                    <div className='px-[20px] py-[20px] text-center bg-[#F5F5F5]'>
                        <h1 className='text-[20px] text-[#333]  font-[600]'>ALex Furgans</h1>
                        <p className='text-[16px] text-neutral-500'>Party President</p>
                    </div>
                </div>
                                <div className='w-[100%] lg:w-[22%] bg-[#F5F5F5] group '>
                    <div className='w-full h-[300px] overflow-hidden'>
                        <img className='w-full h-[300px] group-hover:rotate-[-5deg] group-hover:scale-[1.2] transition-all duration-200' src="https://cdn.prod.website-files.com/63d9f15fff9f963ee8f24538/63de280347ab580ca38d3708_2.jpg" alt="" />
                    </div>
                    <div className='px-[20px] py-[20px] text-center bg-[#F5F5F5]'>
                        <h1 className='text-[20px] text-[#333]  font-[600]'>ALex Furgans</h1>
                        <p className='text-[16px] text-neutral-500'>Party President</p>
                    </div>
                </div>
                                <div className='w-[100%] lg:w-[22%] bg-[#F5F5F5] group '>
                    <div className='w-full h-[300px] overflow-hidden'>
                        <img className='w-full h-[300px] group-hover:rotate-[-5deg] group-hover:scale-[1.2] transition-all duration-200' src="https://cdn.prod.website-files.com/63d9f15fff9f963ee8f24538/63de27ccf46ebf5c8e7dc83b_3.jpg" alt="" />
                    </div>
                    <div className='px-[20px] py-[20px] text-center bg-[#F5F5F5]'>
                        <h1 className='text-[20px] text-[#333]  font-[600]'>ALex Furgans</h1>
                        <p className='text-[16px] text-neutral-500'>Party President</p>
                    </div>
                </div>
                                <div className='w-[100%] lg:w-[22%] bg-[#F5F5F5] group '>
                    <div className='w-full h-[300px] overflow-hidden'>
                        <img className='w-full h-[300px] group-hover:rotate-[-5deg] group-hover:scale-[1.2] transition-all duration-200' src="https://cdn.prod.website-files.com/63d9f15fff9f963ee8f24538/63de279f6af00b3632389076_4.jpg" alt="" />
                    </div>
                    <div className='px-[20px] py-[20px] text-center bg-[#F5F5F5]'>
                        <h1 className='text-[20px] text-[#333]  font-[600]'>ALex Furgans</h1>
                        <p className='text-[16px] text-neutral-500'>Party President</p>
                    </div>
                </div>
            </section>
           </section>
           {/* ------------------------why we-------------- */}
           <section className='px-[20px] flex justify-center gap-[20px] font-poppins lg:pb-[120px] lg:px-[20px] xl:px-[100px] 2xl:px-[150px] pb-[50px] lg:flex-row flex-col'>
              <div className='w-[100%] lg:w-[50%]'>
                 <h2 className='text-[25px] lg:text-[30px] xl:text-[42px] font-[600] text-[#333] mb-[15px]'>Our Abilities</h2>
                 <p className='text-[16px] text-neutral-600 leading-[25px] mb-[30px]'>To make sure all Citizen rights, you have to work together and make a better country for our child. So we have to take initiative proper way to ensure the all right and make the country better for living</p>
                 <div>
                    <img className='w-full h-[250px] lg:h-[400px]' src="https://assets.website-files.com/63d5ec95050b76dc48ad34fd/63d8b451ee165d253661e71f_our-abilities-image.jpg" alt="" />
                 </div>
              </div>
         <section className='w-[100%] lg:w-[50%] mt-[30px] lg:mt-[80px]'>
      <div className='w-full mb-[20px] '>
                            <div onClick={()=>{setaccordion1(!accordion1)}} className='border-[1px] border-[#eee] bg-white shadow-lg flex justify-between items-center p-[20px] lg:p-[30px] cursor-pointer'>
                                <h1 className='text-[18px] lg:text-[20px] text-[#333]'>Serving Higher  Cause</h1>
                                <button className='text-[30px]'><MdKeyboardArrowDown/></button>
                            </div>
                            <div className={accordion1 ? 'w-full h-full bg-white shadow-lg overflow-hidden':'w-full h-0 bg-white shadow-lg overflow-hidden'}>
                               <div className='p-[20px] '>
                                 <p className='text-[16px] text-neutral-500 leading-[28px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quibusdam quia accusantium sunt quod voluptatem est blanditiis repellat? Omnis aperiam exercitationem iure? Vitae quibusdam esse accusantium veniam placeat incidunt ratione.</p>
                               </div>
                            </div>
                         </div>  
                       <div className='w-full mb-[20px] '>
                            <div onClick={()=>{setaccordion2(!accordion2)}} className='border-[1px] border-[#eee] bg-white shadow-lg flex justify-between items-center p-[20px] lg:p-[30px] cursor-pointer'>
                                <h1 className='text-[18px] lg:text-[20px] text-[#333]'>Serving Higher  Cause</h1>
                                <button className='text-[30px]'><MdKeyboardArrowDown/></button>
                            </div>
                            <div className={accordion2 ? 'w-full h-full bg-white shadow-lg overflow-hidden':'w-full h-0 bg-white shadow-lg overflow-hidden'}>
                               <div className='p-[20px] '>
                                 <p className='text-[16px] text-neutral-500 leading-[28px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quibusdam quia accusantium sunt quod voluptatem est blanditiis repellat? Omnis aperiam exercitationem iure? Vitae quibusdam esse accusantium veniam placeat incidunt ratione.</p>
                               </div>
                            </div>
                         </div>  
                               <div className='w-full mb-[20px] '>
                            <div onClick={()=>{setaccordion3(!accordion3)}} className='border-[1px] border-[#eee] bg-white shadow-lg flex justify-between items-center p-[20px] lg:p-[30px] cursor-pointer'>
                                <h1 className='text-[18px] lg:text-[20px] text-[#333]'>Serving Higher  Cause</h1>
                                <button className='text-[30px]'><MdKeyboardArrowDown/></button>
                            </div>
                            <div className={accordion3 ? 'w-full h-full bg-white shadow-lg overflow-hidden':'w-full h-0 bg-white shadow-lg overflow-hidden'}>
                               <div className='p-[20px] '>
                                 <p className='text-[16px] text-neutral-500 leading-[28px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quibusdam quia accusantium sunt quod voluptatem est blanditiis repellat? Omnis aperiam exercitationem iure? Vitae quibusdam esse accusantium veniam placeat incidunt ratione.</p>
                               </div>
                            </div>
                         </div>  
                               <div className='w-full mb-[20px] '>
                            <div onClick={()=>{setaccordion4(!accordion4)}} className='border-[1px] border-[#eee] bg-white shadow-lg flex justify-between items-center p-[20px] lg:p-[30px] cursor-pointer'>
                                <h1 className='text-[18px] lg:text-[20px] text-[#333]'>Serving Higher  Cause</h1>
                                <button className='text-[30px]'><MdKeyboardArrowDown/></button>
                            </div>
                            <div className={accordion4 ? 'w-full h-full bg-white shadow-lg overflow-hidden':'w-full h-0 bg-white shadow-lg overflow-hidden'}>
                               <div className='p-[20px] '>
                                 <p className='text-[16px] text-neutral-500 leading-[28px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quibusdam quia accusantium sunt quod voluptatem est blanditiis repellat? Omnis aperiam exercitationem iure? Vitae quibusdam esse accusantium veniam placeat incidunt ratione.</p>
                               </div>
                            </div>
                         </div>  
         </section>

           </section>



         {/* ------------------our partner-------------- */}
         <section className='px-[20px] lg:px-[50px] pb-[80px] pt-[20px] font-main_font xl:px-[100px] 2xl:px-[170px]'>
            <Marquee>
                <div className='mr-[30px] lg:mr-[50px] xl:mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4edf7736b07f878110a6_1.svg" alt="" />
                </div>
                   <div className='mr-[30px] lg:mr-[50px] xl:mr-[100px]'>
                    <img src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4f128c99fe315d08eb0f_4.svg" alt="" />
                </div>
                   <div className='mr-[30px] lg:mr-[50px] xl:mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4eeb03182983ba77f10c_2.svg" alt="" />
                </div>
                     <div className='mr-[30px] lg:mr-[50px] xl:mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4f04e80417743f565ded_3.svg" alt="" />
                </div>
                     <div className='mr-[30px] lg:mr-[50px] xl:mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4f128c99fe315d08eb0f_4.svg" alt="" />
                </div>
                  <div className='mr-[30px] lg:mr-[50px] xl:mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4edf7736b07f878110a6_1.svg" alt="" />
                </div>
                   <div className='mr-[30px] lg:mr-[50px] xl:mr-[100px]'>
                    <img src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4f128c99fe315d08eb0f_4.svg" alt="" />
                </div>
                   <div className='mr-[30px] lg:mr-[50px] xl:mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4eeb03182983ba77f10c_2.svg" alt="" />
                </div>
            </Marquee>
         </section>
                  <Footer/>
   </section>
  )
}

export default About