import Styles from '../../styles/Landing/Community.module.css'

const community = () => {
  return (
    <div>
        <div className={Styles.Container}>
            <div className={Styles.InnerContainer}>
                <div className={Styles.TopHeading}>
                    <h1>Join Our Developers Community</h1>
                </div>
                <div className={Styles.MainCommunity}>

         
                <div className={Styles.Community}>
                    <img src="/slack.png" alt="Community Image" className={Styles.Image} /> 
                    <h4>Slack.com/bitloops</h4>
                </div>
                <div className={Styles.Community}>
                    <img src="/twitter.png" alt="Community Image" className={Styles.Image} /> 
                    <h4>Slack</h4>
                </div>
                <div className={Styles.Community}>
                    <img src="/github.jpg" alt="Community Image" className={Styles.Image} /> 
                    <h4>Slack</h4>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default community