const {Router}=require("express")
const videoGamesHandlerName=require("../handlers/videoGamesHandlerName")

const router = Router();
router.get("/videogames/name?",videoGamesHandlerName)


module.exports = router;
