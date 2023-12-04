const editImage = document.querySelectorAll('.edit-image');
const h3Element = document.querySelectorAll('.player-name');
const saveButton = document.querySelectorAll('.btn');

const isDiceRolled =()=>{
    // Hide the dice image

    const dice1 = document.querySelectorAll('.player-1-dices .dice');
    const dice2 = document.querySelectorAll('.player-2-dices .dice');

    dice1.forEach(dice => {
        dice.classList.add('hide');
    });

    dice2.forEach(dice => {
        dice.classList.add('hide');
    });

    // Show the loading text

    const player1Loading = document.querySelector('.player-1-loading');
    const player2Loading = document.querySelector('.player-2-loading');

    player1Loading.classList.remove('hide');
    player2Loading.classList.remove('hide');

    // Hide the winner

    const winner = document.querySelector('.winner');

    winner.classList.add('hide');
}

const rollDice =()=>{

    isDiceRolled()

    const player1Dice = document.querySelector('.player-1-dices');
    const player2Dice = document.querySelector('.player-2-dices');

    // random number generate between 1 to 6

    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Select the dice image based on the random number

    const dice1 = document.querySelector('.player-1-dices .dice:nth-child(' + randomNumber1 + ')');
    const dice2 = document.querySelector('.player-2-dices .dice:nth-child(' + randomNumber2 + ')');

    // Show the dice image

    dice1.classList.remove('hide');
    dice2.classList.remove('hide');

    // Hide the loading text

    const player1Loading = document.querySelector('.player-1-loading');
    const player2Loading = document.querySelector('.player-2-loading');

    player1Loading.classList.add('hide');
    player2Loading.classList.add('hide');

    // Show the winner

    const winner = document.querySelector('.winner');
    const winnerName = document.querySelector('.winner p');

    if (randomNumber1 > randomNumber2) {
        winnerName.innerText = h3Element[0].innerText; // Player 1
    } else if (randomNumber1 < randomNumber2) {
        winnerName.innerText = h3Element[1].innerText; // Player 2
    } else {
        winnerName.innerText = 'Draw';
    }

    winner.classList.remove('hide');
}


const reload =()=>{
    location.reload();
}

editImage[0].addEventListener('click', () => {
    // Create an input element
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.classList.add('player-name-input');
    inputElement.value = h3Element[0].innerText;

    // Replace the h3 element with the input element
    h3Element[0].replaceWith(inputElement);

    // Change the button text and class
    saveButton[0].innerText = 'Save';
    saveButton[0].classList.remove('hide');

    // Add event listener to the save button
    saveButton[0].addEventListener("click", () => {
        h3Element[0].innerHTML = inputElement.value + ' <img class="edit-image" title="Edit Name" src="https://icon-library.com/images/icon-edit/icon-edit-27.jpg" alt="">';
        inputElement.replaceWith(h3Element[0]);
        saveButton[0].classList.add('hide');
        // Remove the input element
        inputElement.remove();

        // Store the name in localStorage
        localStorage.setItem('playerName1', h3Element[0].innerText);
    });
});

editImage[1].addEventListener('click', () => {
    // Create an input element
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.classList.add('player-name-input');
    inputElement.value = h3Element[1].innerText;

    // Replace the h3 element with the input element
    h3Element[1].replaceWith(inputElement);

    // Change the button text and class
    saveButton[1].innerText = 'Save';
    saveButton[1].classList.remove('hide');

    // Add event listener to the save button
    saveButton[1].addEventListener("click", () => {
        h3Element[1].innerHTML = inputElement.value + ' <img class="edit-image" title="Edit Name" src="https://icon-library.com/images/icon-edit/icon-edit-27.jpg" alt="">';
        inputElement.replaceWith(h3Element[1]);
        saveButton[1].classList.add('hide');
        // Remove the input element
        inputElement.remove();

        // Store the name in localStorage
        localStorage.setItem('playerName2', h3Element[1].innerText);
    });
});