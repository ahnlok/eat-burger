$(function() {
    // Add function
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger ={
            burger_name: $("#brgr").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim(),
        };
        
        // Send AJAX for "POST" request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added New Burger");
            location.reload();
        });
    });

    // Put it in devoured list
    $(".change-devour").on("click", function(event) {

        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevour");
            console.log(id);
        var newDevouredState = { 
            devoured: newDevoured,
        };

        // Send AJAX PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function() {
                console.log("changed eat list to", newDevoured);
                // Reload
                location.reload();
        });
    });
    // Delete Function
    // $(".delete").on("click", function(event){
    //     event.preventDefault();
        
    //     var id = $(this).data("id");
    //     // Send AJAX for DELETE request
    //     $.ajax({
    //         type: "DELETE",
    //         url: "/api/burgers/" + id
    //     }).then(location.reload());
    //     });
    // });

});