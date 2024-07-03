export const validation = (email, password) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!emailPattern) {
    return "Not a valid Email";
  }
  if (!passwordPattern) {
    return "Not a valid password";
  }

  if (emailPattern && passwordPattern) {
    return null;
  }
};
