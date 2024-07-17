// Initialize an empty string to store the input
let string = "";

// Select all elements with the class 'button'
let buttons = document.querySelectorAll('.button');

// Convert NodeList to Array and iterate over each button
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    // If the '=' button is clicked, evaluate the expression
    if(e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    // If the 'C' button is clicked, clear the input
    else if(e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    }
    // For other buttons, append their value to the string and update the input field
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
});

