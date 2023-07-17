// import { data } from "autoprefixer";
import { request,response } from "express";
// import { spotifyApi } from "react-spotify-web-playback";
import SpotifyWebApi from "spotify-web-api-node"

export default async function handler(req=request,res=response){
    var SpotifyApi=new SpotifyWebApi({
        clientId:process.env.Spot_CLIENT_ID,
        clientSecret:process.env.Spot_CLIENT_SECRET,
        redirectUri:process.env.redirect_Uri,
    })
    if(req.method==="GET"){
        SpotifyApi.setRefreshToken(req.body.refresh_token)
        const data=SpotifyApi.refreshAccessToken()
        data.then((data)=>{
            console.log(data.body.refresh_token)
            SpotifyApi.setAccessToken(data.body.access_token)
            SpotifyApi.setRefreshToken(data.body.refresh_token)
            res.status(201).json({
                ip_client:req.socket.remoteAddress ||null,
                user_agent:req.headers['user-agent'],
                data_everything:"All_set_for_listening_music",
                launch_spotify:true,
                expires_in:data.body.expires_in+" seconds",
                access_token:data.body.access_token,
                refresh_token:data.body.refresh_token,
                token_type:data.body.token_type,
                cookies_present:true,
                check_user_verified:true
            })
        })
    }
    else if(req.method==="POST"){
        console.log("json_parser_ready",req.body.value)
        var songs=req.body.value
        SpotifyApi.setAccessToken(req.body.access_token)
        SpotifyApi.setRefreshToken(req.body.refresh_token)
        SpotifyApi.searchTracks(songs,{limit:20,offset:1})
        .then((data)=>{
            console.log(data)
            res.status(200).json({
                song_name:songs,
                founded_tracks:data.body.tracks.items
            })
        })
        .catch(()=>{
            const data=SpotifyApi.refreshAccessToken()
            data.then((data)=>{
                console.log(data.body.refresh_token)
                SpotifyApi.setAccessToken(data.body.access_token)
                SpotifyApi.setRefreshToken(data.body.refresh_token)
                res.status(201).json({
                    ip_client:req.socket.remoteAddress ||null,
                    user_agent:req.headers['user-agent'],
                    data_everything:"All_set_for_listening_music",
                    launch_spotify:true,
                    expires_in:data.body.expires_in+" seconds",
                    access_token:data.body.access_token,
                    refresh_token:data.body.refresh_token,
                    token_type:data.body.token_type,
                    cookies_present:true,
                    check_user_verified:true
                })
            })
        })
    }
}