import Styles from '../../styles/Landing/Tech.module.css'
const techStack = () => {
  return (
    <div>
        <div className={Styles.Container}>
            <div className={Styles.TopContent}>
                <h1>Integrate with Your Favorite Technologies</h1>
                <p>Cross-platform and language agnostic. Designed to work well from your frontend or backend.</p>
            </div>
            <div className={Styles.TechContainer}>
              

                <img src="/Techs/js.svg" alt="" style={{width:'100px'}} />
   
                <img src="/Techs/android.svg" alt="" style={{width:'100px'}} />
                <img src="/Techs/apple.svg" alt="" style={{width:'100px'}} />
                <img src="/Techs/deno.svg" alt="" style={{width:'100px'}} />
                <img src="/Techs/flutter.svg" alt="" style={{width:'100px'}} />
                <img src="/Techs/nodejs.svg" alt="" style={{width:'100px'}} />
            </div>
        </div>
    </div>
  )
}

export default techStack