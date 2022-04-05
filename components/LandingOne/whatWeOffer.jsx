import Styles from '../../styles/Landing/Offer.module.css'

const whatWeOffer = () => {
  return (
    <div>
     <div className={Styles.Container}>
         <div className={Styles.InnerContainer}>
            <div className={Styles.Heading}>
                <h1>What We Are Working On ?</h1>
            </div>
          <div className={Styles.Boxes}>
          <div className={Styles.MainBox}>
              <ul className={Styles.TransformMain}>

          <li className={Styles.Transform}>Integration With</li>
              </ul>
                <ul className={Styles.MainWord}>
                    <li><del style={{color:'#fff',fontWeight:'bold'}}>Option One</del></li>
                    <li>Connectors library</li>
                    <li>Option One</li>   
                </ul>
            </div>
            <div className={Styles.MainBox}>
              <ul className={Styles.TransformMain}>

          <li className={Styles.Transform}>Integration  BitLoop</li>
              </ul>
                <ul className={Styles.MainWord}>
                    <li><del style={{color:'#fff' ,fontWeight:'bold'}}>Option One</del></li>
                    <li>Option One</li>
                    <li>Option One</li>   
                </ul>
            </div>
            <div className={Styles.MainBox}>
              <ul className={Styles.TransformMain}>

          <li className={Styles.Transform}>Integration Open</li>
              </ul>
                <ul className={Styles.MainWord}>
                    <li><del style={{color:'#fff' ,fontWeight:'bold'}}>Option One</del></li>
                    <li>Option One</li>
                    <li>Option One</li>   
                </ul>
            </div>
            <div className={Styles.MainBox}>
              <ul className={Styles.TransformMain}>

          <li className={Styles.Transform}>Integration Source</li>
              </ul>
                <ul className={Styles.MainWord}>
                    <li><del style={{color:'#fff',fontWeight:'bold'}}>Option One</del></li>
                    <li>Option One</li>
                    <li>Option One</li>   
                </ul>
            </div>
          </div>
          <div className={Styles.Boxes} style={{marginTop:'3rem'}} id={Styles.HideInPhone}>
          <div className={Styles.MainBox}>
              <ul className={Styles.TransformMain}>

          <li className={Styles.Transform}>Integration With </li>
              </ul>
                <ul className={Styles.MainWord}>
                    <li><del style={{color:'#fff',fontWeight:'bold'}}>Option One</del></li>
                    <li>Connectors library</li>
                    <li>Option One</li>   
                </ul>
            </div>
            <div className={Styles.MainBox}>
              <ul className={Styles.TransformMain}>

          <li className={Styles.Transform}>Integration Bitloop</li>
              </ul>
                <ul className={Styles.MainWord}>
                    <li><del style={{color:'#fff',fontWeight:'bold'}}>Option One</del></li>
                    <li>Option One</li>
                    <li>Option One</li>   
                </ul>
            </div>
            <div className={Styles.MainBox}>
              <ul className={Styles.TransformMain}>

          <li className={Styles.Transform}>Integration Open</li>
              </ul>
                <ul className={Styles.MainWord}>
                    <li><del style={{color:'#fff',fontWeight:'bold'}}>Option One</del></li>
                    <li>Option One</li>
                    <li>Option One</li>   
                </ul>
            </div>
            <div className={Styles.MainBox}>
              <ul className={Styles.TransformMain}>

          <li className={Styles.Transform}>Integration Source</li>
              </ul>
                <ul className={Styles.MainWord}>
                    <li><del style={{color:'#fff',fontWeight:'bold'}}>Option One</del></li>
                    <li>Option One</li>
                    <li>Option One</li>   
                </ul>
            </div>
          </div>
         </div>
     </div>
    </div>
  )
}

export default whatWeOffer