const emails = [
  {
    id: "8df42770-ae5d-44f4-8443-30fa015645ef",
    email: "test@email.com",
  },
];

function getEmails() {
  return emails;
}

function postEmails(email: string) {
  if (email.length > 0) {
    const id = crypto.randomUUID();
    const emailObject = {
      id: id,
      email: email,
    };
    emails.push(emailObject);
    return emailObject;
  } else {
    return null;
  }
}

function getEmailById(id: string) {
  const emailObject = emails.find((element) => id == element.id);
  return emailObject ? emailObject : null;
}

export { getEmails, postEmails, getEmailById };
