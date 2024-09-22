function getDataFromAPI() {
    var url = "http://localhost:8080";

    $.get(url, function(data, status){
        console.log(data, status);
        var book_list = "<ul>";
        for (var i = 0; i < data.length; i++) {
            book_list += "<li>" + data[i].title + " " + data[i].author + "</li>";
        }
        book_list += "</ul>";

        $("#results_container").html(book_list);
    });    
}

window.addEventListener("load", (event) => {
    getDataFromAPI();
});









