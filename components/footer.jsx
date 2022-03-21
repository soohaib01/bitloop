import FooterStyle from '../styles/Footer.module.css'
import Link from 'next/link'
import Copyright from '../components/Home/copyright'

const footer = () => {
  return (
    <div>
      <div className={FooterStyle.FooterContainer}>
       <div className={FooterStyle.Listings}>
<ul>
  <li className={FooterStyle.Heading}>Why BitLoops</li>
  <li><Link href="/">Open Source</Link></li>
  <li><Link href="/">No Fear</Link></li>
  <li><Link href="/">Helps You</Link></li>
  <li><Link href="/">Helps You</Link></li>
  <li><Link href="/">Helps You</Link></li>

</ul>
<ul>
  <li className={FooterStyle.Heading}>Why BitLoops</li>
  <li><Link href="/">Open Source</Link></li>
  <li><Link href="/">No Fear</Link></li>
  <li><Link href="/">Helps You</Link></li>
  <li><Link href="/">Helps You</Link></li>
  <li><Link href="/">Helps You</Link></li>

</ul>
<ul>
  <li className={FooterStyle.Heading}>Why BitLoops</li>
  <li><Link href="/">Open Source</Link></li>
  <li><Link href="/">No Fear</Link></li>
  <li><Link href="/">Helps You</Link></li>
  <li><Link href="/">Helps You</Link></li>
  <li><Link href="/">Helps You</Link></li>

</ul>
<ul>
  <li className={FooterStyle.Heading}>Why BitLoops</li>
  <li><Link href="/">Open Source</Link></li>
  <li><Link href="/">No Fear</Link></li>
  <li><Link href="/">Helps You</Link></li>
  <li><Link href="/">Helps You</Link></li>
  <li><Link href="/">Helps You</Link></li>

</ul>
       </div>
      </div>

      {/* <Copyright/> */}
    </div>

  )
}

export default footer