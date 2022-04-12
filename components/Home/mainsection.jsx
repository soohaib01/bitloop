import React from 'react'
import MainStyles from '../../styles/Main.module.css'
const mainsection = () => {
  return (
    <div className={MainStyles.TopContainer}>
        <div className={MainStyles.HeadingContainer}>
        <h1 className={MainStyles.Headingmain}><span className={MainStyles.ColorFull}>Develop</span> backends <span className={MainStyles.animate}>10X</span> faster with Bitloops</h1>
        <p className={MainStyles.Content}>Faster, scalable, powerful, strongly-typed, open-source Firebase alternative​</p>
        <button className={MainStyles.BtnOne}>Get Started For Free</button>
        <button className={MainStyles.BesideBtn}>Questions? Talk to an expert</button>
        </div>
        <div className={MainStyles.ImageContainer}>
            <img src="/Bitloops.gif" alt="" className={MainStyles.Image} />
            <p style={{
              fontSize:'15px',
              textAlign:'center'
            }}
            className={MainStyles.MobileCenter}
            >Bitloop’s liveSync feature connects frontend to backend in realtime!​</p>
        </div>
    </div>
  )
}

export default mainsection