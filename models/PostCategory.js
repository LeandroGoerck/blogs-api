module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    categoryId: DataTypes.STRING,
  }, { timestamps: false, tableName: 'PostCategories' });
  
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories', through: PostCategory, foreignKey: 'categoryId', otherKey: 'postId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts', through: PostCategory, foreignKey: 'postId', otherKey: 'categoryId',
    });
  };

  return PostCategory;
};