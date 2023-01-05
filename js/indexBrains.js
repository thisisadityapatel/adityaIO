$(document).ready(function(){
    $(document).on("click", ".aboutNavProjects", function(){
        $("#sidebarNav1").css("visibility", "hidden");
        $("#sidebarNav1").removeClass("show");

        $("#sidebarNavProjects").addClass("show");
        $("#sidebarNavProjects").css("visibility", "visible");
    })

    $(document).on("click", ".navProjectsBackBtn", function(){
        $("#sidebarNavProjects").removeClass("show");
        $("#sidebarNavProjects").css("visibility", "hidden");

        $("#sidebarNav1").css("visibility", "visible");
        $("#sidebarNav1").addClass("show");
    })

    $(document).on("click", ".aboutNavExperience", function(){
        $("#sidebarNav1").css("visibility", "hidden");
        $("#sidebarNav1").removeClass("show");

        $("#sidebarNavExperience").addClass("show");
        $("#sidebarNavExperience").css("visibility", "visible");
    })

    $(document).on("click", ".navExperienceBackBtn", function(){
        $("#sidebarNavExperience").removeClass("show");
        $("#sidebarNavExperience").css("visibility", "hidden");

        $("#sidebarNav1").css("visibility", "visible");
        $("#sidebarNav1").addClass("show");
    })

    $(document).on("click", ".directPage",function(){
        var navto = $(this).data("navto");
        $(".portfolioElement").addClass("d-none");
        $(".experinceDisplay").addClass("d-none");
        $(".indProjDetails").addClass("d-none");
        $("." + navto).removeClass("d-none");
    })
    
    var tempString = "";
    var tempString2 = "";

    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/thisisadityapatel/repos",
        dataType: "json",

        success: function(data){
            for(var i = 0; i < data.length; i++){
                var thisProject = data[i];
                tempString += "<li>";
                tempString += "<button class='btn projectButton text-right' data-bs-dismiss='offcanvas' data-bs-target='#sidebarNav1' data-navid='" + thisProject.id + "'><span>" + thisProject.name + "</span></button>"
                tempString += "</li>";

                tempString2 += "<div class='d-none indProjDetails' id='" + thisProject.id + "'>";
                    tempString2 += "<h2 class='text-center mt-4'>" + thisProject.name + "</h2>";
                    tempString2 += "<div class='mt-5'>";
                        tempString2 += "<div class='h5 text-secondary' style='font-style: italic'>Description</div>";
                        tempString2 += "<hr>";
                        tempString2 += "<div>" + thisProject.description + "</div>";
                    tempString2 += "</div>";
                    tempString2 += "<div class='mt-5'>";
                        tempString2 += "<div class='h5 text-secondary' style='font-style: italic'>Technology & Concepts</div>";
                        tempString2 += "<hr><div>";
                            for(var j = 0; j < thisProject.topics.length;  j++){
                                tempString2 += "<span class='skillDesign'>" + thisProject.topics[j] + "</span>";
                            }
                        tempString2 += "</div>";
                    tempString2 += "</div>";
                    tempString2 += "<div class='mt-5'>";
                        tempString2 += "<a class='btn btn-secondary projectVisitLink' href='" + thisProject.html_url + "' target='_blank'>Visit <i class='bi bi-box-arrow-up-right ms-1'></i></a>";
                    tempString2 += "</div></div>";
            }

            $(".projectListings").html(tempString);
            $(".projectDescription").html(tempString2);
        }
    })

    $(document).on("click", ".projectButton", function(){
        thisProj = $(this).data("navid");
        $(".indProjDetails").addClass("d-none");
        $(".experinceDisplay").addClass("d-none");
        $(".portfolioElement").addClass("d-none");
        $("#" + thisProj).removeClass("d-none");

        $("#sidebarNav1").css("visibility", "hidden");
        $("#sidebarNav1").removeClass("show");

        $("#sidebarNavProjects").removeClass("show");
        $("#sidebarNavProjects").css("visibility", "hidden");
    })

    $(document).on("click", ".experienceButton", function(){
        var thisEdu = $(this).data("navto");

        $(".portfolioElement").addClass("d-none");
        $(".experinceDisplay").addClass("d-none");
        $(".indProjDetails").addClass("d-none");
        $("#" + thisEdu).removeClass("d-none");

        $("#sidebarNav1").css("visibility", "hidden");
        $("#sidebarNav1").removeClass("show");

        $("#sidebarNavExperience").removeClass("show");
        $("#sidebarNavExperience").css("visibility", "hidden");
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
    
    $.ajax(settings).done(function (response) {
        var temp = Math.round((response.data[0].temp) * 100) / 100;
        var snow = Math.round(response.data[0].snow * 100) / 100;
        var rain = Math.round(response.data[0].precip * 100) / 100;

        $(".tempInputSpan").html(temp);
        $(".snowInputSpan").html(snow);
        $(".rainInputSpan").html(rain);
    });
})