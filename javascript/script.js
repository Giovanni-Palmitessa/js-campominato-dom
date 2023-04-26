/*
creare una griglia 10 x 10 
generare i quadratini della presenti all'interno della griglia
*/

let eleGrid = document.querySelector('.grid');

let mainTitle = document.querySelector('.hidden');

let score = document.querySelector('.score');

let eleButton = document.querySelector('#play');

let randomNumbers = [];

let totalCell;

let finish = false;

let points = 0;

mainTitle.innerHTML = 'Seleziona il livello di difficoltà e genera la griglia';



eleButton.addEventListener('click', function () {
    const eleDifficulty = document.getElementById("difficulty");
    let value = eleDifficulty.options[eleDifficulty.selectedIndex].value;
    console.log(value);
    
    mainTitle.innerHTML = '';

    

    randomNumbers = [];

    if (value == "100") {
        eleGrid.classList.remove("grid-md","grid-sm");
        eleGrid.classList.add("grid");
        totalCell = 100;
    } else if (value == "81") {
        eleGrid.classList.remove("grid", "grid-sm");
        eleGrid.classList.add( "grid-md");
        totalCell = 81;
    } else if (value == "49") {
        eleGrid.classList.remove("grid-md", "grid");
        eleGrid.classList.add("grid-sm",);
        totalCell = 49;
    }

    createGrid(totalCell, eleGrid);

    for (let i = 1; i <= 16; i++) {
        let rand = getUniqueRandom(1, totalCell, randomNumbers);
        randomNumbers.push(rand);
    }
    console.log(randomNumbers);

    const listCells = document.querySelectorAll('.cell');

    for (let i = 0; i < listCells.length; i++) {
        const cell = listCells[i];
        cell.addEventListener('click', function () {
            this.classList.toggle('clicked');
            if (finish == false){
                points++;
                score.innerHTML = `Il tuo punteggio è: ${points}`
            }
            
            if (randomNumbers.includes(i + 1)) {
                this.classList.toggle('bomb');
                finish = true;
                console.log(finish);
            }
        }) 
     }
})

// functions

function createGrid(numCells) {
    eleGrid.innerHTML = '';
    for (let i = 0; i < numCells; i++) {

        eleGrid.innerHTML += `<div class="cell">${i + 1}<div>`
    }
}

function getUniqueRandom (min, max, arrNumbers) {
    let rand;
    do {
        rand = Math.floor(Math.random() * (max - min + 1) ) + min;
    } while (arrNumbers.includes(rand));
    
    return rand;
}
  



   


