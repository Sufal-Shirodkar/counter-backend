const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
const ConfigDB = require('./config/db')
const CounterCtrl=require('./controllers/counter-controller')
app.post('/api/counters',CounterCtrl.create)
app.get('/api/counters',CounterCtrl.list)
app.put('/api/counters/:id',CounterCtrl.update)
app.delete('/api/counters/:id',CounterCtrl.destroy)

app.use(express.json())
ConfigDB()

app.listen(3050,()=>{
    console.log('server is running on port 3050')
})