$(function() {
    $(".eat-burger").on("click", function(event) {
        var id = $(this).data("id");
        var newEat = $(this).data("neweat");

        var newEatState = {
            eat: newEat
        };

        // Send AJAX PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function() {
                console.log("changed eat list to", newEat);
                // Reload
                location.reload();
            }
        )
    });
    // Delete Function
    $(".delete").on("click", function(event){
        var id = $(this).data("id")
        // Send AJAX for DELETE request
        $.ajax("/api/cats/" + id, {
            type: "DELETE",

        }).then(function() {
            console.log("Deleted Burger " + id);
            location.reload();
        });
    });
    // Add function
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            eat: $("[name=eat]:checked").val().trim()
        };
        // Send AJAX for "POST" request
        $.ajax("/api/burgers", { 
            type: "POST",
            data: newBurger    
        }).then(function() {
            console.log("created new burger");
            location.reload();
        }
        )
    });
});