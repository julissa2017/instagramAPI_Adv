// YOUR CODE GOES HERE
var clientID = "3565fe59fc166cb7f5a0ab9b7c982cc8";

$(document).ready(function() {
    $("#search-btn").click(function() {
        var userInput = $("#search-query").val();

        searchFlickr(clientID, userInput, 10, function(photos) {
            console.log(photos.photo[0].title);
            for (var i = 0; i < photos.photo.length; i++) {
                photos.photo[i].url_s;
                $("#search-results").append("<img src = " + photos.photo[i].url_s +">");
                
            }

        });
    });
    $("#reset-btn").click(function(){
        $("#search-results").empty();
    })
});