const cookiebox = document.getElementById("Cookies");
const acceptBtn = document.getElementById("cookies-btn");

function AcceptCookies() {
    document.cookie = "CodeBy=LFRDesign";
    if(document.cookie == true) {
        cookiebox.classList.add("hide");
        console.log(document.cookie);
    } else {
        alert("Cookie deu erro.");
    }
}

let checkCookie = document.cookie.indexOf("CodeBy=LFRDesign");
    checkCookie != -1 ? cookiebox.classList.add("hide") : cookiebox.classList.remove("hide");

