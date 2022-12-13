const {Router} = require('express');
const router = Router();
const utilisateurModel = require('../modules/schregister');

router.post("/identification", async (req, res) => {
    const login = req.body
try {
    console.log(login)
    let resultlogin = await utilisateurModel.findOne({username:login.username,password:login.password})
    if(resultlogin) {
        res.send(resultlogin)
        console.log("authentification à reussi")
    } else {
        res.send("Identifiant ou mot de passe incorrect !")
        console.log("failed")
    }
}
catch(err){console.log(err.message)}
})

module.exports = router