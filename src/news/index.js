import express from "express";
import newsControler from "./controler";

const newsRouter = new express.Router();

newsRouter.get("/", newsControler.get);
newsRouter.get("/:id", newsControler.getById);
newsRouter.post("/", newsControler.post);
newsRouter.delete("/:id", newsControler.delete);
newsRouter.patch("/:id", newsControler.patch);

export default newsRouter;