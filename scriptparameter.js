// Funksjon for å velge et bilde av hodet
function selectHead(previousNumber, currentNumber, nextNumber) {
    document.getElementById('head').innerHTML = `
        <button onclick="selectHead(${previousNumber})">◀</button>
        <img src="img/head${currentNumber}.png" alt="Head ${currentNumber}" />
        <button onclick="selectHead(${nextNumber})">▶</button>
    `;
}

// Funksjon for å velge et bilde av kroppen
function selectBody(previousNumber, currentNumber, nextNumber) {
    document.getElementById('body').innerHTML = `
        <button onclick="selectBody(${previousNumber})">◀</button>
        <img src="img/body${currentNumber}.png" alt="Body ${currentNumber}" />
        <button onclick="selectBody(${nextNumber})">▶</button>
    `;
}

// Funksjon for å velge et bilde av bena
function selectLegs(previousNumber, currentNumber, nextNumber) {
    document.getElementById('legs').innerHTML = `
        <button onclick="selectLegs(${previousNumber})">◀</button>
        <img src="img/legs${currentNumber}.png" alt="Legs ${currentNumber}" />
        <button onclick="selectLegs(${nextNumber})">▶</button>
    `;
}

// Initialiserer valg av hode, kropp og ben
function initializeSelections() {
    selectHead(4, 1, 2);
    selectBody(4, 1, 2);
    selectLegs(4, 1, 2);
}

// Kaller initialiseringsfunksjonen når siden lastes
document.addEventListener('DOMContentLoaded', initializeSelections);
