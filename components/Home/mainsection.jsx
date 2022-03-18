import React from 'react'
import MainStyles from '../../styles/Main.module.css'
const mainsection = () => {
  return (
    <div className={MainStyles.TopContainer}>
        <div className={MainStyles.HeadingContainer}>
        <h1 className={MainStyles.Headingmain}>Develop backend faster with Bitloops</h1>
        <p className={MainStyles.Content}>Build, scale, extend and manage your backend, picoservices, microservices and APIs with Bitloops</p>
        <button className={MainStyles.BtnOne}>Get Started For Free</button>
        <button className={MainStyles.BesideBtn}>Questions? Talk to an expert</button>
        </div>
        <div className={MainStyles.ImageContainer}>
            <img src="https://www.netlify.com/v3/img/build/lrOzZEYMmu-650.avif" alt="" />
        </div>
    </div>
  )
}

export default mainsection