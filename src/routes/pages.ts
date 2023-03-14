/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { conect } from '../config/conect'
const RouterPage = Router()

RouterPage.get('/getuser', async (_req, res) => {
  const result = await conect.query('SELECT * FROM USERS ')
  res.send(result[0])
})
RouterPage.post('/', (_req, res) => {
  res.send('pages post')
})
export default RouterPage
