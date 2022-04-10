import Styles from '../../styles/Landing/Community.module.css'

const community = () => {
  return (
    <div>
        <div className={Styles.Container}>
            <div className={Styles.InnerContainer}>
                <div className={Styles.TopHeading}>
                    <h1 style={{marginBottom:"4rem",fontSize:'35px',fontWeight:'500'}}>Join Our Developers Community</h1>
                </div>
                <div className={Styles.MainCommunity}>

         
                <div className={Styles.Community}>
                    <a href="https://bitloops-community.slack.com​" target="_blank" rel="noreferrer">
                    <img src="/slack.png" alt="Community Image" className={Styles.Image} /> 
                    <h4 style={{textAlign:'center'}}>Slack.com</h4>
                    </a>
                </div>
                <div className={Styles.Community}>
                    <a href="https://twitter.com/thebitloops" target="_blank" rel="noreferrer">
                    <img src="/twitter.png" alt="Community Image" className={Styles.Image} /> 
                    <h4 style={{textAlign:'center'}}>Twitter.com</h4>
                    </a>
                </div>
                <div className={Styles.Community}>
                <a href="https://github.com/bitloops/bitloops" target="_blank" rel="noreferrer">
                    <img src="/github.jpg" alt="Community Image" className={Styles.Image} /> 
                    <h4 style={{textAlign:'center'}}>Github</h4>
                   </a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default community