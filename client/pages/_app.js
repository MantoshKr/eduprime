import "../index.css"
import Navbar from "../components/Navbar";

function MyApp({Component, pageProps}){
    return (
    <>
    <Navbar />
   
     <div className="mx-auto max-w-screen-2xl px-4 mt-1">
    
    <Component {...pageProps} />
    </div>
    
    </>
    )
}


export default MyApp;