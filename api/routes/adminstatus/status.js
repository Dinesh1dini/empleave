import express from "express";

import {
  
    getallempLeave,
    getallempPending,
    getallempApproved,
    getallempRejected,
    updateLeave,
    allleavestatus,
    oneleavestatus,

    empcount,
    countleavestatus,

   
}  from "../../controllers/AdminleaveStatus/allleavestatus.js";


import { verifyAdmin } from "../../utils/verifyToken.js";


const router = express.Router();


//CREATE
router.get("/", verifyAdmin, getallempLeave);

router.get("/leaves",  allleavestatus);


router.get("/oneleaves/:id",  oneleavestatus);



router.get("/pending",  getallempPending);
router.get("/approved",  getallempApproved);
router.get("/rejected",  getallempRejected);

router.put("/find/:id",  updateLeave);


router.get("/countemp",  empcount);


router.get("/countleavestatus",  countleavestatus);







//UPDATE
//router.put("/:id", verifyAdmin, updateDepartment);
//DELETE
//router.delete("/:id", verifyAdmin, deleteDepartment);
//GET


//router.get("/countByCity", countByCity);



export default router;
