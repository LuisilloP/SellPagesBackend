/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './config/dotenv'//
import httpServer from './config/http'
import { conect } from './config/conect'
// const app = express()
// app.use(express.json())
// const PORT = 3000
// app.get('/test', (_req, res) => {
//   console.log('test ping')
//   res.send('ok')
// })
// app.listen(PORT, () => {
//   console.log('ok server')
// })
const startUp = () => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    httpServer.listen(process.env.API_PORT, () => {
      // conect.getConnection()
      const result = conect.query('SELECT * FROM USERS')
      result.catch((error) => { console.log(error) })
    })
  } catch (error) {
    console.log(error)
  }
}
startUp()
