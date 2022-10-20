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
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        var temp = response.data[0].temp;
        var snow = response.data[0].snow;
        var rain = response.data[0].precip;

        $(".tempInputSpan").html(temp);
        $(".snowInputSpan").html(snow);
        $(".rainInputSpan").html(rain);
    });

    $(document).on("click", ".aboutNav", function(){
        var thisDiv = $(this).data("navto");
        $(".aboutDivision").addClass("d-none");
        $("#" + thisDiv).removeClass("d-none");
    })

    $(document).on("click", ".workCompanyNav", function(){
        $(".workCompanyNav").removeClass("compActive");
        $(this).addClass("compActive");
        
        $(".compDisplay").addClass("d-none");
        var thisCompany = $(this).data("companypoint");
        $(document).find("#" +thisCompany + "Comp").removeClass("d-none");
    })

    //Github API Call for listing all the user repositories
    var projectNavString = "";
    var projectDisString = "";

    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/thisisadityapatel/repos",
        dataType: "json",
        success: function(data){
            for(var i = 0; i < data.length; i++){
                var thisProject = data[i];
                projectNavString += "<li class='projGithubNav' data-showProj="+ thisProject.id + ">" + thisProject.name + "</li>";
                projectDisString += "<div id='" + thisProject.id + "' class='projDisplay d-none'>";
                projectDisString += "<div class='githubProjPage'>";
                projectDisString += "<h4>" + thisProject.name + "</h4>";
                projectDisString += "<ul style='padding : 0 !important; margin-top: 1rem'>";

                $.ajax({
                    type: "GET",
                    url: thisProject.languages_url,
                    dataType: "json",
                    success: function(langData){
                        for(let lang in langData){
                            projectDisString += "<li class='skillListing'><span class='skillTitle'>" + lang + "</span></li>";
                        }
                    }
                })

                projectDisString += "</ul>";
                projectDisString += "<h5 class='text-secondary mt-5'>Description</h5>";
                projectDisString += "<hr>";
                projectDisString += thisProject.description;
                projectDisString += "<div class='mt-5'><a href='" + thisProject.html_url + "' class='projVisitLink' target='_blank'><div class='projVisitLinkText'><i class='bi bi-link-45deg'></i> Visit Here </div></a></div>";
                projectDisString += "</div></div>";
            }
            $("#navigationProjectList").html(projectNavString);
            $("#projectDisplayDiv").html(projectDisString);
        }
    })

    //managing the projects and lists
    $(document).on("click", ".projGithubNav", function(){
        $(".projDisplay").addClass("d-none");
        var thisProjCode = $(this).attr("data-showProj");
        console.log(thisProjCode);
        $(document).find("#" + thisProjCode).removeClass("d-none");
    })
})