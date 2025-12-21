const Campus = require('./Campus');
const Student = require('./Student');

Campus.hasMany(Student, { foreignKey: 'campusId' });
Student.belongsTo(Campus, { foreignKey: 'campusId' });

module.exports = {
  Campus,
  Student
};
