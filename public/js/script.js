(function () {
    var $currentPage = window.location.pathname;
    
//    console.log($currentPage);
    
    var $menu = $(".main-menu").find("li");
    
    $.each($menu, function(idx, items, array) {
        var $text = $(items).text();
        var $path = "/" + $text.toLowerCase();
        
        if ($path == $currentPage) {
            $(this).addClass("current-menu-item");
        }
        
        
    });
    
    var ProjectColor = "#fff";

    function openOverlayMenu() {
        $(".overlay-menu-open").on("click", function () {
            $("#menu-overlay").removeClass("menu-overlay--close").addClass("menu-overlay--open");
        });
    }

    function closeOverlayMenu() {
        $(".overlay-menu-close").on("click", function () {
            $("#menu-overlay").removeClass("menu-overlay--open").addClass("menu-overlay--close");
        });
    }

    function projectNotesHighlight() {
        $(".project-notes").css("background-color", ProjectColor);
        $(".project-highlight").css("background-color", ProjectColor);
    }

    var getTemplate = function getTemplate (name, cb) {
        $.get("/templates/" + name + ".handlebars", function (result) {
            var _compiled = Handlebars.compile(result);
            cb(_compiled);
        }, "html");
    };

    $(document).on("ready", function () {
        $("body").animate({
            opacity: 1
        });

        function init() {
            openOverlayMenu();
            closeOverlayMenu();
            // projectNotesHighlight();
        };

        init();
    });

}());