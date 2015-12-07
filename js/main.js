$(function () {

    var currentPage = window.location.pathname;
    console.log(currentPage);

//    if (currentPage === "/work") {
//        $(".workpage").addClass("active-page");
//    } else {
//        $(".homepage").addClass("active-page");
//    }


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
    
    var date = new Date();
    console.log(date.getFullYear());

}); // Main function end
;
