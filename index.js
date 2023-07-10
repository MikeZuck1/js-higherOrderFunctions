// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 4;
  let checkB = func(val);
  return checkA === checkB ? func(val) : 'inconsistent results';  
}
console.log(checkConsistentOutput(addTwo, 10));
// Expected output: inconsistent results
