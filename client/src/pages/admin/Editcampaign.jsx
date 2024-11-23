import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Contextapi } from '../../context/Appcontext';
import Dashboardleftside from '../../components/Dashboard/Dashboardleftside';
import Dashboradheader from '../../components/Dashboard/Dashboardheader';
import logo from "../../assets/logo.png"
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
const Editcampaign = () => {
   const navigate=useNavigate();
     const {activesidebar,setactivesidebar,activetopbar,setactivetopbar}=useContext(Contextapi);
     const [showmodal,setmodal]=useState(false);
       const admin_info=JSON.parse(localStorage.getItem("admin_info"));
   
   useEffect(()=>{
         if(!admin_info){
             navigate("/admin-login")
         }
   },[])
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
       const {id}=useParams();
           const [errortext,seterrortext]=useState("")
     const [title,settitle]=useState("");
     const [description,setdescription]=useState("");
     const [file,setfile]=useState();
     const [address,setaddress]=useState("");
     const [time,settime]=useState("");
        const find_campaign=()=>{
        axios.get(`https://politics-backend.phpshottershondhane.com/find-campaign/${id}`)
        .then((res)=>{
            if(res){
              console.log(res.data)
              settitle(res.data.campaign.title);
              setfile(res.data.campaign.photo);
              setaddress(res.data.campaign.address)
              settime(res.data.campaign.time)
              setdescription(res.data.campaign.description);
            }
        }).catch((err)=>{
            toast.error(err.name)
        })
        };
   //    ------------add news------------

    const handleform=(e)=>{
       e.preventDefault();
       if(title=="" || description=="" || address=="" || time==""){
                seterrortext("Please fill up your information!")
       }else if(!title=="" || !description=="" || !address=="" || !time=="" ){
          seterrortext("")
                const formdata=new FormData();
                formdata.append("title",title);
                formdata.append("description",description);
                formdata.append("file",file)
                formdata.append("address",address)
                formdata.append("time",time)
                axios.post(`https://politics-backend.phpshottershondhane.com/update-campaign/${id}`,formdata)
                .then((res)=>{
                    if(res){
                          toast.success("Campaign has been updated!");
                    }

                }).catch((err)=>{
                 toast.error("Please try after some time!")
                })
       }
    };
    useEffect(()=>{
             find_campaign();
    },[])
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
                    <h1 className='text-[20px] lg:text-[30px] font-[600] mb-[30px]'>Update Campaign</h1>
                    <form action=""className='w-full'onSubmit={handleform}>
                        <input type="text"placeholder='Enter Title'value={title} onChange={(e)=>{settitle(e.target.value)}}className='w-full h-[55px] border-[1px] border-[#eee] p-[20px] outline-[#00C07C] rounded-[5px]' /> <br />
                        <textarea name=""onChange={(e)=>{setdescription(e.target.value)}}value={description} id=""placeholder='Description' className='w-full lg:text-[18px] text-[16px] h-[250px] mt-[20px] border-[1px] border-[#eee] p-[20px] outline-[#00C07C] rounded-[5px]'></textarea><br />
                        <input type="text"onChange={(e)=>{setaddress(e.target.value)}}value={address} placeholder='Enter Address'className='w-full h-[55px] border-[1px] border-[#eee] p-[20px] outline-[#00C07C] rounded-[5px]' /> <br />
                        <input type="text"onChange={(e)=>{settime(e.target.value)}}value={time} placeholder='Enter Time'className='mt-[10px] w-full h-[55px] border-[1px] border-[#eee] p-[20px] outline-[#00C07C] rounded-[5px]' /> <br />
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

export default Editcampaign