const User = require('./user')
const Houses = require('./houses')
const Category = require('./category')

Houses.belongsToMany(Category,{through:"house_category"})
Category.belongsToMany(Houses,{through:"house_category"})

Houses.belongsToMany(User,{through:"user_favorites"})
User.belongsToMany(Houses,{through:"user_favorites"})

module.exports = {User:User, Houses, Category}