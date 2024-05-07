import "../index.css"
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({Component, pageProps}){
    return (
    <>
    <Navbar />
   
     <div className="mx-auto max-w-screen-2xl px-4 mt-1">
    
    <Component {...pageProps} />
    </div>
    <ToastContainer position="top-right" />
    
    </>
    )
}


export default MyApp;