const emails = [
  {
    id: 1,
    email: "test@email.com",
  },
];

function getEmails() {
  return emails;
}

function postEmails(email: string) {
    if (email.length > 0) {
      const id = Math.random();
      const emailObject = {
        id,
        email
      }
      emails.push(emailObject);
    }

    return emails;
}

function getEmailById(id: Number) {
  const emailObject = emails.find((element) => id == element.id)
  return emailObject ? emailObject : null;
}
  
export {
  getEmails, postEmails, getEmailById
};
