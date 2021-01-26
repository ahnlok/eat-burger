$(function() {
    // Add function
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger ={
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };
        
        // Send AJAX for "POST" request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added New Burger");
            location.reload();
    });

    // Put it in devoured list
    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = { 
            devoured: 1
        };

        // Send AJAX PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
                console.log("changed eat list to", devouredState);
                // Reload
                location.reload();
        });
    });
    // Delete Function
    $(".delete").on("click", function(event){
        event.preventDefault();
        
        var id = $(this).data("id");
        // Send AJAX for DELETE request
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
        });
    });

});