/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import "../Styles/Track.css"
import Player from "../components/Player"
import SpotifyWebApi from "spotify-web-api-node"
import Image from "next/image"
import {useEffect,useLayoutEffect, useState} from "react"

var SpotifyApi=new SpotifyWebApi({
    clientId:process.env.Spot_CLIENT_ID,
    clientSecret:process.env.Spot_CLIENT_SECRET,
    redirectUri:process.env.redirect_Uri,
})

export default function TrackResults(props){
    const [uri,selectedUri]=useState("")
    var [count,setCount]=useState(0)
    var token=JSON.parse( localStorage.getItem("Users_tokens"))
    var access_token=token.access_token
    function playTrack(uris){
        event.preventDefault()
        console.log(uris)
        selectedUri(uris.uris)
        // window.open(uris.uris,'_blank')
    }
    
    var urls;
    const {getTracks}=props;
    var rows;
    // useLayoutEffect(()=>{
        rows=getTracks.map(track=>{
            // setCount(count+1);
            // console.log(track);
            const artists=track.artists.map(arts=>{
                return (
                    <div className="container" key={track.artists.id}>
                        <p className="texter" id="artisttext" key={track.artists.id}>{arts.name}</p>
                    </div>
                )
            })
            const images=track.album.images.map(img=>{
                if(img.width===640){
                    return(
                        <Image className="card-img-top example-card-img-responsive" src={img.url} alt="albumimage" width={640} height={300} id="spotimage" key={track.id} />
                    )
                }
                else{
                    return null
                }
            })
            return(
                <>
                    <div className="tracks container-fluid d-none d-sm-none d-md-grid d-lg-grid d-xl-grid" id="cont-fluid-track">
                        <div className="card mt-5 mb-5" style={{flexDirection:"row"}} id="cardtrack">
                            {images}
                            <div className="card-body" id="cardmusictrack">
                                <h4 className="card-title h5 h4-sm" id="titletrack">{track.name}</h4><br/>
                                {artists}
                                <button className="button-spot bg-dark btn" type="button" id="btnfreak" onClick={e=> {playTrack({uris:track.uri});e.preventDefault()}}>Play this Song</button>
                            </div>
                        </div>
                    </div>
                </>
            )
        })
        return(
            <>
                {rows}
                <div className="spotplayer">
                    <Player access_token={access_token} play_uri={uri} />
                </div>
            </>
        )
    // })
}