// 2. Create a JavaScript function that generates a random password with a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

// Character Set:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()"

//     Example:
//     Input: generateRandomPassword(8);
//     Output: “Pas@word”

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()";
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
  }
  
  const generatedPassword = generateRandomPassword(8);
  console.log("Generated password:", generatedPassword);  
