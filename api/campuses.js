const router = require('express').Router();
const { Campus, Student } = require('../db/models');

/**
 * GET /api/campuses
 * Returns all campuses
 */
router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
        order: [['name', 'ASC']]
      });
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/campuses/:campusId
 * Returns one campus + its students
 */
router.get('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId, {
      include: {
        model: Student
      }
    });

    if (!campus) {
      res.status(404).send('Campus not found');
    } else {
      res.json(campus);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
