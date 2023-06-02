// function setCookie(cName, cValue, expDays) {
//     let date = new Date();
//     date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
//     const expires = "expires=" + date.toUTCString();
//     document.cookie = `${cName} = ${cValue}; ${expires}; path=/`;
// }

// function getCookie(cName) {
//     let name = cName + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(";");
//     for(let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//       }
//     return "";
// }

// function checkCookie() {
//     let user = getCookie("username");
//     if (user != "") {
//         alert("Welcome again " + user);
//     } else {
//        user = prompt("Please enter your name:","");
//        if (user != "" && user != null) {
//             setCookie("username", user, 30);
//        }
//     }
// }

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0) value = val.substring(name.length);
    })
    return value;
}

document.querySelector("#cookies-btn").addEventListener("click", () => {
    document.querySelector("#Cookies").style.display = "none";
    setCookie("cookie", true, 30);
})

function cookieMessage() {
    if(!getCookie("cookie"))
    document.querySelector("#Cookies").style.display = "block";
}

window.addEventListener("load", cookieMessage);