/* eslint-disable react/no-unescaped-entities */
const Navbar =dynamic(()=>import("../components/Navbar"),{ssr: false})
import Image from "next/image"
import "../Styles/About.css"
import mI from "../../../public/Motivate.jpg"
import mII from "../../../public/rickwarren.jpg"
import mIII from "../../../public/Mark_Zuckerberg.jpg"
import mIV from "../../../public/Sundar-Pichai.jpg"
import mV from "../../../public/warrenbuffet.jpg"
import mVI from "../../../public/Benjamin_Graham_(1894-1976)_in_1950.jpg"
import mVII from "../../../public/charlie.jpeg"
import mVIII from "../../../public/peterlynch.jpeg"
import Footer from "../components/footer"
import dynamic from "next/dynamic"
export default function About(){
    return(
        <>
            <Navbar />
            <div className="container mt-5 mb-5" id="contabout">
                <p className="mt-3 mb-3"><q className="h3" id="selfquotes">In the canvas of life, be the artist of vibrant colors</q></p>
            </div>
            <div className="About container justify-content-center align-items-center" id="container-about">
                <div className="container text-center" >
                    <div className="row">
                        <div className="col">
                            <div className="card" id="redcard-1">
                                <h5 className="h5" id="h5About">This page provides updates on website features, crypto and stocks news, and an upcoming coin launch.</h5>
                                <div className="card-body">
                                </div>
                                <ul className="list-group list-group-flush" id="features">
                                    <li className="list-group-item">upcoming G-square coin(launch between 2025 and 2026)</li>
                                    <li className="list-group-item">Going to develop new blockchain</li>
                                    <li className="list-group-item">Health benefits updates</li>
                                    <li className="list-group-item">Next, We are going to develop the Project named CallerTalker which main focuses on anonymous online calling.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <Image src={mI} className="card-img-top" id="about-image" alt="motivation"/>
                                <div className="card-header">
                                    <p id="motivation"><q id="quotes">The biggest motivation comes from legends life</q></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" id="nrs5">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item" >
                            <h2 className="accordion-header" id="achead">
                                <button className="accordion-button" id="achead" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:"black"}}>
                                    Why was this website named 'InnovationIdeas', and what is the idea behind it?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body" id="acbody">
                                    <article id="article">
                                        The website is named "InnovationIdeas" to reflect its core purpose of fostering innovation and generating creative ideas. The name signifies that the website is dedicated to the exploration and development of innovative concepts across various domains.
                                        The idea behind naming the website "InnovationIdeas" is to emphasize the importance of generating fresh and inventive ideas as a catalyst for progress and positive change. <strong id="strongabout">By combining the words "innovation" and "ideas," the name encapsulates the essence of the website, which serves as a platform for individuals to share, discuss, and cultivate innovative ideas.</strong>
                                        The website's name conveys the message that innovation starts with ideas, and by providing a space where individuals can exchange and refine their ideas, the website aims to inspire and empower users to push the boundaries of what is possible.
                                        In summary, the name "InnovationIdeas" signifies the website's focus on nurturing innovation and the central role that ideas play in driving transformative advancements.
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="achead">
                                <button className="accordion-button collapsed" id="achead" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    why innovationideas force people to invest in stocks and crypto?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <article id="article">
                                        Investing in stocks and cryptocurrencies can be driven by several reasons, as they offer different potential benefits and opportunities. Here are some reasons why people choose to invest in stocks and cryptocurrencies:
                                        <ol start={1}>
                                            <li>Potential for long-term growth</li>
                                            <li>Diversification</li>
                                            <li>Income generation</li>
                                            <li>Participation in technological innovation</li>
                                            <li>Hedge against inflation</li>
                                            <li>Accessibility and liquidity</li>
                                        </ol>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="achead">
                                <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" id="achead">
                                    why innovation idea force people to invest on stocks?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <article id="article">
                                        <strong id="strongabout">InnovationIdeas doesn't directly force people to invest in stocks. we are giving our personal opinions. most importantly, we are not your financial advisors</strong>Investing in stocks is a personal financial decision based on individual risk tolerance, financial goals, and market analysis. InnovationIdeas, as a platform that fosters innovation and generates creative ideas, can indirectly influence the investment landscape by highlighting emerging trends, disruptive technologies, or industries with growth potential.
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="achead">
                                <button className="accordion-button collapsed" id="achead" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Will InnovationIdeas explain's everything about stock?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <article id="article">
                                        <strong>InnovationIdeas can provide a valuable starting point for individuals interested in learning about stocks, including topics such as fundamental analysis, market trends, investment strategies, and risk management.</strong> It can offer a general understanding of how stocks work and their role within the financial markets.
                                        However, the stock market is a complex and dynamic environment, influenced by numerous factors such as economic conditions, company-specific dynamics, and investor sentiment. Fully grasping all aspects of stock investing requires continuous learning, experience, and staying up-to-date with the latest market developments.
                                        It's crucial to conduct thorough research, consult reputable financial sources, and consider seeking advice from licensed financial professionals or qualified advisors who specialize in investments. They can provide personalized guidance and help tailor investment strategies to individual goals and risk tolerances.
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" id="mask">
                    <div className="card mb-3" id="redcard">
                        <p id="paralock">Quotes from legends that gives motivation</p>
                    </div>
                    <div className="col" id="card-about">
                        <div className="card">
                            <Image src={mI} className="card-img-top img-fluid" id="about-image" alt="motivation"/>
                            <div className="card-header">
                                <p id="motivation"><q id="quotes">Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.</q></p>
                                <p id="name"> steve jobs </p>
                            </div>
                        </div>
                    </div>
                    <div className="col" id="card-about">
                        <div className="card">
                            <Image src={mII} className="card-img-top img-fluid" id="about-image" alt="motivation"/>
                            <div className="card-header">
                                <p id="motivation"><q id="quotes">Experience is not what happens to you. It is what you do with what happens to you. Don’t waste your pain; use it to help others.</q></p>
                                <p id="name">rickwarren</p>
                            </div>
                        </div>                    
                    </div>
                    <div className="col" id="card-about">
                        <div className="card">
                                <Image src={mIII} className="card-img-top img-fluid" id="about-image" alt="motivation"/>
                                <div className="card-header">
                                    <p id="motivation"><q id="quotes">Don’t discount yourself, no matter what you’re doing. Everyone has a unique perspective that they can bring to the world.</q></p>
                                    <p id="name">Mark Zuckerberg</p>
                                </div>
                        </div>
                    </div>
                    <div className="col" id="card-about">
                        <div className="card">
                            <Image src={mIV} className="card-img-top img-fluid" id="about-image" alt="motivation"/>
                            <div className="card-header">
                                <p id="motivation"><q id="quotes">You might fail a few times, but that’s Ok.    you end up doing something worthwhile which you learn a great deal from.</q></p>
                                <p id="name">Sundar pichai</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row mt-5">
                    <div className="col" id="card-about">
                        <div className="card">
                            <Image src={mV} className="card-img-top img-fluid" id="about-image" alt="motivation" />
                            <div className="card-header">
                                <p id="motivation"><q id="quotes">Someone’s sitting in the shade today because someone planted a tree a long time ago.</q></p>
                                <p id="name">Warren Buffet</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" id="card-about">
                        <div className="card">
                            <Image src={mVI} className="card-img-top img-fluid" id="about-image" alt="motivation" />
                            <div className="card-header">
                                <p id="motivation"><q id="quotes">People who invest make money for themselves; people who speculate make money for their brokers.</q></p>
                                <p id="name">Benjamin Graham</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" id="card-about">
                        <div className="card">
                            <Image src={mVII} className="card-img-top img-fluid" id="about-image" alt="motivation" />
                            <div className="card-header">
                                <p id="motivation"><q id="quotes">Simplicity has a way of improving performance by enabling us to better understand what we are doing.</q></p>
                                <p id="name">Charlie Munger</p>
                            </div>
                        </div>
                    </div>
                    <div className="col" id="card-about">
                        <div className="card">
                            <Image src={mVIII} className="card-img-top img-fluid" id="about-image" alt="motivation" />
                            <div className="card-header">
                                <p id="motivation"><q id="quotes">Big companies have small moves, small companies have big moves.</q></p>
                                <p className="name">peter lynch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}