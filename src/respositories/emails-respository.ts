import { prisma } from "../lib/prisma.js";

async function getEmails() {
  return prisma.email.findMany();
}

async function postEmails(email: string) {
  return prisma.email.create({
    data: { email },
  });
}

async function getEmailById(id: number) {
  return prisma.email.findUnique({ where: { id } });
}

export { getEmails, postEmails, getEmailById };
