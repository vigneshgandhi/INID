"use client"
import Image from "next/image"
import icon from "../favicon.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from "next/link";
import '../Styles/Navbar.css'
function csr(){
    if(typeof window!=='undefined') return sessionStorage.getItem("user_logged_in");
}

function logout_user(){
    sessionStorage.clear()
    window.location.href="http://localhost:3000/"
}
function Navbar(){
    var user=csr()
    console.log(user)
    if(user===null){
        return(
        <div className='Navbar'>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/" passHref>
                    <Image src={icon} alt="Logo" width="30" height="34" className="d-inline-block align-text-top img "/>
                    InnovationIdeas
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" href='#' role='button' data-bs-toggle='dropdown'>Account</Link>
                    <ul className='dropdown-menu'>
                        <li><Link className='nav-link dropdown-item' href="/login">Open The Door</Link></li>
                        <li><Link className='nav-link dropdown-item' href="/CreateAccount">Register your Identity</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/IdeaCreate">IDEA CREATE</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/IdeaSolving">IDEA SOLVING</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/About">About</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
        )
    }
    else{
        var user1,key,username;
        if(process.browser){
            console.log(user)
            user1=JSON.parse(user)
            key=user1.user_found.data.id
            username=user1.user_found.data.username
        }
        return(

        <>
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/" passHref>
                        <Image src={icon} alt="Logo" width="30" height="34" className="d-inline-block align-text-top img "/>
                        InnovationIdeas
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href='#' role='button' data-bs-toggle='dropdown' key={key} suppressHydrationWarning={true}>welcome {username}</Link>
                        <ul className='dropdown-menu'>
                            <li><Link className='nav-link dropdown-item' href="/Profile">Profile</Link></li>
                            <li><Link className='nav-link dropdown-item' href="/SpotifyMusic">SpotifyMusic</Link></li>
                            <li><Link className="nav-link dropdown-item" href="/StockResearch">Stock Research</Link></li>
                            <li><Link className="nav-link dropdown-item" href="/StockNews">StockNews</Link></li>
                            <li><Link className="nav-link dropdown-item" onClick={logout_user} href="#">Logout</Link></li>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role='button' data-bs-toggle='dropdown'>IDEA CREATE</Link>
                            <ul className='dropdown-menu'>
                                <li><Link className='nav-link dropdown-item' href="/IdeaCreate/Common/Students">For own Project/Society</Link></li>
                                <li><Link className='nav-link dropdown-item' href="/IdeaCreate/Common/Gamers">For Gamers</Link></li>
                                <li><Link className="nav-link dropdown-item" href="/IdeaCreate/Common/StockMarket">For Investors</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/IdeaSolving">IDEA SOLVING</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/About">About</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        </>
        )
    }
}
export default Navbar;