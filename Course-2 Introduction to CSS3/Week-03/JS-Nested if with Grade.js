/*var score = "Colleen";         /*Replace with prompt*/
var score = prompt("Please enter a score"); 

score = parseInt(score);
if (isNaN(score)){
  document.write("You didn't enter a number.");
}
else{
  if (score>90)
    document.write("A");
  else if (score>80)
    document.write("B");
  else if (score>70)
    document.write("C");
  else if (score>60)
    document.write("D");
  else
    document.write("You failed");
}
   