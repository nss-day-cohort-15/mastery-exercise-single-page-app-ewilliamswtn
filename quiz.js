//CarLot augmentor iife for event handlers

var CarLot = (function (oldCarLot) {
  oldCarLot.populatePage = function (inventoryPH) {
    console.log(inventoryPH);

    var cards = document.querySelectorAll('div.cardInfo');

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
       //cards[i].style.border = "2px solid " + inventory.cars[i].color;
      //this is why dynamic borders dont work on click event^

    }

  }

  oldCarLot.activateEvents = function () {
    document.getElementById("submitButton").addEventListener("click", function(event){
        event.preventDefault()
    });

    var cards = document.querySelectorAll('div.cardInfo');

    for (var i=0; i<cards.length; i++) {
      cards[i].addEventListener("click",function(){

        //resets background color if input is not changed
        // document.querySelectorAll(".cardInfo").forEach(function (item) {
        //   if (item.className === "cardInfo userTarget") {
        //     item.className = "cardInfo";
        //   }
        // })

        //this.className = "cardInfo userTarget";


        divFocus = this;
        document.getElementById("searchBar").placeholder = "";
        document.getElementById("searchBar").value = "";
        document.getElementById("searchBar").focus();
        //console.log(divFocus);

        CarLot.bgAndBorderChange(this, "tomato");

      })
    }

    oldCarLot.activateMoreEvents = function (event) {
      divFocus.querySelector(".desc").innerHTML = event.target.value;
      divFocus.className = "cardInfo";
      document.getElementById("searchBar").value = "";
      document.getElementById("searchBar").blur();
      CarLot.bgAndBorderReset();
    }

    oldCarLot.activateEvenMoreEvents = function (event) {
      divFocus.querySelector(".desc").innerHTML = event.target.value;
    }

 }


  return oldCarLot;
})(CarLot);

CarLot.loadInventory(CarLot.populatePage);
CarLot.activateEvents();
