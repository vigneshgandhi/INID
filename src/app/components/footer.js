import Link from "next/link";
// import "bootstrap-icons/font/bootstrap-icons.min.css"
import "../Styles/footer.css"
import {library} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faPhone} from "@fortawesome/free-solid-svg-icons"

/* eslint-disable react/no-unescaped-entities */
export default function footer(){
    library.add(faEnvelope)
    library.add(faPhone)
    return(
        <>
            <div className="footer bg-dark" id="footer">
                <div className="row">
                    <div className="col">
                        <h3 id="textfoot">InnovationIdeas</h3>
                        <p id="foot">We research people's problems to generate ideas and develop effective solutions.</p>
                    </div>
                    <div className="col">
                        <p id="textfoot">Useful Links</p>
                        <ul className="row">
                            <li><Link href={"/StockResearch"} id="texter">Stock research</Link></li>
                            <li><Link href={"/IdeaCreate"} id="texter"> Idea Create</Link></li>
                            <li><Link href={"/IdeaSolving"} id="texter">Solve Ideas</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <p id="textfoot">Contact</p>
                        <FontAwesomeIcon icon={faEnvelope} style={{color:"cyan !important",height:"30px",marginLeft:"-90px !important"}}/>
                        <a href="mailto:vigneshgandhib4@gmail.com" className="mx-2" id="texter">Redfeathers Gaming</a><br/>
                        <FontAwesomeIcon icon={faPhone} style={{color: "#33dae6",height:"30px",marginLeft:"-90px !important",marginTop:"5px"}} />
                        <a href="tel:+918122310843" className="mx-2" id="texter">Contact Admin</a>
                    </div>
                </div>
            </div>
        </>
    )
}