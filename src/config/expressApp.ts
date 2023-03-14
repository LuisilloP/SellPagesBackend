import pageRouter from '../routes/pages'

import express from 'express'

import cors from 'cors'
const expressApp = express()
expressApp.use(cors())

expressApp.use(express.json())

expressApp.use('/pages', pageRouter)

export default expressApp
