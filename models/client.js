module.exports = function(sequelize, DataTypes) {
  var ClientSchema = sequelize.define("Client", {
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    goals: DataTypes.STRING,
    timeFrame:DataTypes.INTEGER,
    daysPerWeek: DataTypes.INTEGER,
    workoutLength: DataTypes.INTEGER,
    experienceLevel: DataTypes.STRING
  });
  return ClientSchema;
};

