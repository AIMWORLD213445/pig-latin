// ==BUSINESS=LOGIC===
var consonants = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var translate = function(string){
  var lowerString = string.toLowerCase();
  if (lowerString.charAt(0) === "a" || lowerString.charAt(0) ==="e" || lowerString.charAt(0) ==="i" || lowerString.charAt(0) ==="o" || lowerString.charAt(0) ==="u"){
    return lowerString + "ay";
  } else {
    return lowerString;
  }
};

// stringArray[0].includes(consonantArray);

// ==UI=LOGIC==
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    var sentenceInput = $("input#sentenceInput").val();
    var sentenceTranslated = translate(sentenceInput);
    $("#result").text(sentenceTranslated);
  });

});
