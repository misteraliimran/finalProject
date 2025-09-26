
let logout = document.querySelector(".logout")
function refresh() {
    let icons = document.querySelector(".nav-icons")
    let activeUser = localStorage.getItem("activeUser") ? JSON.parse(localStorage.getItem("activeUser")) : ""
    let username = document.getElementById("username")
    let login = document.querySelector(".login")
    if (activeUser) {
        username.innerHTML = activeUser.username
        login.style.display = "none";
        logout.style.display = "inline-block";
        icons.style.display = "flex";

    } else {
        username.innerHTML = ""
        login.style.display = "inline-block";
        logout.style.display = "none";
        icons.style.display = "none";
    }
}

refresh()

logout.addEventListener("click", () => {
    localStorage.removeItem("activeUser")
    refresh()
})