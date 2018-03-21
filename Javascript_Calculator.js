$(document).ready(function() {
  var theNumber = "";
  var endNumber = "replace";
  var holdNumArray = [];

  $( "#numberOne" ).click(function() {
      if(endNumber !== theNumber){
        var numberOne = $( this ).html();
        theNumber += numberOne;
        $("#display").html(theNumber);
      }
   });
  $( "#numberTwo" ).click(function() {
    if(endNumber !== theNumber){
      var numberTwo = $( this ).html();
      theNumber += numberTwo;
      $("#display").html(theNumber);
    }
   });
  $( "#numberThree" ).click(function() {
    if(endNumber !== theNumber){
      var numberThree = $( this ).html();
      theNumber += numberThree;
      $("#display").html(theNumber);
    }
   });
  $( "#numberFour" ).click(function() {
    if(endNumber !== theNumber){
      var numberFour = $( this ).html();
      theNumber += numberFour;
      $("#display").html(theNumber)
    }
   });
  $( "#numberFive" ).click(function() {
    if(endNumber !== theNumber){
      var numberFive = $( this ).html();
      theNumber += numberFive;
      $("#display").html(theNumber)
    }
   });
  $( "#numberSix" ).click(function() {
    if(endNumber !== theNumber){
      var numberSix = $( this ).html();
      theNumber += numberSix;
      $("#display").html(theNumber)
    }
   });
  $( "#numberSeven" ).click(function() {
    if(endNumber !== theNumber){
      var numberSeven = $( this ).html();
      theNumber += numberSeven;
      $("#display").html(theNumber)
    }
   });
  $( "#numberEight" ).click(function() {
    if(endNumber !== theNumber){
      var numberEight = $( this ).html();
       theNumber += numberEight;
      $("#display").html(theNumber)
    }
   });
  $( "#numberNine" ).click(function() {
    if(endNumber !== theNumber){
      var numberNine = $( this ).html();
      theNumber += numberNine;
      $("#display").html(theNumber)
    }
   });
  $( "#numberZero" ).click(function() {
    if(endNumber !== theNumber){
      var numberZero = $( this ).html();
      theNumber += numberZero;
      $("#display").html(theNumber)
    }
   });
  $( "#dot" ).click(function() {
    if(endNumber !== theNumber){
      var theDot = $( this ).html();
      theNumber += theDot;
      $("#display").html(theNumber)
    }
   });
  $( "#addition" ).click(function() {
      var theAddition = $( this ).html();
      holdNumArray.push(Number(theNumber), theAddition);
      theNumber = "";
   });
  $( "#minus" ).click(function() {
      var theMinus = $( this ).html();
      holdNumArray.push(Number(theNumber), theMinus);
      theNumber = "";
   });
  $( "#division" ).click(function() {
      var theDivision = $( this ).html();
      holdNumArray.push(Number(theNumber), theDivision);
      theNumber = "";
   });
  $( "#multiply" ).click(function() {
      var theMultiply = $( this ).html();
      holdNumArray.push(Number(theNumber), theMultiply);
      theNumber = "";
   });
  $( "#theEquals" ).click(function() {
      holdNumArray.push(Number(theNumber));
      holdNumArray = holdNumArray.join('');
      theNumber = eval(holdNumArray);
      theNumber = theNumber.toString();
      endNumber = theNumber.toString();
      holdNumArray = [];
      $("#display").html(theNumber);


   });
  $( "#allClear" ).click(function() {
      holdNumArray = [];
      theNumber = "";
      $("#display").html("0");
   });
  $( "#clearEntry").click(function() {
      theNumber = "";
      $("#display").html("Type A New Number");
   });
});
