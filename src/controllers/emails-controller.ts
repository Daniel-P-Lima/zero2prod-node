import { Request, Response } from "express";
import {
  getEmailById,
  getEmails,
  postEmails,
} from "../respositories/emails-respository.js";

function httpGetEmails(req: Request, res: Response) {
  return res.json(getEmails());
}

function httpGetEmailById(req: Request, res: Response) {
  return res.json(getEmailById(req.params.id));
}

function httpPostEmail(req: Request, res: Response) {
  const emails = postEmails(String(req.body.email));
  return emails ? res.status(201).json(emails) : res.status(404).json(emails);
}
export { httpGetEmails, httpGetEmailById, httpPostEmail };
