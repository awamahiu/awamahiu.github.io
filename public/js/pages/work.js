(function () {
    var Projects = {
        Project: [{
            page: "typtap-webapp",
            projectType: "Development, UI/UX",
            projectName: "TypTap Insurance",
            imgSrc: imgSrc("features/typtap-customize", "jpg")
            }, {
            page: "atlasviewer",
            projectType: "Responsive Web App, UI/UX, Branding",
            projectName: "Atlas Viewer",
            imgSrc: imgSrc("features/atlas-marketing", "jpg")
            }, {
            page: "movehq",
            projectType: "UI/UX, Branding",
            projectName: "MoveHQ",
            imgSrc: imgSrc("features/movehq", "jpg")
            }]
    }

    var Snaps = {
        Snap: [{
            name: "Managing 'Zero Data'",
            title: "ManagingZeroData",
            imgSrc: imgSrc("snaps/titan_zero_data", "png"),
            description: "When an applications interface is being created, it's usually built with data in mind. But what happens when there is no data? This snap represents the 'empty state' of an app used for geospatial analysis."
            }, {
            name: "Limiting User Options",
            title: "LimitingUserOptions",
            imgSrc: imgSrc("snaps/Trice_MockUp_Quotes", "jpg"),
            description: "Creating a great user experience often means condensing a huge task into it's simplest form. One strategy is to limit user options. As an added benefit, business goals can be optimized within these limitations."
            }, {
            name: "Building A Menu",
            title: "AtlasMenuConcept",
            imgSrc: imgSrc("snaps/Menu_Concept_1", "gif"),
            description: "Global navigation in dynamic applications can be difficult to build, especially when a lot of data needs to be managed. This snap is an early concept that was designed to be neatly tucked away when it wasn't being used."
            }, {
            name: "Color Picker",
            title: "ColorPicker",
            imgSrc: imgSrc("snaps/colorpicker", "jpg"),
            description: "This snap was designed as part of a fun, little side project. The goal was to make an easy to use color picker to be used in a mapping application."
            }, {
            name: "MoveHQ Landing Wireframe",
            title: "MoveHQLandingWireframe",
            imgSrc: imgSrc("snaps/moveHQ_landing_wire", "jpg"),
            description: "One of the most powerful tools in a designer's disposal is being able to create wireframes. Several strategic components such as content and navigation can be explored, tested and iterated over quickly at low cost."
            }, {
            name: "MoveHQ Responsive Web App",
            title: "MoveHQResponsiveWebApp",
            imgSrc: imgSrc("snaps/moveHQ_mobile_desktop", "jpg"),
            description: "The concept behind MoveHQ lent itself beautifully to being a responsive web app. This snap is a mockup of the landing page (above-the-fold) on both mobile and desktop platforms."
            }, {
            name: "Usability Icon",
            title: "UsabilityIcon",
            imgSrc: imgSrc("snaps/titan_usability", "jpg")
            }, {
            name: "Big Data Icon",
            title: "BigDataIcon",
            imgSrc: imgSrc("snaps/titan_bigdata", "jpg")
            }, {
            name: "Pin Popup Icon",
            title: "PinPopupIcon",
            imgSrc: imgSrc("snaps/titan_popup", "jpg")
            }, {
            name: "User Onboarding Widget",
            title: "UserOnboardingWidget",
            imgSrc: imgSrc("snaps/onboard_widget", "jpg"),
            description: "A minimalist onboarding interface."
            }, {
            name: "Layering",
            title: "Layering",
            imgSrc: imgSrc("snaps/ui_layers", "jpg"),
            description: "This snap was originally created as for marketing purposes. It represents the different layers that bring an application to life, from data to interface."
            }, {
            name: "Watson Engineer Co. Logo",
            title: "WatsonEngineerCoLogo",
            imgSrc: imgSrc("snaps/watson_comp", "jpg")
            }, {
            name: "Jaslika Holdings Logo",
            title: "JaslikaHoldingsLogo",
            imgSrc: imgSrc("snaps/brand_starburst", "gif")
            }]
    }

    getTemplate("projects", function (param) {
        var _projects = Projects;
        $(".feature-area").append(param(_projects));
    });

    getTemplate("snaps", function (param) {
        var _snaps = Snaps;
        $(".snaps-area").append(param(_snaps));
    });

}());