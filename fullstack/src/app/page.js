import dynamic from 'next/dynamic'

// import Navbar from './components/Navbar'
const Navbar =dynamic(()=>import("./components/Navbar"),{ssr: false})
import WCard from './components/Welcome_card'
import Carousel from './components/Carousel'
import Footer from './components/footer'
// import 'bootstrap/dist/css/bootstrap.min.css' 
import './Styles/Navbar.css'





export default function Home() {
  return (
    <>
      <Navbar/>
        <Carousel/>
        <WCard />
      {/* <Footer/> */}
    </>
  )
}
