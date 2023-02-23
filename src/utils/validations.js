export function validatemail(mail) {
    return email.includes("@");
}

export function validateUsername(username) {
    return validateUsernameTooShort(username) && validateUsernameTooLong(username);
}

export function validateUsernameTooShort(username) {
    return username.length >= 3;
}

export function  validateUsernameTooLong(username) {
    return username.length >=12;
}

export function  validatePassword(password) {
    return password.length >=6;
}

export function  validateConfirmPassword(password,confirmPassword) {
    return password == confirmPassword;
}

// Créer 4 fonctions qui retournent des chaînes de caractères pour les erreurs.
// getEMailError(email) =>"Email incorrect ! " ou ""