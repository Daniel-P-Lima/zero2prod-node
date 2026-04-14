import { Request, Response } from "express";

const emails = [
  {
    id: 1,
    email: "test@email.com",
  },
];

function getEmails(req: Request, res: Response) {
  return res.json(emails);
}

function postEmails(req: Request, res: Response) {
  if (req.body) {
    if (req.body.email && req.body.email.length > 0) {
      const id = Math.random();
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

function getEmailById(req: Request, res: Response) {
  const emailObject = emails.find((element) => parseInt(req.params.id) == element.id)
  return emailObject ?  res.status(200).json(emailObject) : res.status(404).json({ "error": "Email not found"});
}
  
export {
  getEmails, postEmails, getEmailById
};
