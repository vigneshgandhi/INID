// import navbar from "../components/Navbar";

import dynamic from "next/dynamic";
import "../Styles/common.css"

const Navbar=dynamic(()=>import("../components/Navbar"),{ssr:false})
export default function stockResearch(){
    return(
        <>
            <Navbar />
            <div className="container-fluid" id="Stocks">
                <p className="display-4" id="gradtext">This page is still under development</p>             
            </div>
        </>
    )
}