const character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";


const generatePassword = document.getElementById("generatePassword");
generatePassword.addEventListener('click', () => {
    const password = document.getElementById("Password");
    const length = document.getElementById("length");
    let len = length.value;
    let msg = "";
    if (len == "") {
        msg = ("Please enter the valid password length.");
        password.innerHTML = msg;
    }
    else if (len < 8 || len > 25) {
        msg = ("Password length should be between 8 and 25 characters.");
        password.innerHTML = msg;
        //    alert(msg);
    }
    else {
        password.style.display = "none";
        password.innerHTML = "";

        let pass = "";
        for (let i = 0; i < len; i++) {
            let char = character[Math.floor(Math.random() * character.length)];
            pass += char;
        }
        password.innerHTML = pass;
        password.style.color = "green";
        password.style.fontSize = "20px";
        password.style.fontWeight = "bold";
        password.style.display = "block";
        return;
    }
     password.innerHTML = msg;
        password.style.color = "red";
        password.style.fontSize = "20px";
        password.style.fontWeight = "bold";
        password.style.display = "block";
        return;
})