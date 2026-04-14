import { Router } from "express";
import { getEmailById, getEmails, postEmails } from "../controllers/emails-controller.js";

const emailsRouter = Router();

emailsRouter.get("/", getEmails);
emailsRouter.get("/:id", getEmailById)
emailsRouter.post("/", postEmails);

export default emailsRouter;
