import React from 'react'
import MainStyles from '../../styles/Main.module.css'
const mainsection = () => {
  return (
    <div className={MainStyles.TopContainer}>
        <div className={MainStyles.HeadingContainer}>
        <h1 className={MainStyles.Headingmain}><span className={MainStyles.ColorFull}>Develop</span> backend 10X faster with <span className={MainStyles.ColorFull}>Bitloops</span></h1>
        <p className={MainStyles.Content}>Build, scale, extend and manage your backend, picoservices, microservices and APIs with Bitloops</p>
        <button className={MainStyles.BtnOne}>Get Started For Free</button>
        <button className={MainStyles.BesideBtn}>Questions? Talk to an expert</button>
        </div>
        <div className={MainStyles.ImageContainer}>
            <img src="/Bitloops.gif" alt="" className={MainStyles.Image} />
        </div>
    </div>
  )
}

export default mainsection