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
            <img className={Styles.logofooter} src="https://global-uploads.webflow.com/6183aca39d7d1eea0ba31f1f/6184bd8f4ed3b9dc15f317de_bitloops-logo_320x80.png" alt='hello' />
            <div className={Styles.socilicos}>
              <ul>
                <li><a href="https://bitloops-community.slack.com/">
                  <img src="/Social/slackico.png" alt="Hello" /></a></li>
                <li><a href="https://www.linkedin.com/company/bitloops">
                  <img src="Social/linkedico.png" alt="Hello" /></a></li>

                <li><a href="https://github.com/bitloops/bitloops">
                  <img src="/Social/github.png" alt="Hello" /></a></li>

                <li><a href="https://www.facebook.com/bitloops">
                  <img src="/Social/fbico.png" alt="Hello" /></a></li>
                <li><a href="https://twitter.com/thebitloops">
                  <img src="/Social/twitterico.png" alt="Hello" /></a></li>
              </ul>
            </div>
          </div>
          <div className={Styles.wrapright}>





            <div className={Styles.footerbox}>
              <ul>
                <li>
                  <Link href="/">

                    <a>Home</a>
                  </Link>
                </li>

                <li>
                  <Link href="/community">

                    <a>Community</a>
                  </Link>

                </li>
                <li>
                  <Link href="about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="contact">
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
              <div className={Styles.ContainFooter}>

              <p className={Styles.fooline}>Free to Use - Open Source</p>
              </div>



            </div>




          </div>
        </div>
        <div className={Styles.copyrightwrap}>
          Copyright © Bitloops All Rights Reserved.
        </div>
      </div>
      {/* Code Enede with */}
    </div>

  )
}

export default footer