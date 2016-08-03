document.getElementById("submitButton").addEventListener("click", function(event){
    event.preventDefault()
});

var CarLot = (function () { //iffe
  var inventory = [];

  return {
    activateEvents: function() {
      var cards = document.querySelectorAll('div.cardInfo');
      for (var i=0; i<cards.length; i++) {
        cards[i].addEventListener("click",function(){

          //resets background color if input is not changed
          document.querySelectorAll(".cardInfo").forEach(function (item) {
            if (item.className === "cardInfo userTarget") {
              item.className = "cardInfo";
            }
          })

          this.className = "cardInfo userTarget";
          divFocus = this;
          document.getElementById("searchBar").placeholder = "";
          document.getElementById("searchBar").value = "";
          document.getElementById("searchBar").focus();
          console.log(divFocus);
        })
          // this.style.backgroundColor = "black";
          // 
          //doesn's work ^


        
        // cards[i].addEventListener("mouseup", function(){
        //   // this.style.backgroundColor = "";
        //   // this.style.borderWidth = "";
        //   this.className = "cardInfo";
        // })
      }

    },

    getInventory: function () {

    },
    loadInventory: function (callback) {           //callback function *

      var inventoryLoader = new XMLHttpRequest();  //XHR, or xml request object  //

      inventoryLoader.open('GET', 'inventory.json');

      inventoryLoader.onreadystatechange = function () {
        if (inventoryLoader.readyState === 4) {
          inventory = JSON.parse(inventoryLoader.responseText);
          // callback(inventory); ??
        }
      }

      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () { //event goes in argument? or nah?
        populatePage(inventory);
      });
    }
  };

})();



