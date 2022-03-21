import Styles from '../../styles/Revamp/Community.module.css'

const Community = () => {
  return (
    <div className={Styles.Main}>
      <div className={Styles.Heading}>
     <h1 className={Styles.HeadingAc}>Join Our Growing Community</h1>
      </div>
      <div className={Styles.Boxes}>
        <div className={Styles.NestedBox}>
       <img src="/twitter.png" alt="" className={Styles.Icon} />
       <h3>Twitter.com/bitloop</h3>
       </div>
       <div className={Styles.NestedBox}>
       <img src="/discord.jpg" alt="" className={Styles.Icon} />
       <h3>Twitter.com/bitloop</h3>
       </div>
       <div className={Styles.NestedBox}>
       <img src="/github.jpg" alt="" className={Styles.Icon} />
       <h3>Twitter.com/bitloop</h3>
       </div>
      </div>
    </div>
  )
}

export default Community