$(function () {
    $(".change-devour").on("click", function (event) {
        event.preventDefault();
        
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevour");
      console.log(id);
  
      var newDevouredState = {
        devoured: newDevoured,
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState,
      }).then(function () {
        console.log("changed devour to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#brgr").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    });
});