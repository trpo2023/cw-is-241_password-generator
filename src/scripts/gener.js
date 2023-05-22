let Letters = [
    "a", "b", "c", "b", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
]; 
let Simbols = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "/", ",", ".", "{", "}", "[", "]", ":", ";", "~", "`", "?",
];

export function gen_pass(passwordLen, isNumber, isLowercase, isSpecial, isCapital) {
   
    let generatedPassword = "";
    let randik = 0;
  
    if (isNumber) {
        generatedPassword += Math.floor(Math.random() * 10);
        passwordLen--;
    } 
    
    if (isLowercase) {
        let amount;
        amount = Math.floor(Math.random() * 26);
        generatedPassword += Letters[amount];
        passwordLen--;
    } 
    
    if (isCapital) {
        let amount;
        amount = Math.floor(Math.random() * 26);
        generatedPassword += Letters[amount].toUpperCase();
        passwordLen--;
    } 

    if (isSpecial) {
        let amount;
        amount = Math.floor(Math.random() * 26);
        generatedPassword += Simbols[amount];
        passwordLen--;
    }
    let generatedPassword1 = generatedPassword;
    
    while (passwordLen > 0) {
        randik = Math.floor(Math.random() * 4 + 1);
        if (randik === 1) {
            if (isNumber) {
                generatedPassword += Math.floor(Math.random() * 10);
            } 
        }
        if (randik === 2) {
            if (isLowercase) {
                let amount;
                amount = Math.floor(Math.random() * 26);
                generatedPassword += Letters[amount];
            } 
        }
        if (randik === 3) {
            if (isCapital) {
                let amount;
                amount = Math.floor(Math.random() * 26);
                generatedPassword += Letters[amount].toUpperCase();
            } 
        }
        if (randik === 4) {
            if (isSpecial) {
                let amount;
                amount = Math.floor(Math.random() * 26);
                generatedPassword += Simbols[amount];
            } 
        }
        if (generatedPassword1 !== generatedPassword) {
            passwordLen--;
            generatedPassword1 = generatedPassword;
        }
    }
    return  generatedPassword;
};