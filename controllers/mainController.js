module.exports = {
    index: (req, res) => {
        res.render("index")
    },
    about: (req, res) => {
        res.render("about")
    },
    contact: (req, res) => {
        res.render("contact")
    },
    skills: (req, res) => {
        res.render("skills")
    },
    projects: (req, res) => {
        res.render("projects")
    }
}