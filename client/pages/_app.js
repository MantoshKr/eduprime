import "../index.css"
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "../context";

function MyApp({Component, pageProps}){
    return (
    <Provider >
    <Navbar />
   
     <div className="mx-auto max-w-screen-2xl px-4 mt-1">
    
    <Component {...pageProps} />
    </div>
    <ToastContainer position="top-right" />
    
    </Provider>
    )
}


export default MyApp;