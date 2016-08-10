//CarLot augmentor iife for event handlers
window.onload = function () {
  CarLot.loadInventory(CarLot.populatePage);
};

var CarLot = (function (oldCarLot) {
  oldCarLot.populatePage = function (inventoryPH) {

    var container = document.getElementById("divLord");

    for (var j=0; j<inventoryPH.length; j++) {
      if (j === 0 ) {
        container.innerHTML += "<div class='row'><div class='col-xs-3 card'><div class='cardInfo'></div></div>" //first one, starts first row 
        console.log(j + "first")
      } else if ( j % 3 === 0) {
        container.innerHTML += "</div><div class='row'><div class='col-xs-3 card'><div class='cardInfo'></div></div>" //every 3, ends a row and starts a new one
        console.log(j + "row end")
      } else if (j === (inventoryPH.length - 1)) {
        container.innerHTML += "<div class='col-xs-3 card'><div class='cardInfo'></div></div></div>" //last one, ends last row
        console.log(j + "last")
      } else {
        container.innerHTML += "<div class='col-xs-3 card'><div class='cardInfo'></div></div>" //regular cards, doesnt touch rows
        console.log(j + "reg")
      }
    }

    //logic should be the same below here
    var cards = document.querySelectorAll("div.cardInfo");
    for (var i=0; i<inventoryPH.length; i++) {
      cards[i].innerHTML +=
       "<span class='titleSpan'>Manufacturer: </span><span>"
       +  inventoryPH[i].make
       + "</span><br><span class='titleSpan'>Model: </span><span>"
       + inventoryPH[i].model
       + "</span><br><span class='titleSpan'>Year: </span><span>"
       + inventoryPH[i].year
       + "</span><br><span class='titleSpan'>Price: </span><span>"
       + inventoryPH[i].price
       + "</span><br><span class='titleSpan'>Color: </span><span>"
       + inventoryPH[i].color
       + "</span><br><span class='titleSpan'>Purchased: </span><span>"
       + inventoryPH[i].purchased
       + "</span><br><span class='titleSpan'>Description: </span><span class='desc'>"
       + inventoryPH[i].description
       + "</span";

        cards[i].style.borderColor = inventoryPH[i].color;
    }
    console.log("populate page elements done")
    CarLot.activateEvents();
  }

  oldCarLot.activateEvents = function () {
    var divFocus;
    document.getElementById("submitButton").addEventListener("click", function(event){
        event.preventDefault()
    });


    var cards = document.querySelectorAll("div.cardInfo");

    for (var i=0; i<cards.length; i++) {
      cards[i].addEventListener("click",function(){
        CarLot.bgAndBorderReset(); //forgot to put this here 
        console.log("click");
        divFocus = this;
        document.getElementById("searchBar").placeholder = "";
        document.getElementById("searchBar").value = "";
        document.getElementById("searchBar").focus();
        //console.log(divFocus);

        CarLot.bgAndBorderChange(this, "tomato");

        //resets background color if input is not changed
        // document.querySelectorAll(".cardInfo").forEach(function (item) {
        //   if (item.className === "cardInfo userTarget") {
        //     item.className = "cardInfo";
        //   }
        // })

        //this.className = "cardInfo userTarget";


      })
    }

    // oldCarLot.activateMoreEvents = function (event) {
    // }
    // oldCarLot.activateEvenMoreEvents = function (event) {
    // }

    document.getElementById("searchBar").addEventListener("change", function(event){
      divFocus.querySelector(".desc").innerHTML = event.target.value;
      divFocus.className = "cardInfo";
      document.getElementById("searchBar").value = "";
      document.getElementById("searchBar").blur();
      CarLot.bgAndBorderReset();
      console.log("changing value");
    })

    document.getElementById("searchBar").addEventListener("input", function(event){
      divFocus.querySelector(".desc").innerHTML = event.target.value;
      console.log("changing value");
    })

    console.log("event listeners done");
 }


  return oldCarLot;
})(CarLot);

//what if statement returns:
// <div class='row'>
//   <div class='col-xs-3 card'><div class='cardInfo'></div></div>
//   <div class='col-xs-3 card'><div class='cardInfo'></div></div>
//   <div class='col-xs-3 card'><div class='cardInfo'></div></div>
// </div>
// <div class='row'>
//   <div class='col-xs-3 card'><div class='cardInfo'></div></div>
//   <div class='col-xs-3 card'><div class='cardInfo'></div></div>
//   <div class='col-xs-3 card'><div class='cardInfo'></div></div>
// </div>

