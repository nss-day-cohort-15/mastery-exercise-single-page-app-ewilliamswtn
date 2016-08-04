//xhr req

var CarLot = (function () {
  var inventory = [];
  return {
    //call this when you want to use the inventory array
    getInventory: function () {
      return inventory;   //does this work? purpose?
    },
    //call this *and pass it a function* to load 
    loadInventory: function (callback) { 

      var xhr = new XMLHttpRequest();
      xhr.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        //console.log(inventory);  //test
        callback(inventory);
      });
      xhr.open("GET", "inventory.json")
      xhr.send();
      console.log("Load inventory done");
       
    }
  }
})();
//done

//test----
// CarLot.loadInventory(inventoryAlert);

// function inventoryAlert (cars) {
//   console.log(cars[0].color);
// }


