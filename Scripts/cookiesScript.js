const cookieBox = document.querySelector("#Cookies"),
    buttons = document.querySelectorAll(".button");

const executeCodes = () => {
    // if cookie contains LFR Design it will be returned and below of this code will not run.
    if (document.cookie.includes("LFR Design")) return;
    cookieBox.classList.add("show");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            //if button has acceptBtn id
            if(button.id == "acceptBtn") {
                document.cookie = "cookieBy = LFRDesign; max-age=" + 60 * 60 * 24 * 30; // set cookies for a month. 60 = 1 min, 60 = 1 hr, 24 = 1 dia, 30 = 30 dias
            }
        });
    });
};

//executeCodes function will be called on webpage load
window.addEventListener("load",  executeCodes);