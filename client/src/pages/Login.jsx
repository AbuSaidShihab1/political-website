import React, { useState } from 'react'
import Header from '../components/Header'
import axios from "axios";
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [errortext,seterrortext]=useState("");
    const navigate=useNavigate();

    const handleform=(e)=>{
       e.preventDefault();
       if(email=="" || password==""){
                seterrortext("Please fill up your information!")
       }else if(!email=="" || !password==""){
                axios.post(`https://politics-backend.phpshottershondhane.com/login`,{email,password})
                .then((res)=>{
                    if(res.data.success==true){
                        toast.success("Login Successful 🎉🎉");
                        localStorage.setItem("admin_info",JSON.stringify(res.data.admin_info))
                        setTimeout(() => {
                         navigate("/admin")
                        }, 1000);
                    }else{
                           toast.error(res.data.message)
                    }
                }).catch((err)=>{
                    toast.error(err.name)
                })
       }
    }
  return (
  <section>
      <section className='bg-[#00C07C] font-poppins px-[20px] lg:px-[50px] xl:px-[100px] 2xl:px-[170px]'>
     <Header/>
     <ToastContainer/>
        <section className='w-full h-[88vh] flex justify-center items-center'>
            <form action=""onSubmit={handleform} className='w-[100%] md:w-[90%] lg:w-[70%] xl:w-[40%] h-auto p-[25px] bg-white rounded-[5px]'>
                <h1 className='text-center font-[600] text-[30px] mb-[20px]'>Admin Login</h1>
                <div>
                    <input type="text"placeholder='Enter your email'onChange={(e)=>{setemail(e.target.value)}} className='w-full mb-[20px] h-[50px] border-[1px] border-[#eee] p-[20px] rounded-[5px] outline-[#00C07C]' />
                    <br />
                    <input type="password"placeholder='Enter your password'onChange={(e)=>{setpassword(e.target.value)}}className='w-full mb-[20px] h-[50px] border-[1px] border-[#eee] p-[20px] rounded-[5px] outline-[#00C07C]' />
                    <p className='pb-[10px] text-[16px] text-[#eb3b5a]'>
                       {errortext}
                    </p>
                    <button className='w-full h-[55px] bg-[#00C07C] text-[16px] cursor-pointer rounded-[5px] text-white'>Log In</button>
                </div>
            </form>
        </section>
          
    </section>
           <Footer/>
  </section>
  )
}

export default Login