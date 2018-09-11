// Gets the calculator type (either 'a' or 'b; from the user')
var option = prompt('Would you like to use the (s)imple or (a)dvanced calculator?')
//use a Switch to decide what to do depending on the input (in the form of the variable option)
switch (option) {
  case 's':
  alert('You have selected the simple calculator')
  // prompts to get information for a basic calculator - 2 number and an operator
  //Number allows you enter any digit
  // var a = Number(prompt("Enter first number"));
  // var b = Number(prompt("Enter second number"));
  // alert(a + b);
  var express = prompt("Enter your operation, for example 2+2","");
  if(!express) alert("Ok, it's over!");


  express = express.replace(/\s/g, '');
  var number1 = +express.charAt(0);
  var sign = express.charAt(1);
  var number2 = +express.charAt(2);

  switch(sign){
  case "+" : alert(number1 + number2);  break;
  case "-" : alert(number1 - number2);  break;
  case "*" : alert(number1 * number2);  break;
  case "/" : alert(number1 / number2);  break;
   default : alert("Not a correct operation");
  }


  break;
  case 'a':
  alert('You have selected the advanced calculator')
  break;
  default:

}


// var option = prompt('Would you like to use the simple[s] or advanced[a] calculator?')
// var option = s, a;
//
// if s = alert()
//   if (option = s) {
//     alert('You have selected the simple calculator')
//   } else (option = a)
//     alert('You have selected the advanced calculator')
