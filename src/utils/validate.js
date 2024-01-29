import React from "react";

const validate = (signIn, email, password, name) => {
  const IsEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  if (signIn) {
    if (!IsEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
  } else {
    if (!isNameValid) return "Name invalid";
    if (!IsEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
  }

  return null;
};

export { validate };
