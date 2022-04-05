
import Styles from '../../styles/Landing/Table.module.css'

const Table = () => {
  return (
    <div>
      <div className={Styles.Container}>

        <div className={Styles.InnerContainer}>

          <h1>Bitloops Key Differences</h1>
          <table className={Styles.TableHead}>
            <th className={Styles.FirstChildHead}>Criteria</th>
            <th>Bitloops Serverless Function</th>
            <th>Firebase Cloud function</th>
            <th>AWS Lambda Function</th>
            <tr>
              <td>Versioning​</td>
              <td> </td>
              <td> </td>
              <td> </td>
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