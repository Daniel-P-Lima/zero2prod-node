import { Router } from "express";
import { getEmails, postEmails } from "../controllers/emails-controller.js";

const emailsRouter = Router();

emailsRouter.get("/", getEmails);
emailsRouter.post("/", postEmails);

export default emailsRouter;
