const {Router} = require('express');
const router = Router();
const taskModel = require('../modules/schtask');

    /* récuoération liste des tâches */
    router.get("/getTask/:userid", async(req, res) => {
        const userid = req.params.userid
try {
    const list_task = await taskModel.find({users:userid})
        res.send(list_task)
        console.log(list_task)
        
    
} catch (error) {
    console.log(error.message)
}
        
    })  

    module.exports = router