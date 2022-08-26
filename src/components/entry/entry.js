const entryForm = document.querySelector(".entry form");


let isStorageSupport = true;
let storage = "";

if (entryForm) {
    const entryLogin = entryForm.querySelector("[type=text]");
    const entryPassword = entryForm.querySelector("[type=password]");
    
    try {
        storage = localStorage.getItem("login")
    } catch (err) {
        isStorageSupport = false;
    }
    // entryLogin.focus()
    entryForm.addEventListener("submit", function (evt) {
        evt.preventDefault()
        if (!entryLogin.value || !entryPassword.value){
            console.log("Нужно вести пароль");
        } else {
            if (isStorageSupport){
                localStorage.setItem("login", entryLogin.value)
                console.log(entryLogin.value);
            }
        }
    })
}
