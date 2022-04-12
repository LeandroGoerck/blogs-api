const { Category } = require('../models');
const ERR = require('./errorMessages');

const createNewCategory = async (data) => {
  if (!data.name) throw ERR.NAME_IS_REQUIRED;
  const createdCategory = await Category.create(data);
  return {
    status: 201,
    createdCategory,
  };
};

module.exports = {
  createNewCategory,
};