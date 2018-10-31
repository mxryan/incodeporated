module.exports = function(sequelize, DataTypes) {
  const Questions = sequelize.define("Questions", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 99
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 45]
      }
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    codeBlock: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    correct: {
      type: DataTypes.STRING,
      allowNull: false
    },
    incorrect1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    incorrect2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    incorrect3: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Questions;
};
