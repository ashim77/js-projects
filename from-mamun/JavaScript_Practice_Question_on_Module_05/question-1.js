"use strict";

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(email)) {
    return "Email address accepted.";
  } else {
    throw new Error("Invalid email address");
  }
}
    
console.log(validateEmail("invalid-email"));


