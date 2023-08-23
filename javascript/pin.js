functionvalidation(pin)
{
var pin = document.getElementById('pin').value;
var mobileNumber = document.getElementById('number').value;
 pinRegexPattern = /^\d{6}$/;
 mobRegexPattern = /^\d{3}\d{3}\d{4}$/;
if(pin.match(pinRegexPattern) && mobileNumber.match(mobRegexPattern) )
 {
 alert("Pin and Mobile number is Validated!");
returntrue;
 }
if(pin.match(pinRegexPattern) 6){
 alert("Pin must be 6 digits!");
returntrue;
 }
else
 {
 alert("You have entered an invalid Pin and mobile number!");
returnfalse;
 }
}




function validatePIN (pin) {
  var pin = document.getElementById('pin').value;
   pinRegexPattern = /^(\d{4}|\d{6})$/;

  if(pin.match(pinRegexPattern))
   {
   alert("Pin is Validated!");
   return true;
   }

  if(pin.match(pinRegexPattern)){
   alert("Pin must be 4 or 6 digits!");
   return true;
   }
  else
   {
   alert("You have entered an invalid Pin and mobile number!");
   return false;
   }
}

function validatePIN (pin) {
  var pin = document.getElementById('pin').value;
   pinRegexPattern = /^(\d{4}|\d{6})$/;

   

  if ((pin.match === 4 || pin.match === 6)) {
            return true
         } else {
            return false
         }
}