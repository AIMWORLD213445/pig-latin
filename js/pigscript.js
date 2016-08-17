// ==BUSINESS=LOGIC===



// ==UI=LOGIC==
$(document).ready(function(){
  $("form#sentence").submit(function(event){
    event.preventDefault();
    var sentenceInput = $("input#sentenceInput").val();
    var sentenceTranslated = translate(sentenceInput);
    $("#result").text(sentenceTranslated);
  });

});
