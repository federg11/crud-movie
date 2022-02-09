let fs = require("fs");
let path= require("path");

let dataJson = fs.readFileSync(path.join(__dirname, "../data/movies.json"));
JSON.parse(dataJson);
let movies = JSON.parse(dataJson);


module.exports = {
    list: (req, res)=>{
        res.render("movie-list", {movies});
        
    },
    detail: (req, res)=> {
        res.render("movie-detail.ejs")
    },

};