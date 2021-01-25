$(function() {
    $(".eat-burger").on("click", function(event) {
        var id = $(this).data("id");
        var newEat = $(this).data("neweat");

        var newEatState = {
            eat: newEat
        };

        var currentURL = window.location.origin;
        // Send AJAX PUT request
        $.ajax(currentURL + "/api/burgers/eat/" + id, {
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
        
        var currentURL = window.location.origin;
        // Send AJAX for DELETE request
        $.ajax(currentURL + "/api/burgers/" + id, {
            type: "DELETE",

        }).then(function () {
            console.log(`id: ${id} is deleted!`);
            $(".devoured-burger" + id).remove();
        });
    });
    // Add function
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        if($("#burger-name").val() === "") {
            console.log("What is the burger name you want to add?");
        } else {
            var newBurger = {
                name: $("#burger-name").val().trim(),
        };
        
        var currentURL = window.location.origin;
        // Send AJAX for "POST" request
        $.post(currentURL + "/api/burgers", newBurger) 
        .then(function (data) {
            console.log(data);
            location.reload();
        });
        };
    });
});