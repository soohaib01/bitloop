
import Styles from '../../styles/Community/Top.module.css'
import Counter from '../LandingOne/counter'
const topSection = () => {
  return (
    <div>
      <div className={Styles.Container}>
        <div className={Styles.InnerContainer}>
          <div className={Styles.Content}>
            <p>We &#10084;&#65039; To Open Source</p>
            <h1>Bitloops is built by the open-source community of 500+ contributors</h1>
          </div>
           <div className={Styles.SecondContent}>
             <p>Inspire and get inspired. Join our community of maintainers and contributors and help us make Appwrite better for developers all around the world</p>
           </div>
           <div className={Styles.BtnGroup}>
             <button className={Styles.BtnOne}>Follow On Github</button>
             <button className={Styles.BtnTwo}>Find Open Issues</button>
           </div>
        </div>
      </div>
      <div style={{marginTop:'2rem'}}>
      <Counter/>

      </div>
    </div>
  )
}

export default topSection