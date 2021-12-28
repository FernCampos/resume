const control = require("../controllers/mainController");

module.exports = app => {
    app.get("/", control.index);
    app.get("/about", control.about);
    app.get("/contact", control.contact);
    app.get("/skills", control.skills);
    app.get("/projects", control.projects);
}