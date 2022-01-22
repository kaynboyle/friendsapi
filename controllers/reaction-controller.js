const { Reaction } = require('../models');

const reactionController = {
    getAllReactions(req, res) {
        Reaction.find({})
        .then(dbReactionData => res.json(dbReactionData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    getReactionById({params}, res) {
        Reaction.findOne({_id: params.id})
        .then(dbReactionData => {
        if (!dbReactionData) {
            console.log("there is no Reaction with this id");
            res.status(404).json(err);
            return;
        }
        res.json(dbReactionData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

    }, 
    updateReaction({params}, res) {
        Reaction.findByIdAndUpdate({_id: params.id}, body, { new:true })
            .then(dbReactionData => {
                if (!dbReactionData) {
                    res.status(404).json({message: 'No Reaction found with tis id'});
                    return;
                }
                res.json(dbReactionData);
            })
            .catch(err => res.status(400).json(err));
    },
    createReaction({body}, res){
        Reaction.create(body)
            .then(dbReactionData => res.json(dbReactionData))
            .catch(err => res.status(400).json(err));
    },
    deleteReaction({params}, res) {
        Reaction.findOneAndDelete({_id: params.id})
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

module.exports = reactionController;
