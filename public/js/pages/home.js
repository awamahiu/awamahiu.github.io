(function () {
    var Projects = {
        Project: [{
            page: "typtap-webapp",
            projectType: "Web App, UI/UX, Development",
            projectName: "TypTap Insurance",
            imgSrc: imgSrc("features/typtap-customize", "jpg")
            }, {
            page: "atlasviewer",
            projectType: "Responsive Web App, UI/UX, Branding",
            projectName: "Atlas Viewer",
            imgSrc: imgSrc("features/atlas-marketing", "jpg")
            }]
    }
    
    $(document).ready(function () {
        getTemplate("features", function (param) {

            var _projects = Projects;

            $(".feature-area").append(param(_projects));
        });
    });

}());