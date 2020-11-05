import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

const CONNECTION_URL = 'mongodb+srv://greenwizzy:greenwizzy@cluster0.mxafa.mongodb.net/<dbname>?retryWrites=true&w=majority'
const app = express()
const PORT = process.env.PORT || 5000



mongoose.set('useFindAndModify', false)
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())
app.get('/')

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`server started at port ${PORT}`)))
    .catch((error)=> console.log(error.message))
