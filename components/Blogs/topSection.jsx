import Styles from '../../styles/Blogs/Top.module.css'

const topSection = () => {
  return (
    <div>
        <div className={Styles.Container}>
        <div className={Styles.InnerContainer}>
            <div className={Styles.ImageSide}>
                <img src="/Blogs/topOne.jpg" alt="TOp Community Section Image" className={Styles.Image} />
            </div>
            <div className={Styles.ContentSide}>
            <p>29 March 2022</p>
            <h2>Community Day</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, atque.</p>
            <div>
                <h5 className={Styles.AutorName}>Author Name</h5>
            </div>
            </div> 
        </div>
        </div>
    </div>
  )
}

export default topSection