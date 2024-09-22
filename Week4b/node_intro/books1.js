function getDataFromAPI() {
    var url = "http://localhost:8080"; 
    $.get(url, function(data, status){
        var result = "<ul>";
        for (var i = 0; i < data.length; i++) {
            result += "<li>" + data[i].title + " " + data[i].author + "</li>";
        }
        result += "</ul>";
        $("#results_container").html(result);
    });    
}

window.addEventListener("load", (event) => {
    getDataFromAPI();
});
