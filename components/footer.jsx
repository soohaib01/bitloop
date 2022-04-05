import FooterStyle from '../styles/Footer.module.css'
import Link from 'next/link'
import Copyright from '../components/Home/copyright'

const footer = () => {
  return (
    <div>
    {/* Code Started */}
	<div className={FooterStyle.footermains}>
<div className={FooterStyle.footerboxwrap}>



<div className={`${FooterStyle.wrapleft} ${FooterStyle.infofotter}`}>
<div className={FooterStyle.copyrightwrap}>
Copyright © Bitloops All Rights Reserved.
</div>



</div>




<div className={FooterStyle.wrapright}>
<div className={FooterStyle.footerbox}>
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">React Backned</a></li>
<li><a href="#">Github</a></li>
</ul>
</div>





</div>



</div>





</div>
    </div>

  )
}

export default footer