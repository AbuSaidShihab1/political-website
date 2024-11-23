import React,{useEffect} from 'react'
import Header from '../components/Header'
import map_img from "../assets/3d-map.png";
import call_img from "../assets/3d-accept.png";
import email_img from "../assets/email.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';
const Contact = () => {
    useEffect(()=>{
        AOS.init();
    },[])
  return (
<>
<section className='bg-[url("https://assets.website-files.com/63d5ec95050b76dc48ad34fd/63ddf53dcc6c48b7b428ef5f_breadcrumb-background.jpg")] font-kanit h-auto bg-[#202C5E] px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[170px]'>
        <Header/>
       {/* --------------------contact------------------------ */}
       <section className='w-full h-[40vh] lg:h-[50vh] flex justify-center items-center overflow-hidden'>
           <div className='text-center'>
                <h1 className='text-[25px] md:text-[40px] font-[600] mb-[10px] text-white'>Get in Touch</h1>
                <p className='text-[18px] lg:text-[25px] font-[500] text-white'>Home / <span className='element bg-gradient-to-r from-[#80fcf0] bg-[#efce85]   to-[#ac5dfa] inline-block text-transparent bg-clip-text'>Contact</span></p>
           </div>
     </section>

       {/* --------------------contact------------------------ */}
    </section>
    <section className='w-full h-auto  bg-[url("https://themefierce.com/html/appiz-prev/assets/img/shape/breadcrumb-shape-2.svg")] bg-cover bg-no-repeat'>
    <section className='h-auto md:h-[450px] w-full flex justify-center relative font-sora '>
       <section className='w-[95%] md:w-[70%] md:shadow-md rounded-[5px]  absolute top-[-20%]  lg:bg-white md:border-[1px] border-[#eee] h-[500px]  flex justify-center flex-col md:flex-row gap-[30px]'>
       <div className='w-[100%] md:w-[50%] h-auto  md:h-[500px] mt-[30px] md:mt-0'>
       <iframe className='w-full h-[300px] md:h-[500px] ' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.2179553749897!2d90.414903!3d23.7752518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7632a6596f5%3A0x23a7d11b954e9510!2sWebmaster%20Pro!5e0!3m2!1sen!2sbd!4v1728311370670!5m2!1sen!2sbd"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<div className='w-[100%] md:w-[50%] h-full md:h-[500px] px-[15px] md:px-[50px] py-[20px] md:py-[100px]'>
    <div className='flex justify-start gap-[40px] mb-[25px]'data-aos="fade-left"data-aos-duration="1000">
        <div>
          <img className='w-[25px] md:w-[40px]' src={map_img} alt="" />
        </div>
        <div>
            <h2 className=' text-[17px] md:text-[18px] text-neutral-800 font-[600] mb-[6px] md:mb-[10px]'>Address</h2>
            <p className='text-[14px] md:text-[16px] text-neutral-600'>House:58, Road:03, Block:B</p>
            <p className='text-[14px] md:text-[16px] text-neutral-600 mt-[3px]'> Niketon, Gulshan - 01, Dhaka 1212</p>
        </div>
    </div>
    {/* <div className='flex justify-start gap-[40px] mb-[25px]'data-aos="fade-left"data-aos-duration="1200">
        <div>
          <img className='w-[25px] md:w-[40px]' src={call_img} alt="" />
        </div>
        <div>
        <h2 className='text-[17px] md:text-[18px] text-neutral-800 font-[600] mb-[10px]'>Phone</h2>
            <p className='text-[14px] md:text-[16px] text-neutral-600'>00 000 0000</p>
            <p className='text-[14px] md:text-[16px] text-neutral-600 mt-[3px]'>00 000 0000</p>
        </div>
    </div> */}
    <div className='flex justify-start gap-[40px]'data-aos="fade-left"data-aos-duration="1400">
        <div>
          <img className='w-[25px] md:w-[40px]' src={email_img} alt="" />
        </div>
        <div>
            <h2 className='text-[17px] md:text-[20px] font-[600] mb-[10px]'>E-Mail</h2>
            <p className='text-[14px] md:text-[16px] text-neutral-600'>info@webmasterprobd.com</p>
            <p className='text-[14px] md:text-[16px] text-neutral-600'>webmasterprobd@gmail.com</p>
            {/* <p className='text-[16px] text-neutral-600 mt-[3px]'>London, United Kingdom</p> */}
        </div>
    </div>
</div>
       </section>
     </section>
     {/* --------------------contact form--------------------- */}
     <section className='px-[20px] md:px-[100px] mt-[600px] md:mt-0 py-[30px] pb-[30px] md:pb-[70px] '>
        <section className='w-[100%] md:w-[70%] m-auto '>
        <div className='text-center w-full'>
        <h1 className='text-[25px] md:text-[40px] font-kanit font-[500] text-[#343a40]'>Drop Us a Line</h1>
        <p className='text-[17px] md:text-[18px] mt-[5px] text-neutral-600 font-sora'>Reach out to us from our contact form and we will get back to you shortly.</p>
        </div>
        <form className='w-full font-sora py-[40px]' action="https://formspree.io/f/xpwzabwb"
  method="POST">
            <div className='w-full flex gap-[15px]'>
                <div className='w-[50%]'>
                    <label htmlFor="name"className='text-[16px]'>Name<span className='text-[#eb3b5a]'>*</span></label>
                    <input type="text"placeholder='Your Name'name="name" className='border-[1px] outline-1 outline-indigo-500 text-[15px] text-[#495057] border-[#dee2e6] rounded-[2px] px-[10px] w-full h-[55px] mt-[10px]' />
                </div>
                <div className='w-[50%]'>
                    <label htmlFor="name"className='text-[16px]'>Phone<span className='text-[#eb3b5a]'></span></label>
                    <input type="text"placeholder='Your Phone'name="phone"className='border-[1px] text-[15px] outline-1 outline-indigo-500 text-[#495057] border-[#dee2e6] rounded-[2px] px-[10px] w-full h-[55px] mt-[10px]' />
                </div>
            </div>
            <div className='w-full mt-[20px]'>
                    <label htmlFor="name"className='text-[16px]'>Email<span className='text-[#eb3b5a]'>*</span></label>
                    <input type="text"placeholder='Your Email'name="email"className='border-[1px] text-[15px] outline-1 outline-indigo-500 text-[#495057] border-[#dee2e6] rounded-[2px] px-[10px] w-full h-[55px] mt-[10px]' />
                </div>
                <div className='w-[100%] mt-[20px]'>
                    <label htmlFor="name"className='text-[16px]'>Message<span className='text-[#eb3b5a]'>*</span></label>
                   <textarea name="message" id=""placeholder='Type Your message...' className='border-[1px] outline-1 outline-indigo-500 text-[15px] text-[#495057] py-[10px] border-[#dee2e6] rounded-[2px] px-[10px] w-full h-[200px] mt-[10px]'></textarea>
                </div>
                <button className='bg-[#3F78E0] text-[16px] md:text-[18px] font-main_font_family text-white md:px-[35px] px-[30px] py-[16px] mt-[20px] rounded-full'>Send message</button>
        </form>
        </section>
     </section>
     {/* -------------------contact form--------------------- */}
              <Footer/>
    </section>
</>
  )
}

export default Contact