
import Styles from '../../styles/Landing/Table.module.css'

const Table = () => {
  return (
    <div>
      <div className={Styles.Container}>

        <div className={Styles.InnerContainer}>

          <h1 style={{marginBottom:"4rem",fontSize:'35px',fontWeight:'500'}}>Bitloops Key Differences</h1>
          <table className={Styles.TableHead} style={{marginTOp:"4rem"}}>
            <th className={Styles.FirstChildHead}>Criteria</th>
            <th><img src="/logo.png" alt="Bitloops Is Here"/></th>
            <th><img src="/firebase.png" alt="firebase Is Here"/></th>
            <th><img src="/amazon.png" alt="firebase Is Here"/></th>
            <tr className={Styles.FirstRow}>
              <td >Critieria</td>
              <td> Bitloops (Serverless functions)​</td>
              <td> Firebase (Cloud Functions)​</td>
              <td>AWS (lambda functions)​ </td>
            </tr>
            <tr>
              <td>
                Speed of development
              </td>
              <td>{/* Cell Will Remain Emp=ty For The Design Purposes */} </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>Error handling</td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>
                POP / Sub</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Cold Start</td>
              <td>005 secs</td>
              <td>0.5-2 secs</td>
              <td>
                -1 sec
              </td>
            </tr>
            <tr>
              <td>
                Configurability
              </td>
              <td>

              </td>
              <td>

              </td>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                Open source
              </td>
              <td>

              </td>
              <td>

              </td>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                Migration options
              </td>
              <td>

              </td>
              <td>

              </td>
              <td>

              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table