import express from "express";
import { testController } from "../controller/app.controller.js";
// create router
const router = express.Router();

// define routes
router.route("/test").get(testController);

export default router;
