import { Request, Response } from "express";
import {
  getEmailById,
  getEmails,
  postEmails,
} from "../respositories/emails-respository.js";

function httpGetEmails(req: Request, res: Response) {
  const emails = getEmails();
  return res.json(emails);
}

function httpGetEmailById(req: Request, res: Response) {
  const id = req.params.id;
  const email = getEmailById(id);
  return res.json(email);
}

function httpPostEmail(req: Request, res: Response) {
  const email = String(req.body.email);
  const emails = postEmails(email);
  console.log(emails);
  return emails ? res.status(201).json(emails) : res.status(404).json(emails);
}
export { httpGetEmails, httpGetEmailById, httpPostEmail };
