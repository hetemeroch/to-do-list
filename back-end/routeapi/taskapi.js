const {Router} = require('express');
const router = Router();
const taskModel = require('../modules/schtask');

router.post("/taskadd", async (req, res) => {
    const tasklist = req.body
    console.log(tasklist)
try {

    /*vérifie si la tache existe déjà */
    let verif = await taskModel.findOne({name:tasklist.name})

    if(verif) {
        res.send("La têche existe déjà !")
        console.log("La têche existe déjà !")
    }
    else {
    /* insertion de la nouvelle tache */
    let newtask = new taskModel(tasklist)
    let saved = await newtask.save()
    if(saved) {
        const add = await taskModel.findOne({name:tasklist.name})
        res.send(add)
        console.log("task inserted")
    }
    else 
    {
        res.send("Task not inserted")
        console.log("Task not inserted")
    }   

}
    

}
catch(err){console.log(err.message)}
})

module.exports = router
