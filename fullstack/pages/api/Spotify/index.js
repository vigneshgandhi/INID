// import { data } from "autoprefixer"
import {request,response} from "express"
import SpotifyWebApi from "spotify-web-api-node"
// import Spotify from "spotify-web-api-node"
export default async function handler(req=request,res=response){
    console.log(process.env.Spot_CLIENT_ID)
    var SpotifyApi=new SpotifyWebApi({
        clientId:process.env.Spot_CLIENT_ID,
        clientSecret:process.env.Spot_CLIENT_SECRET,
        redirectUri:process.env.redirect_Uri,
    })
    var scopes = ['user-read-private', 
    'user-read-email',
    "ugc-image-upload",
    "user-read-playback-state",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "app-remote-control",
    "streaming",
    "playlist-read-private",
    "playlist-read-private"],
    redirectUri = 'http://localhost:3000/SpotifyMusic'
    var authorizeURL=SpotifyApi.createAuthorizeURL(scopes)
    if(req.method==="GET"){
        res.json({
            data_conqurer:"ok",
            authorizeURL:authorizeURL
        })
        
    }
    else if(req.method==="PUT"){
        var code=req.body.code
        console.log(code)
        const data=await SpotifyApi.authorizationCodeGrant(code)
        SpotifyApi.setAccessToken(data.body.access_token)
        SpotifyApi.setRefreshToken(data.body.refresh_token)
        res.status(200).json({
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
    }
}