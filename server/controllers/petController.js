console.log('CONTROLLER')
//importing duck object from db
const mongoose = require('mongoose');
var Pet = mongoose.model('Pet');



module.exports = {

    getPets: function (req, res) {
        console.log('getPets function at petController.js')
        var pets;
        Pet.find({}, function (err, pets) {
            if (err) {
                console.log('Error bringing tasks in')
            }
            else {
                console.log('Got the pets at server', pets);
                res.json({message:"Sent cakes data object", data: pets});
            }
            console.log(pets);
        })
    },
    editPet: function (req, res) {
        console.log('petController.js > editPet(), with data', req.body);
        console.log('pet id', req.params.id)
        Pet.findOne({ _id: req.params.id }, function (err, pets) {
            pets.name = req.body.name;
            pets.type = req.body.type;
            pets.skills = req.body.skills;
            pets.description = req.body.description;
            pets.save(function (err, pet) {
                if (err) {
                    console.log('error updating pet @ editPet()');
                }
                else {
                    console.log('pet updated in server', pet);
                    res.json({message:"updated pet"});
                }
            })
        });
    },
    addPet: function (req, res) {
        console.log("POST DATA", req.body);
        var pet = new Pet({
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            skills: req.body.skills
        });
        pet.save(function (err) {
            if (err) {
                console.log('ERROR');
                console.log(err);
                res.json({error_message: err});
            }
            else {
                console.log('added new Pet');
                res.json({message: "successfully added Pet"});
            }
        })
    },


    search: function (req, res) {
        var id;
        console.log('getPet function at petController.js with id', id);
        Pet.findOne({ _id: req.params.id }, function (err, pet) {
            if (err) {
                console.log('Error bringing pet in')
                console.log(err);
            }
            else {
                pets = pet;
                console.log(pet);
            }
            console.log(pet);
            res.json({message:"Sent cakes data object", data: pet});
        })
    },

    delete: function (req, res) {
        console.log('getting to delete function in petController.js');
        console.log(req.params.id);
        Pet.remove({ _id: req.params.id }, function (err) {
            if(err){
                res.json({message:"adoption didn't go through... "});
            }
            else{
                res.json({message:"Pet is adopted"});
            }
            
        })
    }

};