
function getBookHtmlTable() {
    var url = "http://localhost:8080";

    $("#pleasewait").show();

    //stupid timer/bad delay taxtic to demo the please wait
    for (var i = 0; i < 200000; i++) {
        console.log(i);
    }

    $.ajax({
        url: url,
        type: "GET",
        success: function (data) {

            //take the json array of results (list of objects) and construct an HTML string to display
            var results = "<table class='table table-dark table-striped table-hover'>";
            results += "<tr><th>Title</th><th>Author</th></tr>";
            for (var i = 0; i < data.length; i++) {
                var book = data[i]; //each book in the list
                results += "<tr><td>" + book.title + "</td><td>" + book.author + "</td></tr>";
            }
            results += "</table>";

            //set the html on the page
            $("#content_div").html(results);
            $("#pleasewait").hide();
        },
        error: function (xhr, status) {
            $("#pleasewait").hide();
            alert("An error has occured (is your backend running?)  ");
        }
    });
}
    
$(document).ready(function(){   
    getBookHtmlTable();;
});
