'use client'
import {useState} from "react"

const Navbar =dynamic(()=>import("../components/Navbar"),{ssr: false})
import Footer from '../components/footer'
import Link from 'next/link';
import Image from 'next/image'
import "../Styles/Login.css"
import image from '../../../public/MDA.jpg';
import axios from "axios"
import dynamic from "next/dynamic";



export default function Login(){
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [attemptnumber,setAttemptnumber]=useState(0)

    async function checkLogin(event){
        setAttemptnumber(attemptnumber+1)
        event.preventDefault();
        // event.preventDefault()
        const data=await axios.post("http://localhost:3000/api/login",{
            email,
            password,
            attemptnumber
        })
        const res=data
        console.log(res.data)
        if(res.data!=null){
            sessionStorage.setItem("user_logged_in",JSON.stringify(res.data))
            window.location.href="http://localhost:3000/"
        }
        else{
            return false
        }
    }
    return( 
        <>
            <Navbar />
            {/* Main Continer */}
            <div className="container" id='container-l'>
                {/* Login Container */}
                <div className={`row border rounded-5 p-3 shadow boxarea`} id='boxarea-l'>
                    {/* leftbox */}
                    <div className='col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box d-none d-md-flex d-xl-flex mb-1' style={{"background":"aliceblue",'height':'523.2px',marginTop:"30px"}}>
                        <div className='featured-image mb-3'>
                            <Image src={image} alt='Login image reference' className='img-fluid mt-1 rounded-4' style={{'width':'250px','height':'90%','marginBottom':'15px'}}/>
                        </div>
                        <p className={`paratext`} id='paratext-l'>{`"The right user has the access key to open the door"`}</p>
                    </div>
                    {/* rightbpx */}
                    <div className='col-md-6 right-box'>
                        <div className='row mb-4'>
                            <div className={` card`} id='card-l'>
                                <div className={`card-header`} id='card-header-l'>
                                    <p className={`headtext`} id='headtext'>Access Panel</p>
                                </div>
                                <div className={`card-body`} id='card-body-l'>
                                    <form className='row' method='post' onSubmit={(event)=>checkLogin(event)}>
                                        <div className='mb-2'>
                                            <label htmlFor='inputEmail4' className={`form-label`} id='formlabel-1' style={{"fontSize":"20px"}}>Email or UserID</label>
                                            <input type='email' className={`form-control shadow-none`} style={{"width":"90%","marginLeft":"20px"}} value={email} onChange={(e)=>{setEmail(e.target.value)}}  id='formcontrol-1'/>
                                        </div>
                                        <div className='mb-2'>
                                            <label htmlFor='inputPassword4' className={`form-label `} id='formlabel-2' style={{"fontSize":"20px"}}>Password</label>
                                            <input type='password' className={`form-control shadow-none mb-3`}  style={{"width":"90%","marginLeft":"20px"}} value={password} onChange={(e)=>{setPassword(e.target.value)}} id='formcontrol-2'/>
                                        </div>
                                        <div className='buttons mb-5 text-center'>
                                            <button type='submit' className={`btn shadow-none mx-1 text-center`} id='btn-l'>Submit the Credentials</button>
                                        </div>
                                    </form>
                                </div>
                                <div className={`card-footer`} id='cardfooter'>
                                    <p className='text'>{`Still don't have an ID?`}<Link className={`textlink`} id='textlink' href={'/CreateAccount'}>GET NEW ID</Link></p>
                                    <p className='text'>{`Don't Remember the password?`}<Link className={`textlink`} id='textlink' href={'/forgotpass'}>RENEW IT</Link></p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}