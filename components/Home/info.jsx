import InfoStyle from '../../styles/Info.module.css'

const info = () => {
  return (
    <div className={InfoStyle.ParentSection}>
        <div className={InfoStyle.TopHeading}>
         <h1 className={InfoStyle.SecondHeading}>Why Bitloops ?</h1>
        </div>
        <div className={InfoStyle.SectionOne}>
        <div className={InfoStyle.Content}>
     <span className={InfoStyle.Count}>01</span>
     <h1 className={InfoStyle.Heading}>Performance</h1>
     <p className={InfoStyle.ContentBelow}>Intuitive and easy to use interface has been developed by Developers for Developers</p>
     </div>
     <div className={InfoStyle.Content}>
     <span className={InfoStyle.Count}>02</span>
     <h1 className={InfoStyle.Heading}>Ease of Use</h1>
     <p className={InfoStyle.ContentBelow}>Intuitive and easy to use interface has been developed by Developers for Developers</p>
     </div>
     <div className={InfoStyle.Content}>
     <span className={InfoStyle.Count}>03</span>
     <h1 className={InfoStyle.Heading}>Scalable & Extendable</h1>
     <p className={InfoStyle.ContentBelow}>Scalable & extendable platform for all your development needs irrespective of your size.</p>
     </div>
     <div className={InfoStyle.Content}>
     <span className={InfoStyle.Count}>04</span>
     <h1 className={InfoStyle.Heading}>Value for Money</h1>
     <p className={InfoStyle.ContentBelow}>Pay-as-you-go and only  if your workflows are running instances (if Bitloops adds value</p>
     </div>
     <div className={InfoStyle.Content}>
     <span className={InfoStyle.Count}>05</span>
     <h1 className={InfoStyle.Heading}>Open-Source</h1>
     <p className={InfoStyle.ContentBelow}>No technology lock-in. Migrate easily in the future if we no longer server your needs</p>
     </div>
        </div>
 
    </div>
  )
}

export default info