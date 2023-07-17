/* eslint-disable react-hooks/rules-of-hooks */
"use client"
const Navbar =dynamic(()=>import("../components/Navbar"),{ssr: false})
import '../Styles/CA.css'
import {useState} from "react"
import Image from "next/image"
import image from '../../../public/CARDPIC.jpg'
import axios from "axios"



export default function CreateAccount(){
    // const [isError,setIsError]=useState(false)
    const [email,setEmail]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [confirmpassword,setConfirmpassword]=useState("")
    const [dob,setDob]=useState(Date())
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    var [selectfile,setSelectfile]=useState(null)
    
    function checkemail(email){
        var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var email1 = email;
        console.log(email1)
        if (pattern.test(email1)) {
            console.log("Valid email address");
            return true
        } else {
            console.log("Invalid email address");
            return false
            // setIsError(true)
        }
    }
    
    function checkUsername(username){
        var pattern=/^[a-zA-Z]{8,32}@{1}\d{4,6}\.IDEAS$/
        var username1=username
        console.log(username1)
        if(pattern.test(username1)){
            console.log("Valid Username");
            return true
        }
        else{
            console.log("Invalid Username");
            return false
        }
    }
    
    
    function compare(password,confirmpassword){
        if (password === confirmpassword && password!= null && confirmpassword!=null) {
            console.log("matched");
            return true
            // passwordMatchMessage.style.color = 'green';
        }
        else {
            console.log("mismatched   ");
            return false;
            // passwordMatchMessage.style.color = 'red';
        }
    }
    compare(password,confirmpassword)
    async function ApiCALL(e){
        console.clear()
        console.log(dob);
        // selectfile=selectfile.toString()
        // e.preventDefault();
    if((checkemail(email) && checkUsername(username) && compare(password,confirmpassword))===false){
        console.log("if condition");
        // console.log(isError)
        return
    }
    else{
        console.log(checkemail(email));
        console.log(checkUsername(username));
        console.log(dob);
        console.log(selectedImage);
        const selectfile = localStorage.getItem("filepath");
    
        try {
            const response = await axios.post("http://localhost:3000/api/CA/", {
                email,
                password,
                confirmpassword,
                dob,
                username,
                selectfile,
            });
    
            console.log(response.status);
            console.log(response.data);
    
            if (response.status === 200) {
                window.location.href = "http://localhost:3000/login";
            } else {
                window.alert("Account not created");
            }
        } catch (error) {
            console.error(error);
            window.alert("An error occurred while creating the account");
        }
    }
    }
    const onChange=(event)=>{
        setIsLoading(true);

        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setSelectedImage(e.target.result);
            // selectedImage(e.target.result);
            setIsLoading(false);
        };
        // window.location.reload()
        console.log(selectedImage)

        reader.readAsDataURL(file);
        // handleUpload()
    }
    const handleUpload = async () => {
        try {
            const formData = new FormData();
            console.log(selectedImage)
            formData.append('image', selectedImage);
        
            const result= await axios.post("http://localhost:3000/api/home",{
                selectedImage
            })
            console.log(result)
            localStorage.setItem("filepath",result.data.filepath)
        }
        catch(err){
            console.error(err)
        }
    }
    return(
        <>
            <Navbar/>
            <div className="container" style={{"width":"70%","marginTop":"85px","paddingBottom":"300px"}}>
                <div className="row border rounded-5 p-3 shadow box-area" id="boxarea-r">
                    {/* left side boc */}
                    <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box d-none d-xl-flex d-md-flex" style={{"background":"aliceblue",'height':'756px',"boxSizing":"border-box"}}>
                        <div className="featured-image mb-3">
                            <Image src={image} alt="Log image" className="img-fluid mt-1 rounded-4" style={{"width":"250px","height":"90%"}} />
                        </div>
                        <p className="paratext mb-3">{`"Step into the symphony of success and let the captivating sounds of investing guide you towards a harmonious future of abundance and fulfillment."`}</p>
                        <p className="paratext">{`"The formidable power of a single idea possesses the potential to revolutionize the world."`}</p>
                    </div>
                    {/* right side box */}
                    <div className="col-md-6 right-box">
                        <form className="reg-form" method="post" encType="multipart/form-data" action="../api/Authentication/CA/createaccount">
                            <div className="card">
                                <div className="card-header">
                                    <p className="head-text-2">Access ID Registration</p>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label label">Email address</label>
                                        <input type="email" className="form-control shadow-none"  id="exampleFormControlInput1" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="name@example.com"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label label">Username</label>
                                        <input type="text" className="form-control shadow-none"  id="exampleFormControlInput1" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label label">Date of birth</label>
                                        <input type="date" className="form-control shadow-none" id="exampleFormControlInput1" value={dob} onChange={(e)=>{setDob(e.target.value)}} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label label">Password</label>
                                        <input type="password" className="form-control shadow-none" id="exampleFormControlInput1" value={password} onChange={e=>setPassword(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label label">ConfirmPassword</label>
                                        <input type="password" className="form-control shadow-none" id="exampleFormControlInput1" value={confirmpassword} onChange={e=>setConfirmpassword(e.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label label">Upload profile pic</label>
                                        <input onChange={onChange} type="file" name="image" className="form-control shadow-none" id="exampleFormControlInput1" />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="buttons">
                                        <button className="btn shadow-none" type="submit" onClick={(e)=>{ApiCALL(e);e.preventDefault()}}>Data filled</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    selectedImage && <Image src={selectedImage} className="mt-5 d-none" alt="Selected" width={100} height={100} onLoad={handleUpload} />
                )}
                
                </div>
                </div>
            </div>
        </>
    )
}

