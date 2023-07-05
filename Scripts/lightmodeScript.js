const body = document.getElementById("Body");
const buttonLight = document.getElementById("buttonLight");
const buttonDark = document.getElementById("buttonDark");
const Menubar = document.getElementById("Menu");
const buttonResponsive = document.querySelector(".navbar-toggler");
const txtChange1 = document.getElementById("navchange1");
const txtChange2 = document.getElementById("navchange2");
const txtChange3 = document.getElementById("navchange3");
const txtChange4 = document.getElementById("navchange4");

function BgDark() {
    body.classList.add('bodyDark');
    body.classList.remove('bodyLight');
    Menubar.classList.remove('menuLight');
    Menubar.classList.add('menuDark');
    txtChange1.classList.remove('color01');
    txtChange1.classList.add('txtcolor01');
    txtChange2.classList.remove('color01');
    txtChange2.classList.add('txtcolor01');
    txtChange3.classList.remove('color01');
    txtChange3.classList.add('txtcolor01');
    txtChange4.classList.remove('color01');
    txtChange4.classList.add('txtcolor01');
    buttonResponsive.style.border = "1px solid rgba(255, 255, 255, 0.6)";
}

function BgLight() {
    body.classList.add('bodyLight');
    body.classList.remove('bodyDark');
    Menubar.classList.remove('menuDark');
    Menubar.classList.add('menuLight');
    txtChange1.classList.remove('txtcolor01');
    txtChange1.classList.add('color01');
    txtChange2.classList.remove('txtcolor01');
    txtChange2.classList.add('color01');
    txtChange3.classList.remove('txtcolor01');
    txtChange3.classList.add('color01');
    txtChange4.classList.remove('txtcolor01');
    txtChange4.classList.add('color01');
    buttonResponsive.style.border = "2px solid rgba(0, 0, 0, 0.6)";
}

// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
// }