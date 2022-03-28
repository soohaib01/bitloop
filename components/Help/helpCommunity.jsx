import Styles from '../../styles/Help/Community.module.css'

const helpCommunity = () => {
  return (
    <div>
        <div className={Styles.HeadingContainer}>
            <h1>Join the Bitloops Community and become a Bitlooper!</h1>
            <p>We have a Slack Group just for Bitloopers where we exchange ideas and help each other out.
            You can also follow us on <strong style={{color:'#a455ee'}}>Twitter, GitHub or Dev.to </strong>to be always up-to-date!</p>
        </div>
        <div className={Styles.CardsContainer}>
            <div className={Styles.Card}>
                <img src="/slack.png" alt="" className={Styles.Image} />
                <div className={Styles.Content}>
                <h2>Slack</h2>
                <p>Join the Bitloops Slack Group now to learn about the exciting projects being developed with Bitloops!</p>
                </div>
            </div>
            <div className={Styles.Card}>
                <img src="/github.jpg" alt="" className={Styles.Image} />
                <div className={Styles.Content}>
                <h2>Slack</h2>
                <p>Join the Bitloops Slack Group now to learn about the exciting projects being developed with Bitloops!</p>
                </div>
            </div>
        </div>
        <div className={Styles.CardsContainer}>
            <div className={Styles.Card}>
                <img src="/slack.png" alt="" className={Styles.Image} />
                <div className={Styles.Content}>
                <h2>Slack</h2>
                <p>Join the Bitloops Slack Group now to learn about the exciting projects being developed with Bitloops!</p>
                </div>
            </div>
            <div className={Styles.Card}>
                <img src="/github.jpg" alt="" className={Styles.Image} />
                <div className={Styles.Content}>
                <h2>Slack</h2>
                <p>Join the Bitloops Slack Group now to learn about the exciting projects being developed with Bitloops!</p>
                </div>
            </div>
        </div>


    {/* Mobile View Component Code Starts From Here Break On 1080 Till The Smallest  */}
        <div className={Styles.MobileContainer}>
          <div className={Styles.ImageMobile}>
          <img src="/slack.png" alt="Community Image For Mobile View" className={Styles.ActualImageForMobile} />
           <h2>Slack</h2>
           <p>Join the Bitloops Slack Group now to learn about the exciting projects being developed with Bitloops!</p>
          </div>
          <div className={Styles.BorderLine}></div>
          <div className={Styles.ImageMobile}>
          <img src="/slack.png" alt="Community Image For Mobile View" className={Styles.ActualImageForMobile} />
           <h2>Slack</h2>
           <p>Join the Bitloops Slack Group now to learn about the exciting projects being developed with Bitloops!</p>
          </div>
          <div className={Styles.BorderLine}></div>
          <div className={Styles.ImageMobile}>
          <img src="/slack.png" alt="Community Image For Mobile View" className={Styles.ActualImageForMobile} />
           <h2>Slack</h2>
           <p>Join the Bitloops Slack Group now to learn about the exciting projects being developed with Bitloops!</p>
          </div>
          <div className={Styles.BorderLine}></div>
          <div className={Styles.ImageMobile}>
          <img src="/slack.png" alt="Community Image For Mobile View" className={Styles.ActualImageForMobile} />
           <h2>Slack</h2>
           <p>Join the Bitloops Slack Group now to learn about the exciting projects being developed with Bitloops!</p>
          </div>
          <div className={Styles.BorderLine}></div>
        </div>
    </div>
  )
}

export default helpCommunity