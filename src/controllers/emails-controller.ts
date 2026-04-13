import { Request, Response } from "express";

const emails = [
  {
    id: crypto.randomUUID(),
    email: "test@email.com",
  },
];

function getEmails(req: Request, res: Response) {
  return res.json(emails);
}

function postEmails(req: Request, res: Response) {
  if (req.body) {
    if (req.body.email && req.body.email.length > 0) {
      const id = crypto.randomUUID();
      const email = req.body.email;
      const emailObject = {
        id,
        email
      }
      emails.push(emailObject);
    }

    return res.status(200).json(emails);
  }
}
  
export {
  getEmails, postEmails
};
