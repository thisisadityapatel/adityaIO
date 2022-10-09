$(document).ready(function(){
    $(document).on("click", ".list-group-item", function(){
        var thisButton = $(this);
        $(".list-group-item").removeClass("active");
        thisButton.addClass("active");
    })
    
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=-79.3832&lat=43.6532",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "2fcda4957emsh4e87741b3cc4119p1bb358jsn63e9b8c5e378",
            "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com"
        }
    };
    
    /*$.ajax(settings).done(function (response) {
        console.log(response);

        var temp = response.data[0].app_temp;
        var snow = response.data[0].snow;
        var rain = response.data[0].precip;

        $(".tempInputSpan").html(temp);
        $(".snowInputSpan").html(snow);
        $(".rainInputSpan").html(rain);
    });*/
})