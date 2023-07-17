// import Navbar from "../components/Navbar";
const Navbar=dynamic(()=>import("../../../components/Navbar"),{ssr:false})
import dynamic from "next/dynamic"
import "../../../Styles/common.css"

// import Styles from "../Styles/IC.module.css"
export default function IdeaCreate(){
    return(
        <>
            <Navbar/>
            <div className="container-fluid content-page" id="Stocks">
                <p className="display-4" id="gradtext">This page is still under development</p>
            </div>
        </>
    )
}