import SlackStyles from "../../styles/Slack.module.css"
const slackBanner = () => {
  return (
    <div className={SlackStyles.CenterSide}>
        <div className={SlackStyles.Banner}>
         <div className={SlackStyles.RightSideContent}>
         <h1 className={SlackStyles.RightSideHeading}>Join our community</h1>
         <p className={SlackStyles.RightSidedesc}>The Bitloops community is growing strongly, and, as firm believers in open-source, we support our community and showcase the best projects, workflows and backend apps. Become a contributor, champion or moderator on our Slack Community</p>
          <p className={SlackStyles.RightSideSupport}>Connect with our support options</p>
          <button className={SlackStyles.RightSideCta}>Join Now</button>
         </div>
       <div className={SlackStyles.RightSideSlackImage}></div>
          <img src="/get-more-slack-bike.png" alt="Join Slack Image" className={SlackStyles.RightSideImage}/>
        </div>
    </div>
  )
}

export default slackBanner