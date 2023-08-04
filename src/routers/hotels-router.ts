import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { createHotel, getHotels, getHotelsWithRooms } from "@/controllers";

const hotelsRouter = Router();

hotelsRouter
  .get("/", authenticateToken, getHotels)
  .get("/:hotelId", authenticateToken, getHotelsWithRooms)
  .post("/", createHotel);
export { hotelsRouter };
