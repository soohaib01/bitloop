import { motion } from "framer-motion"
import Styles from '../../styles/faq/Top.module.css'

const topSection = () => {
  return (
    <div>
        <div className={Styles.Container}>

            <h1>Frequently asked questions</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            
        {/* <div className={Styles.HeadingContainer}></div> */}
        </div>
    </div>
  )
}

export default topSection