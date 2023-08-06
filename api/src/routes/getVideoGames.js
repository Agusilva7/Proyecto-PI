const { Router } = require('express');
const videoGamesHandlers=require("../handlers/videoGamesHandler")
const router = Router();

router.get ("/videogames",videoGamesHandlers)


module.exports = router;