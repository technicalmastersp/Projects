let currentdisplay = '';

document.querySelector('#display').value = currentdisplay;

document.querySelector('#resDisplay').value = currentdisplay;



function appendToDisplay(value) {

  document.getElementById('display').value += value;

}



function backspace() {

  let displayValue = document.getElementById('display').value;

  document.getElementById('display').value = displayValue.slice(0, -1);

}



function calculate() {

  try {

    let result = eval(document.getElementById('display').value);

    document.getElementById('resDisplay').value = result;

  } catch (error) {

    document.getElementById('resDisplay').value = 'Error';

  }

}



function saveHistory(){

    let oldHistory = document.getElementById('his').value;

    let history = document.getElementById('display').value + "=" + document.getElementById('resDisplay').value;

    document.getElementById('his').value = oldHistory += history + '\n';

}



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