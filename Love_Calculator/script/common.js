// ========================================  Start JavaScript Code  =================================================


// ----------------------------------------  For Get Name by index.html and save to local Storage  ----------------------------------------

function sendName() {
    let fNameIs = document.getElementById('fNameInput').value
    let sNameIs = document.getElementById('sNameInput').value
    localStorage.setItem('inputData1', fNameIs);
    localStorage.setItem('inputData2', sNameIs);
    window.location.href = 'pages/resultPage.html';
}

// ----------------------------------------  For Call Name by to local Storage & print on resultPage.html  ----------------------------------------

window.onload = function() {
    const cName1 = localStorage.getItem('inputData1');
    const cName2 = localStorage.getItem('inputData2');
    document.getElementById('fName').textContent = cName1 ? cName1 : 'No data found';
    document.getElementById('sName').textContent = cName2 ? cName2 : 'No data found';
}


// ========================================  End JavaScript Code  =================================================