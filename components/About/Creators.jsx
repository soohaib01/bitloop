import Styles from '../../styles/About/Creators.module.css'

const Creators = () => {
  return (
    <div>
        <div className={Styles.MainContainer}>
            <div className={Styles.SetWidth}>

      
          <div className={Styles.Content}>
              <img src="/iconOne.png" alt="User Led Product" className={Styles.Icon} />
              <h3>User-Led Product</h3>
              <p>Our product roadmap will be driven by our Users. Help us help you!</p>
          </div>
          <div className={Styles.Content}>
              <img src="/iconTwo.png" alt="User Led Product" className={Styles.Icon} />
              <h3>User-Led Product</h3>
              <p>Our product roadmap will be driven by our Users. Help us help you!</p>
          </div>
          <div className={Styles.Content}>
              <img src="/iconThree.png" alt="User Led Product" className={Styles.Icon} />
              <h3>User-Led Product</h3>
              <p>Our product roadmap will be driven by our Users. Help us help you!</p>
          </div>
            <div className={Styles.Content}>
              <img src="/iconFour.png" alt="User Led Product" className={Styles.Icon} />
              <h3>User-Led Product</h3>
              <p>Our product roadmap will be driven by our Users. Help us help you!</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Creators