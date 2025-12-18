const Campus = require('./Campus');
const Student = require('./Student');

// associations (later, but safe to add now)
Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  Campus,
  Student
};
