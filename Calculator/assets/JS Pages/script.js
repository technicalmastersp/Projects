// ========================================  Information of Developer  =================================================

// This project make by "@Shashank_S_Pandey (technicalmastersp)"
// Connect with me on LinkedIn @"https://www.linkedin.com/in/technicalmastersp/"
// Connect with me on GitHub @"https://github.com/technicalmastersp/"

// ========================================  Start JavaScript Code  =================================================


// ----------------------------------------  For Clear Result & Typing Display  ----------------------------------------

function clearDisplay () {
  let currentdisplay = '';
  document.querySelector('#display').value = currentdisplay;
  document.querySelector('#resDisplay').value = currentdisplay;
}

// ----------------------------------------  For Type Button and Show typing Display  ----------------------------------------

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

// ----------------------------------------  For Delete 1 by 1 Digit in Typing Display  ----------------------------------------

function backspace() {
  let displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.slice(0, -1);
}

// ----------------------------------------  For Calculate show the Result of all Expretions  ----------------------------------------

function calculate() {
  try {
    let result = eval(document.getElementById('display').value);
    document.getElementById('resDisplay').value = result;
  } catch (error) {
    document.getElementById('resDisplay').value = 'Error';
  }

}

// ----------------------------------------  For Save Results in the History   ----------------------------------------

function saveHistory(){
    let oldHistory = document.getElementById('his').value;
    let history = document.getElementById('display').value + "=" + document.getElementById('resDisplay').value;
    document.getElementById('his').value = oldHistory += history + '\n';
}

// ----------------------------------------  For Print the Calculator and History  ----------------------------------------

function printHis(){
    let isTrue = confirm("Are you ready to print-out ?")
    if(isTrue){
        let pHis = document.getElementById('his').value;
        print(pHis)
    } 
    else {
        document.getElementById('his').value;
    }
}

// ----------------------------------------  For Show / Hide Details Box  ----------------------------------------

function dtls () {
  // let actionBtn = document.getElementById('detailsBtn');
  let detailsBox = document.getElementById('details');

  if(detailsBox.style.display === "none"){
    detailsBox.style.display = "block";
  } else {
    detailsBox.style.display = "none";
  }
}