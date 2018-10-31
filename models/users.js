// do we need a field for hashed passwords?
var bcrypt = require("bcrypt-nodejs");
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 45]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correct: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
    
  });
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    Users.prototype.validPassword = function (password) {
      return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    Users.hook("beforeCreate", function (user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return Users;
}
