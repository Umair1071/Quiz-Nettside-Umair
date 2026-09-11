
let sporsmal = [
    {
        tekst: "Hva gjør en switch?",
        svar: ["Kobler enheter sammen", "Lagrer bilder", "Skriver ut"],
        riktig: 0
    },
    {
        tekst: "Hvor mange bits har en MAC-adresse?",
        svar: ["32", "48", "64"],
        riktig: 1
    },
    {
        tekst: "Hva står IP for?",
        svar: ["Internet Protocol", "Internet Power", "Internal Program"],
        riktig: 0
    },
    {
        tekst: "Hva gjør en router?",
        svar: ["Kobler nettverk sammen", "Lager bilder", "Spiller musikk"],
        riktig: 0
    },
    {
        tekst: "Hva er WiFi?",
        svar: ["Trådløst nettverk", "En kabel", "En harddisk"],
        riktig: 0
    }
];
let quiz = document.getElementById("quiz");
let resultat = document.getElementById("resultat");
let igjen = document.getElementById("igjen");
function startQuiz() {
    quiz.innerHTML = "";
    resultat.innerHTML = "";
    igjen.style.display = "none";
    sporsmal.sort(() => Math.random() - 0.5);
    for (let i = 0; i < sporsmal.length; i++) {
        quiz.innerHTML += `
            <h3>${i + 1}. ${sporsmal[i].tekst}</h3>
            <input type="radio" name="spm${i}" value="0">
            ${sporsmal[i].svar[0]}<br>
            <input type="radio" name="spm${i}" value="1">
            ${sporsmal[i].svar[1]}<br>
            <input type="radio" name="spm${i}" value="2">
            ${sporsmal[i].svar[2]}<br>
        `;
    }
}
function sjekkSvar() {
    let poeng = 0;
    for (let i = 0; i < sporsmal.length; i++) {
        let svar = document.querySelector(
            `input[name="spm${i}"]:checked`
        );
        if (svar && Number(svar.value) == sporsmal[i].riktig) {
            poeng++;
        }
    }
    resultat.innerHTML = "Du fikk " + poeng + " av 5 riktige!";
    igjen.style.display = "block";
}
startQuiz();