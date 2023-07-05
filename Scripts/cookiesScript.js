function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/, path=/contato, path=/projetos";
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
    setCookie("LFRDesignCookie", true, 60);
})

cookieMessage = () => {
    if(!getCookie("LFRDesignCookie"))
    document.querySelector("#Cookies").style.display = "block";
}

window.addEventListener("load", cookieMessage);