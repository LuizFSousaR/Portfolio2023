//Calculando a idade
function minhaIdade() {
    const date = new Date();
    var ano1 = date;
    var ano2 = 1990;
    const numeroIdade = ano1 - ano2;
}

document.getElementById("idade").innerHTML = numeroIdade;

//Data do ano
const date = new Date();
document.getElementById("date").innerHTML = d.getFullYear();