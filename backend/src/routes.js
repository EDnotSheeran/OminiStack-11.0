const { Router } = require('express')

const SessionConstroller = require('./controller/SessionController')
const OngsController = require('./controller/OngsController')
const IncidentController = require('./controller/IncidentController')
const ProfileController = require('./controller/ProfileController')

const routes = Router()

routes.get('/',(req,res)=>{
    return res.send('hello world')
})

routes.post('/sessions', SessionConstroller.create)

routes.get('/ongs', OngsController.list)
routes.post('/ongs', OngsController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.list)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id',IncidentController.delete)

module.exports = routes