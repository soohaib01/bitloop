import Styles from '../../styles/Landing/Top.module.css'

const topSection = () => {
  return (
    <div>
     <div className={Styles.Container}>
      <div className={Styles.InnerContainer}>
        <div className={Styles.RightContainer}>
          <div className={Styles.BtnTopRounded}>
            <p>Lorem ipsum dolor sit sit lorem</p>
          </div>
          <div className={Styles.Heading}>
            <h1>Develop backends 10X faster with Bitloops</h1>
          </div>
          <div className={Styles.Content}>
            <p>Appwrite is a self-hosted backend-as-a-service platform 
              that provides developers with all the core APIs required to build any application.</p>
          </div>
          <div className={Styles.BtnGroup}>
            <button className={Styles.BtnOne}>Get Stared</button>
            <button className={Styles.BtnTwo}>Github</button>
          </div>
        </div>
        <div className={Styles.LeftContainer}>         
          <img src="Bitloops.gif" alt="Bitloops Content Code" className={Styles.HeroImage} />
        </div>
      </div>
     </div>
    </div>
  )
}

export default topSection