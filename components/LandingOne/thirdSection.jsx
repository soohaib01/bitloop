import Styles from '../../styles/Landing/Third.module.css'

const thirdSection = () => {
  return (
    <div>
        <div className={Styles.Container}>
         <div className={Styles.InnerContainer}>
          <div className={Styles.Heading}>
       <h2>   SCALABLE. EXTENDABLE. POWERFUL. FLEXIBLE. FAST​.​</h2>
<p>Make any database realtime, create APIs in seconds,
deploy them in milliseconds.​</p>
      <div className={Styles.ServicesContainer}>
          <div className={Styles.FirstLayer}>
              <ul>
                  <li><div className={Styles.Icon}><img src="/faqsvg.png" alt="" className={Styles.Icon}/></div></li>
                  <li><div className={Styles.HeadingService}><h3>Database​</h3></div></li>
                  <li><div className={Styles.Content}>
                      <p className={Styles.ContentP}>Access any database in real time. Store, query and manage data​.</p>
</div></li>
              </ul>
          </div>
          <div className={Styles.FirstLayer} id={Styles.MiddleLayer}>
              <ul>
                  <li><div className={Styles.Icon}><img src="/faqsvg.png" alt="" className={Styles.Icon}/></div></li>
                  <li><div className={Styles.HeadingService}><h3>Authentication​</h3></div></li>
                  <li><div className={Styles.Content}><p className={Styles.ContentP}>Authenticate & authorize users with various signin options​</p></div></li>
              </ul>
          </div>
          <div className={Styles.FirstLayer}>
              <ul>
                  <li><div className={Styles.Icon}><img src="/faqsvg.png" alt="" className={Styles.Icon}/></div></li>
                  <li><div className={Styles.HeadingService}><h3>Visual programming​</h3></div></li>
                  <li><div className={Styles.Content}><p className={Styles.ContentP}>Design (drag & drop) code via workflows (think serverless functions but 10x better) ​</p></div></li>
              </ul>
          </div>
          <div className={Styles.FirstLayer}>
              <ul>
                  <li><div className={Styles.Icon}><img src="/faqsvg.png" alt="" className={Styles.Icon}/></div></li>
                  <li><div className={Styles.HeadingService}><h3>Microservice Orchestration​</h3></div></li>
                  <li><div className={Styles.Content}><p className={Styles.ContentP}>Orchestrate microservices & workflows to build highly reliable distributed applications ​

​</p></div></li>
              </ul>
          </div>
      </div>
      <div className={Styles.ServicesContainer}>
          <div className={Styles.FirstLayer}>
              <ul>
                  <li><div className={Styles.Icon}><img src="/faqsvg.png" alt="" className={Styles.Icon}/></div></li>
                  <li><div className={Styles.HeadingService}><h3>Faster coding​</h3></div></li>
                  <li><div className={Styles.Content}><p className={Styles.ContentP}>Applications that are maintainable, versionable, testable, and collaborative​</p></div></li>
              </ul>
          </div>
          <div className={Styles.FirstLayer} id={Styles.MiddleLayer}>
              <ul>
                  <li><div className={Styles.Icon}><img src="/faqsvg.png" alt="" className={Styles.Icon}/></div></li>
                  <li><div className={Styles.HeadingService}><h3>Picoservices​</h3></div></li>
                  <li><div className={Styles.Content}><p className={Styles.ContentP}>
                  No creativity limitation. Simply write the code you need, containerize it and upload it for execution.​</p></div></li>
              </ul>
          </div>
          <div className={Styles.FirstLayer}>
              <ul>
                  <li><div className={Styles.Icon}><img src="/faqsvg.png" alt="" className={Styles.Icon}/></div></li>
                  <li><div className={Styles.HeadingService}><h3>Language Agnostic​</h3></div></li>
                  <li><div className={Styles.Content}><p className={Styles.ContentP}>Need to write code? Use any language you want, or connect any library you need. 100% flexibility​.</p></div></li>
              </ul>
          </div>
          <div className={Styles.FirstLayer}>
              <ul>
                  <li><div className={Styles.Icon}><img src="/faqsvg.png" alt="" className={Styles.Icon}/></div></li>
                  <li><div className={Styles.HeadingService}><h3>Actionable insights​</h3></div></li>
                  <li><div className={Styles.Content}><p className={Styles.ContentP}>Analyze your applications’ performance in production. Pinpoint issues and correlations across your microservices and workflows​ks.</p></div></li>
              </ul>
          </div>
      </div>

          </div>
         </div>
        </div>
    </div>
  )
}

export default thirdSection