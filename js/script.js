console.log(randomNumber);

//Event listener
document.querySelector("#go").addEventListener("click", input);




//Variables
var randomNumber = Math.floor(Math.random() * 99) + 1;
var inputBox = document.getElementById('numero');
var tries = 0;
var win = 0;
var loss = 0;
var rounds = 1;



const list = [];

win = localStorage.getItem('win');
loss = localStorage.getItem('loss');
rounds = localStorage.getItem('rounds');


//gathering the input

inputBox.addEventListener('keyup', function(e) {
  inputBox.value = "" + inputBox.value;
  if (parseInt(inputBox.value) < 1 || parseInt(inputBox.value) > 99) {
    //the desired range
    document.querySelector("#alert").innerHTML = "INPUT NOT WITHIN DESRIRED RANGE";
    clearInput();
    return;
  }
  document.querySelector("#alert").innerHTML = "";
});

function clearInput() {
  //Invalid Entry
  inputBox.value = "";
}

function input() {
  console.log("Comparing the value...");

  let numero = document.querySelector("#numero").value;

  document.querySelector("#messages").innerHTML = "";
  document.querySelector("#congrats").innerHTML = "";
  document.querySelector("#alert").innerHTML = "";


  //loop to display the scores and such
  do {
    if (numero != randomNumber) {

      if (numero < randomNumber) {
        document.querySelector("#messages").innerHTML = "That is not the correct number: The guess is too low";
      } else {
        document.querySelector("#messages").innerHTML = "That is not the correct number: The guess is too high ";
      }
      list[tries] = numero;

      if (tries == 7) {
        document.querySelector("#messages").innerHTML = "YOU HAVE LOST";
        document.querySelector("#previous").innerHTML = "";
        loss++;
        rounds++;
        break;

      }

    }
    else {
      document.querySelector("#congrats").innerHTML = "Congratulations! You got it right!";
      document.querySelector("#previous").innerHTML = "";
      win++;
      rounds++;
      break;
    }

    document.querySelector("#previous").innerHTML = list;
    tries++;
    clearInput();


  } while (tries >= 7)

  localStorage.setItem('win', win);
  localStorage.setItem('loss', loss);
  localStorage.setItem('rounds', rounds);
  //displays the score:
}


document.getElementById("loss").innerHTML = "Loss: " + loss;
document.getElementById("win").innerHTML = "Wins: " + win;
document.getElementById("rounds").innerHTML = "Round: " + rounds;



