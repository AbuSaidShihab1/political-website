import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import { GoArrowUpRight } from "react-icons/go";
import Marquee from "react-fast-marquee";

const Donate = () => {
  return (
   <section>
    <section className='bg-[url("https://assets.website-files.com/63d5ec95050b76dc48ad34fd/63ddf53dcc6c48b7b428ef5f_breadcrumb-background.jpg")] bg-no-repeat bg-cover px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[170px]'>
     <Header/>
           <div className='w-full lg:h-[50vh] relative '>
        <div className='absolute flex justify-center items-center top-0 left-0 w-full h-[100%] '>
          <div className='w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%] text-center'>
                 <h2 className='text-[22px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[50px] font-Prociono font-[600] text-white mb-[10px]'>Donation Page</h2>
                 <ul className='flex justify-center items-center gap-[10px]'>
                <p className='text-[25px] font-[500] text-white'>Home / <span className='element bg-gradient-to-r from-[#80fcf0] bg-[#efce85]   to-[#ac5dfa] inline-block text-transparent bg-clip-text'>Donation</span></p>
          
                 </ul>
          </div>
        </div>
      </div>
    </section>
         
      {/* all news */}
          <section className='px-[20px] font-poppins lg:px-[50px] xl:px-[150px] 2xl:px-[150px] py-[50px]'>
                     <div className='w-[90%] p-[30px] m-auto h-auto bg-white shadow-lg border-[1px] border-[#eee]'>
                             <div>
                                <h1 className='text-[25px] text-[#333] font-[600] mb-[10px]'>Donation Details</h1>
                                <p className='text-[17px] text-neutral-700'>How much would you like to donate?</p>
                             </div>
                             <form action=""className='mt-[30px]'>
                                <div className='flex justify-between'>
                                    <div className='w-[22%] h-[55px] border-[1px] border-[#eee] flex justify-start p-[20px] items-center gap-[10px]'>
                                        <input type="checkbox" />
                                        <p className='text-[17px] text-[#333] '>$500</p>
                                    </div>
                                        <div className='w-[22%] h-[55px] border-[1px] border-[#eee] flex justify-start p-[20px] items-center gap-[10px]'>
                                        <input type="checkbox" />
                                        <p className='text-[17px] text-[#333] '>$500</p>
                                    </div>
                                        <div className='w-[22%] h-[55px] border-[1px] border-[#eee] flex justify-start p-[20px] items-center gap-[10px]'>
                                        <input type="checkbox" />
                                        <p className='text-[17px] text-[#333] '>$500</p>
                                    </div>
                                        <div className='w-[30%] h-[55px]  '>
                                        <input type="number"placeholder='---Custom amount---'className='placeholder-grey-500 w-full h-[55px] border-[1px] border-[#eee] p-[20px] outline-purple-500 ' />
                                    </div>
                                </div>
                                <div className='mt-[30px]'>
                                    <h2 className='text-[18px] mb-[20px] text-neutral-600'>Would You Like To Make Regular Donations?</h2>
                                    <div>
                                     
                                          <div className='flex justify-center gap-[20px]'>
                                          <input required type="text"placeholder='First Name'className='placeholder-gray-700 w-full h-[55px] border-[1px] border-[#eee] p-[20px] outline-purple-500 w-[50%] ' />
                                          <input required type="text"placeholder='Last Name'className='placeholder-gray-700 w-full h-[55px] border-[1px] border-[#eee] p-[20px] outline-purple-500 w-[50%] ' />   
                                        </div>
                                           <div className='flex justify-center gap-[20px]  mt-[20px]'>
                                          <input required type="text"placeholder='Email address'className='placeholder-gray-700 w-full h-[55px] border-[1px] border-[#eee] p-[20px] outline-purple-500 w-[50%] ' />
                                          <input required type="number"placeholder='Phone number'className='placeholder-gray-700 w-full h-[55px] border-[1px] border-[#eee] p-[20px] outline-purple-500 w-[50%] ' />   
                                        </div>
                                        <div className=' mt-[20px]'>
                                            <textarea name="" id=""placeholder='Address' className='w-full h-[200px] p-[20px] text-[17px] placeholder-gray-600 border-[1px] border-[#eee] outline-purple-500'></textarea>
                                        </div>
                                        <button className='text-[16px] font-[600] text-white bg-[#1C3579] px-[35px] py-[15px] mt-[20px]'>Donate</button>
                                    </div>
                                </div>
                             </form>
                     </div>
                 </section>
                      {/* ------------------our partner-------------- */}
         <section className='px-[20px] lg:px-[50px] pb-[80px] pt-[20px] font-main_font xl:px-[100px] 2xl:px-[170px]'>
            <Marquee>
                <div className='mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4edf7736b07f878110a6_1.svg" alt="" />
                </div>
                   <div className='mr-[100px]'>
                    <img src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4f128c99fe315d08eb0f_4.svg" alt="" />
                </div>
                   <div className='mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4eeb03182983ba77f10c_2.svg" alt="" />
                </div>
                     <div className='mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4f04e80417743f565ded_3.svg" alt="" />
                </div>
                     <div className='mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4f128c99fe315d08eb0f_4.svg" alt="" />
                </div>
                  <div className='mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4edf7736b07f878110a6_1.svg" alt="" />
                </div>
                   <div className='mr-[100px]'>
                    <img src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4f128c99fe315d08eb0f_4.svg" alt="" />
                </div>
                   <div className='mr-[100px]'>
                    <img  src="https://cdn.prod.website-files.com/63d5ec95050b76dc48ad34fd/63db4eeb03182983ba77f10c_2.svg" alt="" />
                </div>
            </Marquee>
         </section>
                  <Footer/>
   </section>
  )
}

export default Donate