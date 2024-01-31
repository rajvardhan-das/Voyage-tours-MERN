import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router()

router.post("/",createTour, verifyAdmin)
router.put("/:id",updateTour, verifyAdmin)
router.delete("/:id",deleteTour, verifyAdmin)
router.get("/:id",getSingleTour)
router.get("/",getAllTour)
router.get("/search/getTourBySearch",getTourBySearch)
router.get("/search/getFeaturedTours",getFeaturedTour)
router.get("/search/getTourCount",getTourCount)
export default router