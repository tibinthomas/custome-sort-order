// Import stylesheets
import './style.css';

var a = ['t', 'i', 'b', 'n'];

var arr = ["tigrer", "tibin", "india", "tenz", "belt", "tibit"];

arr.sort((x,y) =>  {
    let charIndex = 0;
    while(y[charIndex] === x[charIndex] && y[charIndex] !== undefined &&  x[charIndex] !== undefined) {
        charIndex++;
    }
    return a.indexOf(x[charIndex]) - a.indexOf(y[charIndex]) 
});

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `${JSON.stringify(arr)}`;