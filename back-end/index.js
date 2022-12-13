const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const registerRouter = require('./routeapi/apiregister');
const taskRouter = require('./routeapi/taskapi')
const listTaskRouter = require('./routeapi/apilistetask')
const taskdellRouter = require('./routeapi/apideletetask')
const taskupdateRouter = require('./routeapi/apiupdatetask')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost/test", () => console.log("connected"))
const port = 13000
app.listen(port, () => console.log("app is running on port 13000"))

app.use(registerRouter)
app.use(taskRouter)
app.use(listTaskRouter)
app.use(taskdellRouter)
app.use(taskupdateRouter)