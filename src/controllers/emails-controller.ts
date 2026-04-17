import { Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client.js";
import {
  getEmailById,
  getEmails,
  postEmails,
} from "../respositories/emails-respository.js";

async function httpGetEmails(req: Request, res: Response) {
  return res.json(await getEmails());
}

async function httpGetEmailById(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid id" });

  const email = await getEmailById(id);
  return email
    ? res.json(email)
    : res.status(404).json({ error: "Email not found" });
}

async function httpPostEmail(req: Request, res: Response) {
  const { email } = req.body;

  if (!email || typeof email !== "string" || email.trim().length === 0) {
    return res.status(400).json({ error: "email is required" });
  }

  try {
    const created = await postEmails(email.trim());
    return res.status(201).json(created);
  } catch (err) {
    // Erro P2002(unique constraint) e retorna 409 conflict
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
      return res.status(409).json({ error: "Email already in use" });
    }
    throw err;
  }
}
export { httpGetEmails, httpGetEmailById, httpPostEmail };
