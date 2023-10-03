export const isValidDataContacts = (name, phone, email) => {
  // name
  if (name.trim().length < 2) {
    return false;
  }

  // phone
  if (isNaN(Number(phone))) {
    return false;
  }

  // email
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) {
    return false;
  }

  // todo ok
  return true;
};
