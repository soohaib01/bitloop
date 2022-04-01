import Styles from '../../styles/Landing/Second.module.css'
import Link from 'next/link'
const secondSection = () => {
  return (
    <div>
        <div className={Styles.Container}>
            <div className={Styles.InnerContainer}>
                <div className={Styles.RightContainer}>
                   <div className={Styles.Heading}>
                       <h1>Sign Up Now for Free Cloud Credits</h1>
                   </div>
                   <div className={Styles.Content}>
                       <p>Deploying Bitloops has never been easier. Secure your free credits for Bitloops Cloud now by signing up.</p>
                   </div>
                   <div className={Styles.NewsLeytter}>
                       <input type="text" placeholder='Enter Your Email to Subscribe' className={Styles.EmailBox} />
                       <button className={Styles.EmailBtn}>Get Notified</button>
                   </div>
                   <div className={Styles.LearnMoreLink}>
                                                               
               <Link href="/">
                   <span className={Styles.Linking}>Learn More About Bitloops</span>
               </Link>
                   </div>
                </div>
                <div className={Styles.Leftcontainer}>
                   <img src="/NewHome/intro-devices.png" alt='The Sign Up Image' className={Styles.HeroLeftImage}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default secondSection