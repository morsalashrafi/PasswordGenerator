document.addEventListener("DOMContentLoaded", function () {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolChars = "!@#$%^&*()_-+=<>?";
    const numberChars = "0123456789";

    const passwordLengthInput = document.getElementById("passwordLength");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const symbolsCheckbox = document.getElementById("symbols");
    const numbersCheckbox = document.getElementById("numbers");
    const spacesCheckbox = document.getElementById("spaces");
    const generateButton = document.getElementById("generate");
    const passwordTextarea = document.getElementById("password");

    generateButton.addEventListener("click", generatePassword);

    function generatePassword() {
        const passwordLength = parseInt(passwordLengthInput.value);
        const includeLowercase = lowercaseCheckbox.checked;
        const includeUppercase = uppercaseCheckbox.checked;
        const includeSymbols = symbolsCheckbox.checked;
        const includeNumbers = numbersCheckbox.checked;
        const includeSpaces = spacesCheckbox.checked;

        const selectedChars = [];
        if (includeLowercase) selectedChars.push(...lowercaseChars);
        if (includeUppercase) selectedChars.push(...uppercaseChars);
        if (includeSymbols) selectedChars.push(...symbolChars);
        if (includeNumbers) selectedChars.push(...numberChars);
        if (includeSpaces) selectedChars.push(" ");

        if (selectedChars.length === 0) {
            alert("Please select at least one character type.");
            return;
        }

        let password = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * selectedChars.length);
            password += selectedChars[randomIndex];
        }

        passwordTextarea.value = password;
    }
});


function copyPassword() {
    const passwordTextarea = document.getElementById("password");
    passwordTextarea.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}


document.addEventListener("DOMContentLoaded", function () {
    const passwordLengthInput = document.getElementById("passwordLength");
    const passwordCountSpan = document.getElementById("passwordCount");
    
    passwordLengthInput.addEventListener("input", updatePasswordCount);

    function updatePasswordCount() {
        const passwordLength = parseInt(passwordLengthInput.value);
        passwordCountSpan.textContent = passwordLength;
    }

    // فراخوانی تابع برای اولین بار
    updatePasswordCount();
});
