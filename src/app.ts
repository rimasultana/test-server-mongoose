import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from './app/modules/user/user.route'
const app: Application = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


// routes 
app.use("/api/user", router)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app