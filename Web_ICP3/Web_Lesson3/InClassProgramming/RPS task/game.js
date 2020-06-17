/*Converting userInput to lowercase and assigning the value to a variable*/
function getUserChoice (userInput){
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors') {
        console.log("selected ", userInput);
        return userInput;
    } else {
        console.log('not a valid choice');
    }
}
/*Random function to generate random number and returning values based on the number generated*/
function getComputerChoice() {
    switch(Math.floor(Math.random()*3)) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
    };
}
/*Determining the result based on the computer choice and user choice*/
function determineWinner(userChoice,computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        }
        else {
            return 'You win!';
        }
    } else if (userChoice === 'paper'){
        if (compterChoice === 'scissors') {
            return 'Computer wins!';
        }
        else {
            return 'You win!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        }
        else {
            return 'You win!';
        }
    }
};
/*Main function calling all the other functions that takes input and displays the results*/
function playGame(userInput) {
    /*Displaying certain divs on click*/
    alert(userInput);
    document.getElementById("ucH").style.display="block";
    document.getElementById("ccH").style.display="block";
    document.getElementById("UserChoice").style.display="block";
    document.getElementById("ComputerChoice").style.display="block";
    var userChoice = getUserChoice(userInput);
    var computerChoice = getComputerChoice();
    console.log(`you threw ${userChoice}`);
    console.log(`computer threw ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
    var result1=determineWinner(userChoice,computerChoice);
    printResult(result1,userChoice,computerChoice);
};

/*Appending the result as images to the html using getElementById and innerHTML*/
function printResult(resultFinal,uC,cC) {
    if (resultFinal=='You win!'){
        document.getElementById("resultgif").src="https://media.giphy.com/media/ihvtlDQ2gK3w8bnYBe/giphy.gif"
    }
    else if (resultFinal=='Computer wins!'){
        document.getElementById("resultgif").src="https://media.giphy.com/media/biJ1jmq9woBMI/giphy.gif"
    }
    else if (resultFinal=='It\'s a tie!'){
        document.getElementById("resultgif").src="https://media.giphy.com/media/xT3i0VNrc6Ny7bxfJm/giphy.gif"
    }

    if (uC=='rock') {
        document.getElementById("UserChoice").src = "leftro.png";
    }
    else if (uC=='paper')
    {
        document.getElementById("UserChoice").src = "leftpa.png";

    }
    else if (uC=='scissors')
    {
        document.getElementById("UserChoice").src = "leftsi.png";

    }
    if (cC=='rock') {
        document.getElementById("ComputerChoice").src = "rightro.png";
    }
    else if (cC=='paper')
    {
        document.getElementById("ComputerChoice").src = "rightpa.png";
    }
    else if (cC=='scissors')
    {
        document.getElementById("ComputerChoice").src = "rightsi-2.png";
    }
    document.getElementById("result").innerHTML=resultFinal;
}