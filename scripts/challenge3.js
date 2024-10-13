const frmCalc = document.getElementById('frmCalc');

const txtCalcNum1 = document.getElementById('txtCalcNum1');
const txtCalcNum2 = document.getElementById('txtCalcNum2');
const txtCalcNum3 = document.getElementById('txtCalcNum3');
const txtCalcNum4 = document.getElementById('txtCalcNum4');

// Handles form submission and calculates 4th number
frmCalc.addEventListener('submit', function (event) {

    event.preventDefault();

    const num4 = (parseFloat(txtCalcNum2.value) * parseFloat(txtCalcNum3.value)) / parseFloat(txtCalcNum1.value);
    txtCalcNum4.value = num4.toFixed(2);
    
});