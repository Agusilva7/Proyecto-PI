const {Router}=require("express")
const postVideoGamesHandler=require("../handlers/postVideoGamesHandler")

const router=Router();

router.post("/videogames",postVideoGamesHandler)

module.exports=router;