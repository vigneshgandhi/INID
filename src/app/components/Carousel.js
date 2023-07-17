import Image from "next/image";
import img1 from "../../../public/success3.jpg"
import "../Styles/Carousel.css"
import img2 from "../../../public/Success.jpg"
import img3 from "../../../public/Success-2.jpg"

export default function Carousel(){
    return(
        <>
        <div id="carouselExampleCaptions mb-5" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <Image src={img1} className="d-block w-100 img1" id="img1" alt="motivation"/>
            <div className="carousel-caption d-none d-md-block">
                {/* <h5><q>Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.</q></h5> */}
                <h5 id="h5"><q id="color">If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.</q></h5>
            </div>
            </div>
            <div className="carousel-item">
            <Image src={img2} className="d-block w-100 img1" id="img1" alt="motivation"/>
            <div className="carousel-caption d-none d-md-block">
                <h5 id="h5"><q id="color-2">Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.</q></h5>
                {/* <p>Some representative placeholder content for the second slide.</p> */}
            </div>
            </div>
            <div className="carousel-item">
            <Image src={img3} className="d-block w-100 img1" id="img1" alt="motivation"/>
            <div className="carousel-caption d-none d-md-block">
                <h5 id="h5"><q id="color-3">Success is not final; failure is not fatal: It is the courage to continue that counts.</q></h5>
                {/* <p>Some representative placeholder content for the third slide.</p> */}
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </>
    )
}