// 🎁 Bonus Compliment Generator Logic
const compliments = [
    "Nuvvu lekunte ee prapancham antha boring untadi ra! 🌍",
    "Nuvvu chese overaction ki Oscar award ivvochu! 🏆😂",
    "Enni kastalu ochina, na venaka undedi nuvve ra my blood! ❤️",
    "Food chuste chaalu, neeku picha energy vachestundi! 🍕",
    "Nuvvu na best friend avvadam naa purva janma sukrutham! ✨"
];

function generateCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const complimentElement = document.getElementById("compliment-text");
    if(complimentElement) {
        complimentElement.innerText = compliments[randomIndex];
    }
}