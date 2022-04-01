import Styles from '../../styles/Landing/Counter.module.css'

const counter = () => {
  return (
    <div>
        <div className={Styles.Container}>
            <div className={Styles.InnerContainer}>
               <h2>+2000 Stars</h2>
               <h2>+2000 Forks</h2>
               <h2>+2000 Pull Requests</h2>
               <h2>+2000 Commits</h2>
            </div>
        </div>
    </div>
  )
}

export default counter