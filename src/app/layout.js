import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-icons/icons/search.svg'
import Script from 'next/script';
// const inter = Inter({ subsets: ['latin'] })
import './Styles/globals.css'
import Head from 'next/head';
// import Link from 'next/link';
import './Styles/Navbar.css'
export const metadata = {
  title: 'InnovationIdeas',
  description: 'We are going to give the problem statement to worldwide with the help of fashionized web technology for all problem. And we are going to give the crypto for solving the statement. We love the department of art development. Here a User can also post the problem, Sell the art. We will secure your every single line data to be protected.',
  icons:{
    icon:['./favicon.ico?v=4'],
    apple:['/public/favicon_io/apple-touch-icon.png?v=4'],
    shortcut:['/public/favicon_io/apple-touch-icon.png']
  },
  manifest:'/public/favicon_io/site.webmanifest'
}




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel='shortcut icon' type={'image/x-icon'} sizes={"180x180"} href='../../public/favicon_io/favicon.ico'/>
        <meta httpEquiv="Content-Security-Policy" content="frame-src 'self' https://open.spotify.com;"  />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />    
      </Head>
      <body className='scrapper'>{children}</body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></Script>
    </html>
  )
}
