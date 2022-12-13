const {Router} = require('express')
const taskModel = require('../modules/schtask')

const router = Router()
router.delete("/deltask/:taskid", async (req, res) => {
    const taskid = req.params.taskid

    //console.log(taskid)

    try {
           let suppelement = await taskModel.findOne({_id:taskid})
           
          /* console.log("suppression de " + suppelement + "tache" )*/

           if(suppelement) {
               
                const dell = await taskModel.deleteOne({_id:taskid})
                res.send(taskid) /* je renvoie l'id supprimé au front pour filtrer la liste */
                console.log("task deleted")
               
           }


    } catch (error) {
        
    }
})

module.exports = router
