"use client"
const Navbar =dynamic(()=>import("../../components/Navbar"),{ssr: false})
import Footer from "../../components/footer"
import TrackResults from "../../components/TrackResults"
import "../../Styles/Music.css"
import { useState,useEffect } from "react"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import dynamic from "next/dynamic"

// library.add(faMagnifyingGlass);

export default function Music(){
    const [value,setValue]=useState("")
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    async function getSongs(){
        const Users_tokens=localStorage.getItem("Users_tokens")
        let keys=JSON.parse(Users_tokens)
        let access_token=keys.access_token
        let refresh_token=localStorage.getItem("refresh_tokens")
        console.log(refresh_token)
        let token_type=keys.token_type
        const data=await axios.post("http://localhost:3000/api/Spotify/Music",{value,access_token,refresh_token,token_type})
        console.log(data.status)
        if(data.status===201){
            localStorage.setItem("Users_tokens",JSON.stringify(data.data))
            window.alert("reload the page once to continue")
        }
        else{
            localStorage.setItem("datafound",JSON.stringify(data.data))
            console.log(data.data)
            tracks=data.data.founded_tracks
            window.location.reload()
        }
        // window.location.reload()
    }
    {
        if(isClient===true){
            var code=localStorage.getItem("code")
            console.log(code)
            var datafound= JSON.parse(localStorage.getItem("datafound")) 
            if(datafound===null){
                return (
                    <>
                        <Navbar/>
                        <div className="container-fluid" id="container-spotify-2">
                            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                                <div className="container-fluid d-flex justify-content-between">
                                    <a className="navbar-brand d-none d-sm-none d-md-none d-lg-flex d-xl-flex" href="#" id="Musicbrandheader">you are always welcome here</a>
                                    <form className="d-flex">
                                        <input className="form-control me-2" id="spotinput" type="search" value={value} onChange={e=>setValue(e.target.value)} placeholder="Search for songs/Artists" aria-label="Search" />
                                        <button className="btn btn-outline-info" type="button" onClick={getSongs}>Search</button>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </>
                )
            }
            else{
                var tracks=datafound.founded_tracks
                console.log(tracks)
                return(
            <>
                <Navbar/>
                <div className="container-fluid" id="container-spotify-2">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid d-flex justify-content-between">
                            <a className="navbar-brand d-none d-sm-none d-md-none d-lg-flex d-xl-flex" href="#" id="Musicbrandheader">you are always welcome here</a>
                            <form className="d-flex">
                                <input className="form-control me-2" id="spotinput" type="search" value={value} onChange={e=>setValue(e.target.value)} placeholder="Search for songs/Artists" aria-label="Search" />
                                <button className="btn btn-outline-info" type="button" onClick={getSongs}>Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
                <div className="container" id="container-spot-3">
                    <TrackResults getTracks={tracks} />
                </div>
                {/* <Footer/> */}
            </>
                )
            }
        }
        else if(isClient===false){
        return(
            <>    
                <div>
                    <p>{"This is ssr"}</p>
                </div>
            </>
        )}
    }
}