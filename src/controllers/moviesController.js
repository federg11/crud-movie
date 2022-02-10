let fs = require("fs");
let path= require("path");

let dataJson = fs.readFileSync(path.join(__dirname, "../data/movies.json"));
JSON.parse(dataJson);
let movies = JSON.parse(dataJson);

function writeJson() {
    let data = JSON.stringify(movies, null, 4);
    fs.writeFileSync(path.join(__dirname, "../data/movies.json"), data)
    return
}


module.exports = {
    list: (req, res)=>{
        res.render("movie-list", {movies});
        
    },
    detail: (req, res)=> {
        let movieEncontrada = movies.find(function(movie){
            return movie.id == req.params.id;
        })

        res.render("movie-detail", {movie: movieEncontrada});
    },
    create: (req, res) => {
        res.render("movie-create-form");
    },
    store: (req, res) => {
        let newMovie = {
            id: movies.length + 1,
            title: req.body.title,
            genre: req.body.genre,
            rating: Number(req.body.rating),
            image: req.file.filename
        }
        movies.push(newMovie);
        writeJson();
        res.redirect("/movies/list");
    },
    edit: (req, res) => {
        //busco una pelicula
        let movieEncontrada = movies.find(function (movie) {
            return movie.id == req.params.id;
        });

        res.render("movie-edit-form", {movie: movieEncontrada});
    },
    update: (req, res) => {
        // traer la pelicula para modificar
        let movie = movies.find(function(movie){
            return movie.id == req.params.id;
        })

        movie.title = req.body.title;
        movie.rating = Number(req.body.rating);
        movie.genre = req.body.genre;
        movie.image = req.file ? req.file.filename : movie.image;

        writeJson();
        res.redirect("/movies/list");
    },
    destroy: (req, res) => {
        const movie = movies.find(function (movie) {
            return movie.id == req.params.id;
        })
        const movieIndex = movies.findIndex(function (movie) {
            return movie.id == req.params.id;
        });
        movies.splice(movieIndex, 1);
        fs.unlinkSync(path.join(__dirname, "../../public/images/" + movie.image));
        writeJson();
        res.redirect("/movies/list");
    }

};