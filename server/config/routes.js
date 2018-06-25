console.log('*********AT ROUTES.JS FILE*********');
var path = require("path");
const petController = require('../controllers/petController')

module.exports = function(app) {
    app.delete('/adopt/:id', petController.delete);
    app.post('/edit/:id', petController.editPet);
    app.get('/get/pets', petController.getPets);
    app.get('/get/pets/:id', petController.search)
    app.post('/post/new', petController.addPet);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
        }); 
}