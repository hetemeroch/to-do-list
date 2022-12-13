const {Router} = require('express')
const taskModel = require('../modules/schtask')

const router = Router()
router.put("/updatetask", async (req, res) => {
    const taskelement = req.body
    //console.log(taskelement)
    //console.log(taskid)

    try {
        let taskexist = await taskModel.findOne({_id:taskelement._id})
        
        if(taskexist) //si l'objet existe alors on procède àla mise à jour
        {
            const update = await taskModel.updateOne({_id:taskelement._id}, {$set:{name:taskelement.name}})
                res.send(taskelement) 
                console.log("task update ok")
        }
        else {
            res.send("Erreur, soit l'élément a été psupprimé .... !")
        }
    } catch (error) {
        
    }
})

module.exports = router