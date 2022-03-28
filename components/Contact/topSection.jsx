import Styles from '../../styles/Contact/Top.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment ,faHeadphonesSimple,faBarcode,faHandshake,faWavePulse} from '@fortawesome/free-solid-svg-icons'

const topSection = () => {
  return (
   <div className={Styles.MainContainer}>
       <div className={Styles.HeadingContainer}>
        <div className={Styles.NestedContainer}>
       <h1 className={Styles.HeadingMainTop}>We love to hear from you</h1>
       <p>We are here to help and answer any questions you might have. We are also very keen on getting your feedback or feature requests so we can continue enhancing our platform with features our users want. Please select a 
           relevant topic below and well get back to you as soon as possible.</p>
        </div>
       </div>
      <div className={Styles.Container}>
        <div className={Styles.Card}>
         <div className={Styles.Icon}>
         <FontAwesomeIcon icon={faHeadphonesSimple} className={Styles.MainIcon}/>
         <h2>Get Support</h2>
          </div>
     <div className={Styles.ContentContainer}>
          <p>Using Bitloops and experiencing some difficulties?
            Send us your issue and we wll get back ASAP!</p>
            <p>Email Us On</p>
            <a href="#">support@bitloops.com</a>
     </div>
  
        </div>
        <div className={Styles.Card}>
         <div className={Styles.Icon}>
         <FontAwesomeIcon icon={faComment} className={Styles.MainIcon}/>
         <h2>Feedback</h2>
          </div>
     <div className={Styles.ContentContainer}>
          <p>Using Bitloops and experiencing some difficulties?
            Send us your issue and we wll get back ASAP!</p>
            <p>Email Us On</p>
            <a href="#">support@bitloops.com</a>
     </div>
  
        </div>
        <div className={Styles.Card}>
         <div className={Styles.Icon}>
         <FontAwesomeIcon icon={faBarcode} className={Styles.MainIcon}/>
         <h2>Inquiries</h2>
          </div>
     <div className={Styles.ContentContainer}>
          <p>Using Bitloops and experiencing some difficulties?
            Send us your issue and we wll get back ASAP!</p>
            <p>Email Us On</p>
            <a href="#">support@bitloops.com</a>
     </div>
  
        </div>
        <div className={Styles.Card}>
         <div className={Styles.Icon}>
         <FontAwesomeIcon icon={faHandshake} className={Styles.MainIcon}/>
         <h2>Partnerships</h2>
          </div>
     <div className={Styles.ContentContainer}>
          <p>Using Bitloops and experiencing some difficulties?
            Send us your issue and we wll get back ASAP!</p>
            <p>Email Us On</p>
            <a href="#">support@bitloops.com</a>
     </div>
  
        </div>
        <div className={Styles.Card}>
         <div className={Styles.Icon}>
         <FontAwesomeIcon icon={faHeadphonesSimple} className={Styles.MainIcon}/>
         <h2>Support</h2>
          </div>
     <div className={Styles.ContentContainer}>
          <p>Using Bitloops and experiencing some difficulties?
            Send us your issue and we wll get back ASAP!</p>
            <p>Email Us On</p>
            <a href="#">support@bitloops.com</a>
     </div>
  
        </div>
      </div>
   </div>
  )
}

export default topSection