const { DataTypes } = require('sequelize');
const db = require('../index');

const Student = db.define('student', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue:
      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
  },
  gpa: {
    type: DataTypes.DECIMAL(3, 2),
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

module.exports = Student;
