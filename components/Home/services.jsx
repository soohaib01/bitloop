import ServiceStyle from '../../styles/Service.module.css'



const services = () => {
  return (
    <div>

     <div className={ServiceStyle.headingDesign}>
         <h1 className={ServiceStyle.Heading}>Build, test, deploy, iterate - Faster, more effectively!</h1>
         <p className={ServiceStyle.Content}>Whether you are working alone or in a team, build your backend using Bitloops today. Access to authentication services, any database in realtime and <br></br> a low-code workflow design interface tool to orchestrate all your pico and microservices. Deploy in seconds your iterations!</p>
     </div>
     <div className={ServiceStyle.CardBoxes}>
        <div className={ServiceStyle.CardParent}>
         <div className={ServiceStyle.CardHeading} >
             <img src="/services/two.jpg" alt="Title" className={ServiceStyle.CardImage} />
             <h3 className={ServiceStyle.Title}>Backend-as-a-Service</h3>
             <p className={ServiceStyle.CardContent}>All in one platform for your web or mobile development requirements including data and DB management, API integration, deployment, security and push notifications.</p>
         </div>
        </div>
        <div className={ServiceStyle.CardParent}>
         <div className={ServiceStyle.CardHeading} >
             <img src="/services/backend.png" alt="Title" className={ServiceStyle.CardImage} />
             <h3 className={ServiceStyle.Title}>Backend-as-a-Service</h3>
             <p className={ServiceStyle.CardContent}>All in one platform for your web or mobile development requirements including data and DB management, API integration, deployment, security and push notifications.</p>
         </div>
        </div>
        <div className={ServiceStyle.CardParent}>
         <div className={ServiceStyle.CardHeading} >
             <img src="/services/backend.png" alt="Title" className={ServiceStyle.CardImage} />
             <h3 className={ServiceStyle.Title}>Backend-as-a-Service</h3>
             <p className={ServiceStyle.CardContent}>All in one platform for your web or mobile development requirements including data and DB management, API integration, deployment, security and push notifications.</p>
         </div>
        </div>
        
     </div>
     <div className={ServiceStyle.CardBoxes}>
        <div className={ServiceStyle.CardParent}>
         <div className={ServiceStyle.CardHeading} >
             <img src="/services/two.jpg" alt="Title" className={ServiceStyle.CardImage} />
             <h3 className={ServiceStyle.Title}>Backend-as-a-Service</h3>
             <p className={ServiceStyle.CardContent}>All in one platform for your web or mobile development requirements including data and DB management, API integration, deployment, security and push notifications.</p>
         </div>
        </div>
        <div className={ServiceStyle.CardParent}>
         <div className={ServiceStyle.CardHeading} >
             <img src="/services/backend.png" alt="Title" className={ServiceStyle.CardImage} />
             <h3 className={ServiceStyle.Title}>Backend-as-a-Service</h3>
             <p className={ServiceStyle.CardContent}>All in one platform for your web or mobile development requirements including data and DB management, API integration, deployment, security and push notifications.</p>
         </div>
        </div>
        <div className={ServiceStyle.CardParent}>
         <div className={ServiceStyle.CardHeading} >
             <img src="/services/backend.png" alt="Title" className={ServiceStyle.CardImage} />
             <h3 className={ServiceStyle.Title}>Backend-as-a-Service</h3>
             <p className={ServiceStyle.CardContent}>All in one platform for your web or mobile development requirements including data and DB management, API integration, deployment, security and push notifications.</p>
         </div>
        </div>
        
     </div>
    </div>
  )
}

export default services