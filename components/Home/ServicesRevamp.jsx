import Styles from '../../styles/Revamp/Services.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
const ServicesRevamp = () => {
  return (

    <div>
        <div className={Styles.MainContainer}>
         <h4 className={Styles.GrayText}>SHIP FAST. SHIP BETTER.
</h4>
<h1 className={Styles.Heading}>Lorem ipsum dolor sit <br></br>amet consectetur adipisicing.</h1>
        </div>
        <div className={Styles.InfoContainer}>
           <div className={Styles.LeftSideContent}>
               <h2>Backend-as-a-Service</h2> 
               <ul>
                   <li>  
                   <FontAwesomeIcon
        icon={faArrowRight}
        style={{ fontSize: 17,marginRight:10, color: "black" }}
                    
/>
                       Lorem ipsum dolor </li>
                       <li>  
                   <FontAwesomeIcon
        icon={faArrowRight}
        style={{ fontSize: 17,marginRight:10, color: "black" }}
                    
/>
                       Lorem ipsum dolor put</li>
                       <li>  
                   <FontAwesomeIcon
        icon={faArrowRight}
        style={{ fontSize: 17,marginRight:10, color: "black" }}
                    
/>
                       Lorem ipsum dolor lorem </li>
                       <li>  
                   <FontAwesomeIcon
        icon={faArrowRight}
        style={{ fontSize: 17,marginRight:10, color: "black" }}
                    
/>
                       Lorem ipsum dolor construcd </li>
                  
               </ul>
           <div className={Styles.Content}>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br></br> Tenetur vitae eos natus voluptas commodi amet officia   <br></br></p>
    <p style={{
        paddingTop:'1rem',
        borderBottom:'1px solid gray',
        width:'34%'
    }}>Lorem ipsum dolor sit</p>
           </div>
               </div> 
               <div className={Styles.RightSideContainer}>
                   <img src="/backend.png" alt="Backend Service Image" className={Styles.ServiceOneImage} />
                   <div className={Styles.CommentBox}>
                       <div className={Styles.TopHeader}>
             <h3 className={Styles.Commentheading}>Lorem <span className={Styles.MakeBox}>ipsum</span> dolor sit amet.</h3>
             <p className={Styles.ContentBelow}>Lorem ipsum dolor sit amet.</p>
             <p className={Styles.ContentBelow1}>Lorem ipsum dolor <span className={Styles.MakeBlue}>sit amet.</span></p>
             <p className={Styles.ContentBelow1}>Lorem ipsum dolor <span className={Styles.MakeBlue}>amet.</span></p>
                       </div>
                   </div>
               </div>
        </div>
        <div className={Styles.MainContainer} style={{
            paddingTop:'7rem',
        }}>
       
        </div>
        <div className={Styles.InfoContainer}>
           <div className={Styles.LeftSideContent}>
           <img src="/backend.png" alt="Backend Service Image" className={Styles.ServiceOneImage} />
                   <div className={Styles.CommentBox}>
                       <div className={Styles.TopHeader}>
             <h3 className={Styles.Commentheading}>Lorem <span className={Styles.MakeBox}>ipsum</span> dolor sit amet.</h3>
             <p className={Styles.ContentBelow}>Lorem ipsum dolor sit amet.</p>
             <p className={Styles.ContentBelow1}>Lorem ipsum dolor <span className={Styles.MakeBlue}>sit amet.</span></p>
             <p className={Styles.ContentBelow1}>Lorem ipsum dolor <span className={Styles.MakeBlue}>amet.</span></p>
                       </div>
                   </div>
               </div> 
               <div className={Styles.RightSideContainer}>
               <h2>Backend-as-a-Service</h2> 
               <ul>
                   <li>  
                   <FontAwesomeIcon
        icon={faArrowRight}
        style={{ fontSize: 17,marginRight:10, color: "black" }}
                    
/>
                       Lorem ipsum dolor </li>
                       <li>  
                   <FontAwesomeIcon
        icon={faArrowRight}
        style={{ fontSize: 17,marginRight:10, color: "black" }}
                    
/>
                       Lorem ipsum dolor put</li>
                       <li>  
                   <FontAwesomeIcon
        icon={faArrowRight}
        style={{ fontSize: 17,marginRight:10, color: "black" }}
                    
/>
                       Lorem ipsum dolor lorem </li>
                       <li>  
                   <FontAwesomeIcon
        icon={faArrowRight}
        style={{ fontSize: 17,marginRight:10, color: "black" }}
                    
/>
                       Lorem ipsum dolor construcd </li>
                  
               </ul>
           <div className={Styles.Content}>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br></br> Tenetur vitae eos natus voluptas commodi amet officia   <br></br></p>
    <p style={{
        paddingTop:'1rem',
        borderBottom:'1px solid gray',
        width:'34%'
    }}>Lorem ipsum dolor sit</p>
           </div>
               </div>
        </div>
    </div>
  )
}

export default ServicesRevamp