const { User } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    getUser({params}, res) {
        User.findOne({_id: params.id})
        .then(dbUserData => {
        if (!dbUserData) {
            console.log("there is no user with this id");
            res.status(404).json(err);
            return;
        }
        res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

    }, 
    updateUser({params}, res) {
        User.findByIdAndUpdate({_id: params.id}, body, { new:true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({message: 'No User found with tis id'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    createUser(req, res){

    },
    deleteUser({params}, res) {
        User.findOneAndDelete({_id: params.id})
            .then(dbUserData => {
                if (!dbUserData){
                    res.status(404).json({message: 'No user with this id'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = userController;
