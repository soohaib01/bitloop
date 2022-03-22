import Styles from '../../styles/Revamp/Features.module.css'

const Features = () => {
  return (
    <div>
        <div className={Styles.MainContainer}>  
        <span className={Styles.FirstHeading}>Passionate , Developers</span>
        <h1 className={Styles.HeadingOne}>What Makes Us Different</h1>
        <div className={Styles.BoxContainer}>
        <div className={Styles.ActualBoxes}>
       <img src="/iconOne.png" alt="Icon Will Be Here" className={Styles.Icon}/>
       <h2>Open Source
       </h2>
       <p>Our platform is open-source and we welcome improvements and suggestions. You will always be able to run Bitloops on your own cloud without any technology lock-in</p>
        </div>
        <div className={Styles.ActualBoxes}>
       <img src="/iconOne.png" alt="Icon Will Be Here" className={Styles.Icon}/>
       <h2>Open Source
       </h2>
       <p>Our platform is open-source and we welcome improvements and suggestions. You will always be able to run Bitloops on your own cloud without any technology lock-in</p>
        </div>
        <div className={Styles.ActualBoxes}>
       <img src="/iconOne.png" alt="Icon Will Be Here" className={Styles.Icon}/>
       <h2>Open Source
       </h2>
       <p>Our platform is open-source and we welcome improvements and suggestions. You will always be able to run Bitloops on your own cloud without any technology lock-in</p>
        </div>
        
        </div> 
        </div>
    </div>
  )
}

export default Features