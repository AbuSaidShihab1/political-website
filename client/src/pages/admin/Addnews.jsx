import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Contextapi } from '../../context/Appcontext';
import Dashboardleftside from '../../components/Dashboard/Dashboardleftside';
import Dashboradheader from '../../components/Dashboard/Dashboardheader';
import logo from "../../assets/logo.png"
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Addnews = () => {
   const navigate=useNavigate();
     const admin_info=JSON.parse(localStorage.getItem("admin_info"));
   
   useEffect(()=>{
         if(!admin_info){
             navigate("/admin-login")
         }
   },[])
     const {activesidebar,setactivesidebar,activetopbar,setactivetopbar}=useContext(Contextapi);
     const [showmodal,setmodal]=useState(false);
    const [errortext,seterrortext]=useState("")
     const [title,settitle]=useState("");
     const [description,setdescription]=useState("");
     const [file,setfile]=useState();
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
   },[])
//    ------------add news------------
    const handleform=(e)=>{
       e.preventDefault();
       if(title=="" || description==""){
                seterrortext("Please fill up your information!")
       }else if(!title=="" || !description=="" ){
           const formdata=new FormData();
                formdata.append("title",title);
                formdata.append("description",description);
                formdata.append("file",file)
                console.log(file)
                axios.post(`https://politics-backend.phpshottershondhane.com/add-news`,formdata)
                .then((res)=>{
                    if(res.data.success){
                          toast.success("News has been added!");
                          settitle("");
                          setdescription("");
                    }

                }).catch((err)=>{
                 toast.error("Please try after some time!")
                })
       }
    }
  return (
    <section className='w-full h-[100vh] flex font-poppins'>
        <section className={activesidebar ? 'w-0 h-[100vh] transition-all duration-300 overflow-hidden':'w-0 md:w-[20%] transition-all duration-300 h-[100vh]'}>
            <Dashboardleftside/>
            <ToastContainer/>
        </section>
        <section className={activesidebar ? 'w-[100%] h-[100vh] overflow-y-auto transition-all duration-300':' transition-all duration-300 w-[100%] overflow-y-auto md:w-[85%] h-[100vh]'}>
        <Dashboradheader/> 
       <section className='w-[100%] lg:w-[60%] m-auto py-[20px] xl:py-[40px] px-[30px]'>
                <section>
                    <h1 className='text-[30px] font-[600] mb-[30px]'>Add News</h1>
                    <form action=""className='w-full'onSubmit={handleform}>
                        <input type="text"placeholder='Enter Title'onChange={(e)=>{settitle(e.target.value)}} value={title} className='w-full h-[55px] border-[1px] border-[#eee] p-[20px] outline-[#00C07C] rounded-[5px]' /> <br />
                        <textarea name="" id=""placeholder='Description'onChange={(e)=>{setdescription(e.target.value)}} value={description} className='w-full h-[250px] mt-[20px] border-[1px] border-[#eee] p-[20px] outline-[#00C07C] rounded-[5px]'></textarea><br />
                         <input required onChange={(e)=>{setfile(e.target.files[0])}} className="block w-full p-[20px] mt-[10px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                          <p className='py-[10px] text-[16px] text-[#eb3b5a]'>
                       {errortext}
                      </p>
                        <button className='w-full h-[55px] bg-[#00C07C] text-[16px] text-white mt-[10px] rounded-[5px]'>Publish</button>
                    </form>
                </section>
       </section>
        </section>
    </section>
  )
}

export default Addnews