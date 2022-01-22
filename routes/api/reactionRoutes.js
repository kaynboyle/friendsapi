const router = require('express').Router();
const {
  getAllReactions,
  getReactionById,
  createReaction,
  updateReaction,
  deleteReaction
} = require('../../controllers/reaction-controller');

// /api/Reactions
router
  .route('/')
  .get(getAllReactions)
  .post(createReaction);

// /api/Reactions/:id
router
  .route('/:id')
  .get(getReactionById)
  .put(updateReaction)
  .delete(deleteReaction);

module.exports = router;