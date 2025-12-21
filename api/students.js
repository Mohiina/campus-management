const router = require('express').Router();
const { Student, Campus } = require('../db/models');

/**
 * GET /api/students
 * Returns all students
 */
router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({
        order: [['lastName', 'ASC']]
      });
    res.json(students);
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/students/:studentId
 * Returns one student + their campus
 */
router.get('/:studentId', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId, {
      include: {
        model: Campus
      }
    });

    if (!student) {
      res.status(404).send('Student not found');
    } else {
      res.json(student);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
