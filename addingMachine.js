var tnumbers = 0;
var count = 0;

function add(x)
{
  var tnumbers = x;
  var count = count + 1;
}
function print()
{
  document.getElementById("output").innerHTML = "Sum: " + tnumbers;
  document.getElementById("output").innerHTML = "Numbers Pressed: " + count;
}
function clearIt()
{
 document.getElementById("output").innerHTML = "";
}
