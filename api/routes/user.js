
import express from "express";
import {createError} from "../utils/error.js"
import {verifyToken} from "../utils/verifyToken.js"
import {updateUser} from "../controller/user.js"
import {deleteUser} from "../controller/user.js"
import {getUserByID} from "../controller/user.js"
import {getUsers} from "../controller/user.js"

const router=express.Router();

//router.get("/",(req,res)=>{
  //  res.send("this is user end point");
//})

 router.get("/checkauthentication", verifyToken, (req,res,next)=>{
   res.send("hello user, you are logged in")
 })
    
    // router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
    //   res.send("hello user, you are logged in and you can delete your account")
    // })
    
    // router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
    //   res.send("hello admin, you are logged in and you can delete all accounts")
    // })

//Update
router.put("/:id",updateUser);

//Delete
router.delete("/:id",deleteUser);

//Get
router.get("/:id",getUserByID);

//Get All
router.get("/",getUsers);

export default router