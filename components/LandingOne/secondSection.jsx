import Styles from '../../styles/Landing/Second.module.css'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const secondSection = () => {
    const notify = () => toast("Wow so easy!");
  return (
    <div>
 

           
        <div className={Styles.Container}>
        <h1 className={Styles.Top}>Make any database realtime, create <br></br> APIs in seconds, deploy them in milliseconds.​</h1>

            <div className={Styles.InnerContainer}>
                <div className={Styles.RightContainer}>
                   <div className={Styles.Heading}>
                       <h1>Stay in the loop! Bitloops has only just launched!</h1>
                   </div>
                   <div className={Styles.Content}>
                       <p>We aim to launch several cool features over the next few months, including a managed cloud service. Subscribe to get updated first.</p>
                   </div>
                   <div className={Styles.NewsLeytter}>
                       <input type="text" placeholder='Enter Email' className={Styles.EmailBox} />
                       <button className={Styles.EmailBtn} onClick={notify}>Subscribe</button>
                       <ToastContainer />
                   </div>
                   <div className={Styles.LearnMoreLink}>
                                                               
               {/* // eslint-disable-next-line @next/next/link-passhref */}
               <Link href="/">
                   <span className={Styles.Linking}>Learn More About Bitloops</span>
               </Link>
                   </div>
                </div>
                <div className={Styles.Leftcontainer}>
                   <img src="secondImageOne.png" alt='The Sign Up Image' className={Styles.HeroLeftImage}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default secondSection