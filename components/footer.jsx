import Styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Copyright from '../components/Home/copyright'

const footer = () => {
  return (
    <div>
    {/* Code Started */}
    <div className={Styles.footermains}>
<div className={Styles.footerboxwrap}>
<div className={`${Styles.wrapleft} ${Styles.infofotter}`}>
<img src="https://global-uploads.webflow.com/6183aca39d7d1eea0ba31f1f/6184bd8f4ed3b9dc15f317de_bitloops-logo_320x80.png" alt='Social Icon'/>
<div className={Styles.socilicos}>
<ul>
<li>
  <a href="https://bitloops-community.slack.com/">
  <img src="/Social/slackico.png" alt='Social Icon'/>
  </a>
  </li>
<li><a href="https://www.linkedin.com/company/bitloops">
  <img src="/Social/linkedico.png" alt='Social Icon'/>
  </a></li>

<li><a href="https://github.com/bitloops/bitloops">
  <img src="/Social/github.png" alt='Social Icon'/></a>
  </li>

<li><a href="https://www.facebook.com/bitloops">
  <img src="/Social/fbico.png" alt='Social Icon'/>
  </a></li>
<li><a href="https://twitter.com/thebitloops">
  <img src="/Social/twitterico.png"  alt='Social Icon'/></a></li>
</ul>
<p className={Styles.fooline}>Free to Use - Open Source</p>
</div>
</div>
<div className={Styles.wrapright}>



<div className={Styles.emailletterbox}>



<h2>Stay in the loop! Bitloops has only just launched!</h2>
<p>We aim to launch several cool features over the next few months, including a managed cloud service. Subscribe to get updated first.</p>
<div className={Styles.formval}>
<input className={Styles.fieldsx} type="email" name="email" placeholder='Enter Email' />
  <input className={Styles.buttonsx} type="submit" name="submit" />
</div>
</div>



<div className={Styles.footerbox}>
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">Community</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Contact Us</a></li>
</ul>
</div>




</div>
</div>
<div className={Styles.copyrightwrap}>
Copyright © Bitloops All Rights Reserved.
</div>
</div>
    </div>

  )
}

export default footer