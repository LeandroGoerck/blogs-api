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

const updatePost = async (req, res) => {
  const { authorization } = req.headers;
  const userIdFound = await authServices.checkJWT(authorization);
  if (userIdFound) {
    const { id: postId } = req.params;
    const { title, content, categoryIds } = req.body;
    const userOwnsThePost = await postServices.checkIfUserOwnsThePost(userIdFound, postId);
    if (userOwnsThePost) {
      const postData = await postServices.updatePost(postId, title, content, categoryIds);
      res.status(200).json(postData);
    }
  }
};

const deletePost = async (req, res) => {
  const { authorization } = req.headers;
  const userIdFound = await authServices.checkJWT(authorization);
  if (userIdFound) {
    const { id: postId } = req.params;
    const userOwnsThePost = await postServices.checkIfUserOwnsThePost(userIdFound, postId);
    if (userOwnsThePost) {
      const postData = await postServices.deletePost(postId);
      res.status(204).json(postData);
    }
  }
};

const search = async (req, res) => {
  const { authorization } = req.headers;
  const userIdFound = await authServices.checkJWT(authorization);
  if (userIdFound) {
    const { q: searchTerm } = req.query;
    const postsData = await postServices.search(searchTerm);
    res.status(200).json(postsData);
  }
};

module.exports = {
  createNewPost,
  getAll,
  getById,
  updatePost,
  deletePost,
  search,
};