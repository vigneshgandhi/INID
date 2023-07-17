"use client"
import Play from "react-spotify-web-playback"
// import Spotplayer from "spotify-web-playback-sdk"

import React, { useEffect } from 'react'
import axios from "axios"

const Player=({play_uri,access_token})=>{
    setInterval(()=>{
        window.location.href="http://localhost:3000/SpotifyMusic"
    },60*60*1000)
    return (
        <Play uris={play_uri} token={access_token} play={true} styles={{bgColor:"black",trackNameColor:"cyan !important",trackArtistColor:"cyan !important",sliderColor:"teal",loaderColor:"lime !important",sliderHandleBorderRadius:"15px",activeColor:"lime !important"}} />
    )
}

export default Player
