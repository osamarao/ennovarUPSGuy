$(document).ready(function(){


  $( "#findFloor" ).click( function(){
    processInput();
  }

  );

  function processInput(){
    var instructions = $("#ta").val();

    if (instructions.length <= 0 ){
      alert("Please enter instructions");
    }

    var floor = 0;

    // // iterate through the string's characters one by one
    // for ( i = 0 ; i < instructions.length; i++){
    //
    //   if (instructions.charAt(i) === "(")
    //     floor++;
    //   else {
    //     floor--;
    //   }
    //   if (floor >= 0)
    //     $("#resultPane").text("current floor " + floor);
    //   else
    //     $("#resultPane").text("BASEMENT!!!!!!");
    //
    // }
    console.log(instructions.length);
    var characterPointer = 0;

    var thisInterval = setInterval(function(){
      if (characterPointer < instructions.length){
        if (instructions.charAt(characterPointer) === "(")
          floor++;
        else {
          floor--;
        }
        if (floor >= 0)
          $("#resultPane").text("current floor " + floor);
        else
          $("#resultPane").text("BASEMENT!!!!!!");

        // when it enters the basement for the first time the floor number will be -1
        if (floor === -1){
          $("#firstTimeInBasement").text("Enters basement at instuction number: " + characterPointer);
          //console.log("ENTERED BASEMENT at ins");
        }
        characterPointer++;
      } else {
        clearInterval(thisInterval);
      }
      //console.log(characterPointer);
    }, 1);


    //console.log($("#ta").val());
  }


});
