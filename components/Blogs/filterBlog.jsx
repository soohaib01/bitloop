import Styles from '../../styles/Blogs/Filter.module.css'
import { useState } from 'react'

const filterBlog = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [btnClick,setBtnCLick] = useState(false);
    function HandleClick(){
        setBtnCLick(!btnClick);
    }
  return (
   
    <div>
        <div className={Styles.Container}>
            <div style={Styles.InnerContainer}>
          <table className={Styles.Table} style={{
              overflow:'scroll',
      
          }}>
             <td><button className={Styles.BtnFilter} onClick={HandleClick} style={{
                 background: btnClick ? 'black' : 'white',
                 color: btnClick ? 'white' : 'black',
             }}>All</button></td>
             <td><button className={Styles.BtnFilter}>Launch</button></td>
             <td><button className={Styles.BtnFilter}>bitloop</button></td>
             <td><button className={Styles.BtnFilter}>React</button></td>
             <td><button className={Styles.BtnFilter}>Nodejs</button></td>
             <td><button className={Styles.BtnFilter}>N</button></td>
             <td><button className={Styles.BtnFilter}>Nodejs</button></td>
             <td><button className={Styles.BtnFilter}>Native</button></td>
             <td><button className={Styles.BtnFilter}>Express</button></td>
             <td><button className={Styles.BtnFilter}>MongoDB</button></td>
             <td><button className={Styles.BtnFilter}>Objects</button></td>
             <td><button className={Styles.BtnFilter}>Bitloops</button></td>
             <td><button className={Styles.BtnFilter}>Bitloops</button></td>
             <td><button className={Styles.BtnFilter}>Bitloops</button></td>
          

          
 
          </table>
            </div>
        </div>
    </div>
  )
}

export default filterBlog