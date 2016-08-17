// ==BUSINESS=LOGIC===
var consonants = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var translate = function(string){
  var lowerString = string.toLowerCase();
  var stringArray = lowerString.split("");
  if (lowerString.charAt(0) === "a" || lowerString.charAt(0) ==="e" || lowerString.charAt(0) ==="i" || lowerString.charAt(0) ==="o" || lowerString.charAt(0) ==="u"){
    return lowerString + "ay";
  } else if(consonants.includes(stringArray[0]) === true){
    return shiftConsonants(stringArray);
  }
  else {
    return lowerString;
  }
};

var shiftConsonants = function(array){
  var removedConsonants = [];
  for (i=0; i<=array.length; i++) {
    if (consonants.includes(array[0]) === true) {
      removedConsonants.push(array.shift());
    }
  }
  var joinedConsonants = removedConsonants.join("");
  var joinedArray = array.join("");
  return joinedArray + joinedConsonants + "ay";
};

// ==UI=LOGIC==
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    var sentenceInput = $("input#sentenceInput").val();
    var sentenceTranslated = translate(sentenceInput);
    $("#result").text(sentenceTranslated);
  });

});
