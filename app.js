const express = require('express')
const morgan = require('morgan')
const app = express()


const PORT = process.env.PORT || 8080
app.use(express.json())
app.use(morgan('dev'))

app.use('/api', require('./app/routes'))


app.listen(PORT, () => {
    console.log(`API escuchando por el puerto ${PORT}...` )
})