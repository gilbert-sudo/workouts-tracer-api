const express = require('express')
const requireAuth = require('../middleware/requireAth');
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//verify if there is a valid token
router.use(requireAuth)

// GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router