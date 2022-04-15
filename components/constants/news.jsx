// Importing CSS FIle
import Styles from '../../styles/NewFooter/News.module.css'


const news = () => {
    return (
        <div>
            <div className={Styles.Container}>
                <div className={Styles.InnerContainer}>
                    <h1>Stay in the loop! Bitloops has only just launched!</h1>
                    <p>We aim to launch several cool features over the next few months, including a managed cloud service. Subscribe to get updated first.</p>
                   <input type="text" placeholder='Enter Email' className={Styles.EmailBox}  />
                   <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}


export default news;