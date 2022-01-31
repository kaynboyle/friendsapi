const { Schema, model } = require("mongoose");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: true,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (time) => {
        new Date(time).toLocaleDateString();
      },
    },
  },
  {
    toJSON: {
      virtual: true,
    },
    id: false,
  }
);

//const Reaction = model("reaction", ReactionSchema);

module.exports = ReactionSchema;
