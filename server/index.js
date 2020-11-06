import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

import postRoutes from './routes/posts.js '

const CONNECTION_URL = 'mongodb+srv://greenwizzy:greenwizzy@cluster0.mxafa.mongodb.net/<dbname>?retryWrites=true&w=majority'
const app = express()
const PORT = process.env.PORT || 5000


app.use('/posts', postRoutes)
mongoose.set('useFindAndModify', false)
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())
app.get('/', (req,res) => {
    res.send('Hello')
})

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`server started at port ${PORT}`)))
    .catch((error)=> console.log(error.message))
