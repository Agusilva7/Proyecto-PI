const {Router}=require("express")
const getGenresHandler=require("../handlers/getGenresHandler")
const router=Router()

router.get("/genres",getGenresHandler)

module.exports=router;