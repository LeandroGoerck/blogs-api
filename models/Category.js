module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  // Category.associate = (models) => {
  //   Category.belongsTo(models.BlogPost, { foreignKey: 'userId', as: 'User' });
  // };
  
  return Category;
};