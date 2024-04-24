
/* Initialize i to 10
Create a loop that runs as long as i is greater than or equal to 0
    Create a new paragraph element para
    If i is equal to 10
        Set para's text content to "Countdown 10"
    Else if i is equal to 0
        Set para's text content to "Blast off!"
    Else
        Set para's text content to the value of i
    Append para to the output <div>
    Decrement i by 1
End of loop */

let output = document.querySelector('.output');
output.innerHTML = '';

for (let i = 10; i >= 0; i--) {
    const para = document.createElement('p'); 

    if (i === 10) {
        para.textContent('Countdown 10');
    } else if (i === 0) {
        para.textContent('Blastoff!');
    } else {
        para.textContent = i; 
    }
    output.appendChild(para); 
}; 