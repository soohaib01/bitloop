import FooterStyle from '../styles/Footer.module.css'
import Link from 'next/link'
import Copyright from '../components/Home/copyright'

const footer = () => {
  return (
    <div>
     <div className={FooterStyle.footermains}>
<div className={FooterStyle.footerboxwrap}>
<div className={`${FooterStyle.wrapleft} ${FooterStyle.infofotter}`}>
<img src="/logo.png" />
<div className={FooterStyle.socilicos}>
<ul>
	<li><img src="/fbico.png" /></li>
	<li><img src="twitterico.png" /></li>
	<li><img src="/instaico.png" /></li>

</ul>
<div>
  <p className={FooterStyle.OpenSource}>Free To Use - Open Source</p>
  </div>
</div>
	</div>
  
<div className={FooterStyle.wrapright}>
<div className={FooterStyle.footerbox}>
	<h2>Bitloops</h2>
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">React Backend</a></li>
		<li><a href="#">Github</a></li>
	</ul>
</div>
<div className={FooterStyle.footerbox}>
	<h2>Bitloops</h2>
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">React Backend</a></li>
		<li><a href="#">Github</a></li>
		<li><a href="#">React backend</a></li>
		<li><a href="#">Service As Tool</a></li>
		<li><a href="#">Deploy</a></li>
	</ul>
</div>
<div className={FooterStyle.footerbox}>
	<h2>Bitloops</h2>
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">React Backend</a></li>
		<li><a href="#">Github</a></li>
	</ul>
</div>
	</div>
</div>
<div className={FooterStyle.copyrightwrap}>
	Copyright © Bitloops All Rights Reserved.
</div>
</div>
    </div>

  )
}

export default footer