const postServices = require('../services/postServices');
const authServices = require('../services/auth');

const createNewPost = async (req, res) => {
  const { authorization } = req.headers;
  const isLogged = await authServices.checkJWT(authorization);
  if (isLogged) {
    const createdPost = await postServices.createNewPost(req.body);
    return res.status(201).json(createdPost);
  }
};

const getAll = async (req, res) => {
  const { authorization } = req.headers;
  const isLogged = await authServices.checkJWT(authorization);
  if (isLogged) {
    const postsData = await postServices.getAll();
    res.status(200).json(postsData);
  }
};

const getById = async (req, res) => {
  const { authorization } = req.headers;
  const isLogged = await authServices.checkJWT(authorization);
  if (isLogged) {
    const { id } = req.params;
    const postData = await postServices.getById(id);
    res.status(200).json(postData);
  }
};

module.exports = {
  createNewPost,
  getAll,
  getById,
};