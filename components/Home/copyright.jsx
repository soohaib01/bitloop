import CopyrightStyle from '../../styles/Copyright.module.css'

const copyright = () => {
    const date = new Date().getFullYear()
  return (
    
    <div>
        <div className={CopyrightStyle.Container}>
            <div className={CopyrightStyle.YearHeading}>
                <h3><span>&copy;</span>{date}</h3>
                <img src="/logo.png" alt="" className={CopyrightStyle.FooterLogo}/>
            </div>
        </div>
    </div>
  )
}

export default copyright