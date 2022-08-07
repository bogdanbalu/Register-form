const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("psw");
const pswRepeat = document.getElementById("psw-repeat");
const termsAndPrivacy = document.getElementById("termsAndPrivacy");
const submit = document.getElementById("registerbtn");

registerbtn.addEventListener("click", () => {
    validatePassword()
    const user = getUser();
    acceptTermsAndPrivacy()
    localStorage.setItem("user", JSON.stringify(user));
});

    const getDataFromStorage = localStorage.getItem("user");
    const getUserData = JSON.parse(getDataFromStorage);
    if (getUserData) { 
        firstName.value = getUserData.firstName;
        lastName.value = getUserData.lastName;
        email.value = getUserData.email;
    }


const getUser = () => {
    const user = {
        "firstName": firstName.value,
        "lastName": lastName.value,
        "email": email.value,
    }
    return user;
}

const validatePassword = () => {
    const passwordValue = password.value;
    const repeatPasswordValue = pswRepeat.value;
    
    if (passwordValue !== repeatPasswordValue) {
        password.style.backgroundColor = 'red';
        pswRepeat.style.backgroundColor = 'red';
        alert("Passwords are not the same")
        return false;
    }
    return true;
}

const acceptTermsAndPrivacy = () => {
    if (!termsAndPrivacy.checked) {
        alert("You need to accept terms and privacy")
    }
}

