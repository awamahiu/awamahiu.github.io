var express = require('express');
var router = express.Router();


var pageTitle = "Ali Wamahiu :: ";

function getPageScript(name) {
    return "<script src='/js/pages/" + name + ".js'></script>";
}

/* Main Navigation. */

router.get('/', function (req, res) {
    res.render('index', {
        title:'Home',
        pageScript: getPageScript('home')
    });
});

router.get('/about', function (req, res) {
    res.render('about', {
        title:'About Me'
    });
});

router.get('/services', function (req, res) {
    res.render('services', {
        title:'Services'
    });
});

router.get('/work', function (req, res) {
    res.render('work', {
        title:'Work',
        pageScript: getPageScript("work")
    });
});

router.get('/contact', function (req, res) {
    res.render('contact', {
        title:'Contact'
    })
});

/* Projects */

router.get("/typtap-webapp", function (req, res) {
    res.render("projects/typtap", {
        title:'TypTap Insurance',
        layout: 'project',
        pageScript: getPageScript("projects/typtap"),
        headerImage: "/img/projects/typtap-webapp/Hero.jpg",
        leadImage: "/img/projects/typtap-webapp/Laptop.png",
        wireframeImage: "/img/projects/typtap-webapp/Wireframe.png"
    });
});

router.get("/atlasviewer", function (req, res) {
    res.render("projects/atlasviewer", {
        title:'Atlas Viewer',
        layout: 'project',
        pageScript: getPageScript("projects/atlasviewer"),
        headerImage: "/img/projects/atlasviewer/Hero.jpg",
        leadImage: "/img/projects/atlasviewer/Laptop.png",
        wireframeImage: "/img/projects/atlasviewer/Wireframe.jpg"
    });
});

router.get("/movehq", function (req, res) {
    res.render("projects/movehq", {
        title:'Move HQ',
        layout: 'project',
        pageScript: getPageScript("projects/movehq"),
        headerImage: "/img/projects/movehq/Hero.jpg",
        leadImage: "/img/projects/movehq/Laptop.png",
        wireframeImage: "/img/projects/movehq/Wireframe.jpg"
    });
});


module.exports = router;