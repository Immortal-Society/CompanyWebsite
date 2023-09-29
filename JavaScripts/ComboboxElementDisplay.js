
var startId =document.currentScript.getAttribute('startId');
var dropDownItemClass = document.currentScript.getAttribute('dropDownItemClass');
console.log(startId);
var currentDisplay = document.getElementById(startId);
var dropDownItems = document.getElementsByClassName(dropDownItemClass);
var counter = 0;
for(counter = 0; counter < dropDownItems.length; counter++)
{
    dropDownItems[counter].style.display = "none";
}
currentDisplay.style.display ="block";
function ComboBoxValueChanged(cbId) {
    var x = document.getElementById(cbId).value;
    var newSelection =document.getElementById(x);
    if(newSelection != currentDisplay)
    {
        currentDisplay.style.display ="none";
        currentDisplay = newSelection;
        currentDisplay.style.display ="block";
    }
}