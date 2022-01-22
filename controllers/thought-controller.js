const { Thought } = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    getThoughtById({params}, res) {
        Thought.findOne({_id: params.id})
        .then(dbThoughtData => {
        if (!dbThoughtData) {
            console.log("there is no Thought with this id");
            res.status(404).json(err);
            return;
        }
        res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

    }, 
    updateThought({params}, res) {
        Thought.findByIdAndUpdate({_id: params.id}, body, { new:true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({message: 'No Thought found with tis id'});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    },
    
    deleteThought({params}, res) {
        Thought.findOneAndDelete({_id: params.id})
            .then(dbThoughtData => {
                if (!dbThoughtData){
                    res.status(404).json({message: 'No Thought with this id'});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = thoughtController;
