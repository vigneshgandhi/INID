/* eslint-disable react/no-unknown-property */
"use client"
import axios from "axios"
import { useSearchParams } from 'next/navigation';
import dynamic from "next/dynamic";

import "../Styles/Spotify.css"
const Navbar =dynamic(()=>import("../components/Navbar"),{ssr: false})
import Footer from "../components/footer";
import { useEffect } from "react";

export default function SpotifyMusic(){
    const searchParams=useSearchParams()
    async function SpotifyLogin(){
        console.log("ok")
        const data=await axios.get("http://localhost:3000/api/Spotify")
        console.log(data.data)
        window.location.href=data.data.authorizeURL   
    }
    var code;
    code=searchParams.get("code");
    if(code===null){
        return(
            <>
                <Navbar/>
                <div className="container mt-5 justify-content-center d-flex align-items-center" id="container-spotify">
                    <div className="row">
                        <div className="col text-center">
                            <button className="spot-button btn mb-5" id="spot-button" type="button" onClick={SpotifyLogin}>Login with Spotify</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else{
        async function gettoken(){
            console.log(code)
            localStorage.setItem("code",searchParams.get("code"))
            if(localStorage.getItem("code")!==null){
                const data=await axios.put("http://localhost:3000/api/Spotify",{code})
                console.log(data.data)
                var result=data.data
                localStorage.setItem("refresh_tokens",result.refresh_token)
                localStorage.setItem("Users_tokens",JSON.stringify(result))
                window.location.href="http://localhost:3000/SpotifyMusic/Music"
            }
        }
        return(
            <>
                <Navbar/>
                <div className="container-lg mt-5 mb-5 justify-content-center align-items-center d-flex" id="container-spotify">
                    <div className="row">
                        <div className="col text-center">
                            <p className="text-danger d-flex">{code}</p>
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" className="btn" id="spot-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Accept the Terms of spotify music
                            </button>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header" id="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Spotify Account - listening for music</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body" id="modal-body">
                                    <p className="gradient" id="gradtext">{`Certainly! Here's a description of the Spotify Terms and Conditions:

                                        Spotify Terms and Conditions:

                                        The Spotify Terms and Conditions outline the rules and guidelines that govern the use of the Spotify music streaming service. These terms and conditions serve as a legally binding agreement between Spotify and its users, detailing the rights and responsibilities of both parties.

                                        The document covers various aspects of the service, including user accounts, content usage, intellectual property rights, privacy, and billing information. It sets forth the conditions under which users can access and utilize the Spotify platform, as well as the limitations and restrictions imposed by Spotify.

                                        Within the Terms and Conditions, users will find information regarding the creation and management of their accounts, including the requirement to provide accurate personal information. It also highlights the responsibilities of users in safeguarding their account credentials and ensuring their proper use.

                                        Furthermore, the Terms and Conditions clarify the rights and licenses associated with the content available on Spotify. It explains the distinction between user-generated content and Spotify's proprietary content, outlining the permitted uses of each. It also emphasizes the importance of respecting intellectual property rights and refraining from unauthorized reproduction, distribution, or modification of copyrighted material.

                                        The document addresses privacy concerns, assuring users that their personal information will be handled in accordance with Spotify's privacy policy. It explains the types of data collected, how it is used, and the measures taken to protect user privacy and security.

                                        Additionally, the Terms and Conditions describe the billing and subscription details for Spotify's premium services, including payment methods, pricing, and cancellation policies. It informs users about their obligations to pay for the services they have subscribed to and the consequences of non-payment.

                                        Users are advised to carefully review the Spotify Terms and Conditions before using the service to ensure a clear understanding of their rights and obligations. By accepting these terms, users acknowledge their agreement to abide by the rules and guidelines set forth by Spotify.

                                        Please note that this description is a general overview and not an exhaustive representation of the complete Spotify Terms and Conditions. It is always recommended to refer to the official Spotify website or consult the actual document for the most up-to-date and accurate information.`}
                                    </p>
                                </div>
                                <div className="modal-footer" id="modal-footer"> 
                                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-outline-info" data-bs-dismiss="modal" onClick={gettoken}>Understood</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Footer/> */}
            </>
        )
    }
}
