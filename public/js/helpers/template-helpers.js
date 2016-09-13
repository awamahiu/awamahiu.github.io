var getTemplate = function getTemplate(name, cb) {
    $.get("/templates/" + name + ".handlebars", function (result) {
        var _compiled = Handlebars.compile(result);
        cb(_compiled);
    }, "html");
};

var getLocalData = function getLocalData(name) {
    $.getJSON("/data/" + name);
}

var imgSrc = function imgSrc(source, filetype) {
    return "/img/" + source + "." + filetype;
}