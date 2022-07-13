
import axios from "axios";
import React ,{useEffect} from "react";
import {useStateProvider} from "../utils/StateProvider"
 function Playlists(){
    const [{token,dispatch}]=useStateProvider();
    useEffect(()=>{
        const getPlaylistData=async()=>{
            const response=await axios.get(" https://api.spotify.com/v1/me/playlists",{
                headers:{
                    Authorization:"Bearer"+token,
                    "COntent-Type":"application/json",
                }
            });
            console.log(response)
        }
    },[token,dispatch])
    return(
        <div>Playlists</div>
    )
}
export default Playlists