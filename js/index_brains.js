$(document).ready(function(){

    $(document).on("click", "#sideNavBarOpen",function(){
        $("#sideNavBar").addClass("show");
        $("#sideNavBar").css("visibility", "visible");
    })

    $(document).on("click", "#sideNavBarClose", function(){
        $("#sideNavBar").css("visibility", "none");
        $("#sideNavBar").removeClass("show");
    })

})