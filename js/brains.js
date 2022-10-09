$(document).ready(function(){
    $(document).on("click", ".list-group-item", function(){
        var thisButton = $(this);
        $(".list-group-item").removeClass("active");
        thisButton.addClass("active");
    })
})