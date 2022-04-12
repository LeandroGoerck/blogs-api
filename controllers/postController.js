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
  // const { authorization } = req.headers;
  // const isLogged = await authServices.checkJWT(authorization);
  const isLogged = true;
  if (isLogged) {
    const postsData = await postServices.getAll();
    res.status(200).json(postsData);
  }
};

module.exports = {
  createNewPost,
  getAll,
};