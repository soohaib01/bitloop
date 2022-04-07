import Styles from '../../styles/Community/Join.module.css'



const Join = () => {
  return (
    <div>
        <div className={Styles.Container}>
         <div className={Styles.InnerContainer}>
            <div className={Styles.Content}>
                <h1>Join the Party</h1>
                <p>Check some of our open issues, any contribution counts!</p>
            </div>
         </div>
         <div className={Styles.TableContainer}>
             <table className={Styles.MainBox}>
                 <th className={Styles.One}>#</th>
                 <th className={Styles.Two}>Title</th>
                 <tr>
                     <td>#656</td>
                     <td><span style={{color:'blue'}}>[FEATURE] File Tokens </span>
                     <br></br>
                     <button className={Styles.BtnOne}>Feature</button>
                     <button className={Styles.BtnOne} style={{marginLeft:'2rem',background:'#1bbf61'}}>Feature</button>
                     <button className={Styles.BtnOne} style={{marginLeft:'2rem',background:'#cccc',color:'black'}}>Feature</button>
                     </td>
                 </tr>
                 <tr>
                     <td>#656</td>
                     <td><span style={{color:'blue'}}>[FEATURE] File Tokens </span>
                     <br></br>
                     <button className={Styles.BtnOne}>Feature</button>
                     <button className={Styles.BtnOne} style={{marginLeft:'2rem',background:'#1bbf61'}}>Feature</button>
                     <button className={Styles.BtnOne} style={{marginLeft:'2rem',background:'#cccc',color:'black'}}>Feature</button>
                     </td>
                 </tr>
                 <tr>
                     <td>#656</td>
                     <td><span style={{color:'blue'}}>[FEATURE] File Tokens </span>
                     <br></br>
                     <button className={Styles.BtnOne}>Feature</button>
                     <button className={Styles.BtnOne} style={{marginLeft:'2rem',background:'#1bbf61'}}>Feature</button>
                     <button className={Styles.BtnOne} style={{marginLeft:'2rem',background:'#cccc',color:'black'}}>Feature</button>
                     </td>
                 </tr>
             </table>
         </div>
        </div>
    </div>
  )
}

export default Join