import { Router } from "express";
import {
  httpGetEmailById,
  httpGetEmails,
  httpPostEmail,
} from "../controllers/emails-controller.js";

const emailsRouter = Router();

emailsRouter.get("/", httpGetEmails);
emailsRouter.get("/:id", httpGetEmailById);
emailsRouter.post("/", httpPostEmail);

export default emailsRouter;
