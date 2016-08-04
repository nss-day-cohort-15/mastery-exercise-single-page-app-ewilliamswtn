//iife for 
//resetting card bg color and border thickness to origina val
//changing ^ when clicked on
//  ^needs two arguments: the dom element clicked on, and a color

var CarLot = (function (oldCarLot) {

  oldCarLot.bgAndBorderReset = function () {
    document.querySelectorAll(".cardInfo").forEach(function (item) {
      item.style.backgroundColor = "#ddd";
      item.style.borderWidth = "thin";
    })



  }

  oldCarLot.bgAndBorderChange = function (DivClickedOn, colorName) {
    DivClickedOn.style.backgroundColor = colorName;
    DivClickedOn.style.borderWidth = "thick";
  }






  return oldCarLot;
})(CarLot);
