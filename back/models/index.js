const User = require('./user')
const Houses = require('./houses')
const Category = require('./category')

Houses.belongsToMany(Category,{through:"house_category"})
Category.belongsToMany(Houses,{through:"house_category"})

module.exports = {User:User, Houses, Category}