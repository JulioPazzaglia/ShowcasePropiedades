const S = require("sequelize")
const db = require("../config/db");

class Houses extends S.Model {}

Houses.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    },
    availableName:{
      type: S.VIRTUAL,
      get: function() {
      return this.available? this.name:`${this.name} - NOT AVAILABLE`;
      }
    },
    description: {
      type: S.TEXT,
      allowNull: false
    },
    truncate: {
      type: S.TEXT
    },
    price: {
      type: S.FLOAT,
      allowNull: false
    },
    location: {
      type: S.STRING,
      allowNull: false
    },
    image: {
      type: S.STRING,
      allowNull: false
    },
    available: {
      type: S.BOOLEAN,
      defaultValue: true
    },
  },
  { sequelize: db, modelName: "houses" }
)

Houses.addHook("beforeCreate", async house => {
  house.truncate = `${house.description.slice(0,30)}...`;
})

module.exports = Houses