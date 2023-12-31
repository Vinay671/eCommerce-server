import express from "express";
import { categoryConroller, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";
import {isAdmin, requireSignIn} from './../middlewares/authMiddleware.js';

const router = express.Router()

//routes
//create category
router.post("/create-category",requireSignIn,isAdmin,createCategoryController) 

//update category
router.put("/update-category/:id",requireSignIn,isAdmin,updateCategoryController)

//get all category
router.get('/get-category',categoryConroller)

//get single category
router.get("/single-category/:slug",singleCategoryController)

//delete category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)

export default router