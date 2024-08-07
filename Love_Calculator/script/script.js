// ========================================  Start JavaScript Code  =================================================


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Start Version 01 Code  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ----------------------------------------  For Welcome Alert and get Names  ----------------------------------------

function verWelcome(){
    alert("Welcome to New and Simple Version of Love Calculator...")
    let fName = prompt("Type your Name : 👇👇")
    let sName = prompt("Type your Partner Name : 👇👇")
    confirm("Are You Excited...💞❣️💞")
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  End Version 01 Code  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//                                                ******* 


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Start Main Version Code  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ----------------------------------------  Check Input field blank or filled  ----------------------------------------

function checkInput() {
    const name1 = document.getElementById('fNameInput').value.trim();
    const name2 = document.getElementById('sNameInput').value.trim();

    if (name1 === '') {
        alert('❣️ Type Your Name ❣️');
        return;
    } else {
        if (name2 === '') {
            alert('❣️ Type Your Partner Name ❣️');
            return;
        }
    }
}


// ----------------------------------------  For change heart color of main page after fill first name  ----------------------------------------

function changeColor() {
    const name01 = document.getElementById('fNameInput').value;
    const name02 = document.getElementById('sNameInput').value;
    const image = document.getElementById('heart')

    if (name01 === '') {
        image.style.filter = 'hue-rotate(0deg)'
        return;
    } else {
        if (name02 === '') {
            image.style.filter = 'hue-rotate(280deg)'
            return;
        }
    }
}


// ========================================  End JavaScript Code  =================================================