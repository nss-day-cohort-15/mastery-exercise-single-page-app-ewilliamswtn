function populatePage (inventory) {

  var cards = document.querySelectorAll('div.cardInfo');

  for (var i=0; i<inventory.cars.length; i++) {

    // var color = inventory.cars[i].color.split(/(?=[A-Z])/);
    // var colorOutput = "";
    // for (var prop in color) {
    //   colorOutput += color[prop] + " ";
    // }

    // console.log(colorOutput);

    cards[i].innerHTML += 
     "<span class='titleSpan'>Manufacturer: </span><span>"
     +  inventory.cars[i].make
     + "</span><br><span class='titleSpan'>Model: </span><span>"
     + inventory.cars[i].model
     + "</span><br><span class='titleSpan'>Year: </span><span>"
     + inventory.cars[i].year
     + "</span><br><span class='titleSpan'>Price: </span><span>" 
     + inventory.cars[i].price
     + "</span><br><span class='titleSpan'>Color: </span><span>"
     + inventory.cars[i].color
     + "</span><br><span class='titleSpan'>Purchased: </span><span>"
     + inventory.cars[i].purchased
     + "</span><br><span class='titleSpan'>Description: </span><span class='desc'>"
     + inventory.cars[i].description
     + "</span";

     cards[i].style.border = "2px solid " + inventory.cars[i].color;


  }

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();

var divFocus = "";

function changeEventHandler(event) {
  console.log(divFocus);
  divFocus.querySelector(".desc").innerHTML = event.target.value;
  divFocus.className = "cardInfo";

}


//work on border showing up when div is targetted
//focus should go back to target div after altering text input, instead of to top
//moving features to separate iffe's, possibly multiple js pages

