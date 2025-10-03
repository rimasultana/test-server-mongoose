import express, { Application, Request, Response } from 'express'
import cors from "cors"
import morgan from "morgan"
const app: Application = express()
const port = 5000

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
