
let cliches = [];

let card = [];
const index = "bingo";
for(let i = 1; i <= 5; i++){
        for(letter of index){
                let space = document.getElementById(`cell${letter}${i}`);
                card.push(space);
    }
}
function markCell(cell){
    space = document.getElementById(cell);
    space.classList.toggle("marked");
}
async function generateCard(){
    const response = await fetch("./cliches.json");
    const json = await response.json();
    cliches = json.cliches;
    console.log(cliches);
    const unique = [];
    for(let i = 0; i < card.length; i++){
        let number = Math.floor(Math.random() * 75) + 1;
        while(unique.includes(number)){
            number = Math.floor(Math.random() * 75) + 1;
        }
        unique.push(number);
        card[i].innerHTML = cliches[number];
    }
}