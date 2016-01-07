$(function () {

    $(".navigation").animate({
        opacity: 1
    }, 500);

    setTimeout(function () {
        $('.main-content').animate({
            opacity: 1
        }, 500);
    }, 50);


    $(".brand").on("click", function () {
        window.location.pathname = "/";
    });

    $('#github').tooltip();
    $('#linkedin').tooltip();
    $('#resume').tooltip();
    $('#sendemail').tooltip();
    $('#snap-icon').tooltip();

    var date = new Date();
    $(".footer-date").append(date.getFullYear());
    
    var snapHover = function () {
        
    };
    
    snapHover();

    // dynamic alts & titles
    $(".snap").each(function(){
        var $alt = $(this).find(".portfolio-snap-description").text();
        var $title = $(this).find(".snap-title").text();
 
        $(this).find("img").attr("alt", $alt);
        $(this).find("img").attr("title", $title);
    });
    
    // snaps/work presentation modals
    $(".portfolio-snaps img").on("click", function () {
        
        $(".modal-body img").attr("src", $(this).attr("src"));
        $(".snap-description").text($(this).attr("alt"));
        $(".modal-title").text($(this).attr("title"));

        $("#snapUp").modal({});
        
    });

}); // Main function end