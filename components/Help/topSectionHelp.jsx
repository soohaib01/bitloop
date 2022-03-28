import Styles from '../../styles/Help/Top.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment ,faHeadphonesSimple,faBarcode,faHandshake,faWavePulse} from '@fortawesome/free-solid-svg-icons'

const topSectionHelp = () => {
  return (
    <div>
        <div className={Styles.Container}>
            <h1 className={Styles.TopHeading}>
            Whats on your mind?
            </h1>
            <div className={Styles.CardContainer}>
                <div className={Styles.Card}>
                <h2>Getting Started</h2>
                <div className={Styles.IconBox}>
          <img src="/getting.png" alt="Getting Started Image" className={Styles.Image} />
          <p>Want to know how to quickly get started with Bitloops? Take a look at our Resources centre where we have 
              plenty of guides and tutorials, and new ones added every week</p>
                </div>
                </div>
                <div className={Styles.Card}>
                <h2>Faqs</h2>
                <div className={Styles.IconBox}>
          <img src="/faqsvg.png" alt="Getting Started Image" className={Styles.Image} />
          <p>Want to know how to quickly get started with Bitloops? Take a look at our Resources centre where we have 
              plenty of guides and tutorials, and new ones added every week</p>
                </div>
                </div>
                <div className={Styles.Card}>
                <h2>Contact Us</h2>
                <div className={Styles.IconBox}>
          <img src="/contact.png" alt="FAQS's Images" className={Styles.Image} />
          <p>Want to know how to quickly get started with Bitloops? Take a look at our Resources centre where we have 
              plenty of guides and tutorials, and new ones added every week</p>
                </div>
                </div>
                <div className={Styles.Card}>
                <h2>Bitloop Community</h2>
                <div className={Styles.IconBox}>
          <img src="/comm.png" alt="Getting Started Image" className={Styles.Image} />
          <p>Want to know how to quickly get started with Bitloops? Take a look at our Resources centre where we have 
              plenty of guides and tutorials, and new ones added every week</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default topSectionHelp