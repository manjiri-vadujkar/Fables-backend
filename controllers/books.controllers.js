const fetch = require('node-fetch');
const { getAll, get, getName } = require('../models/Book.model');
const UserFav = require('../models/Userfav.model');
const UserRead = require('../models/Userread.model');
const { getSignedUrl } = require('../common/s3');

module.exports = {
  getBooks,
  getBook,
  getBookChapter,
  getFavs,
  addToFav,
  removeFromFav,
  getRead,
  addToRead
};

async function getBooks(req, res) {
  try {
    const { limit, genre } = req.query;
    const books = await getAll(limit ? limit : 0, genre ? genre : '');
    return res.send({
      data: books,
      message: 'Got books'
    });
  } catch (e) {
    return res.status(500).send({
      data: {},
      message: 'Something went wrong, please try again later'
    });
  }
}

async function getBook(req, res) {
  try {
    const { bookId } = req.params;
    const { userId } = req.decodedToken;
    const book = await get(bookId);
    if (book) {
      const fav = await UserFav.get(userId, bookId);
      if (fav) {
        book.favourite = true;
      } else {
        book.favourite = false;
      }
      const read = await UserRead.get(userId, bookId);
      if (read) {
        book.read = true;
      } else {
        book.read = false;
      }
    }
    return res.send({
      data: book,
      message: 'Got book'
    });    
  } catch (e) {
    console.log(e)
    return res.status(500).send({
      data: {},
      message: 'Something went wrong, please try again later'
    });
  }
}

async function getBookChapter(req, res) {
  try {
    const { bookId, chptName } = req.params;
    const bookName = await getName(bookId);
    const s3Url = `${bookId}-${bookName.trim()}/${chptName}.txt`;
    const signedUrl = await getSignedUrl(s3Url);
    const response = await fetch(signedUrl);
    const data = await response.text();
    if (response.status !== 200) {
      return res.status(response.status).send({
        data: {},
        message: 'Failed to get chapter'
      });
    }
    return res.send({
      data,
      message: 'Got chapter'
    });
  } catch (e) {
    return res.status(500).send({
      data: {},
      message: 'Something went wrong, please try again later'
    });
  }
}

async function getFavs(req, res) {
  try {
    const userId = req.decodedToken.userId;
    const favs =  await UserFav.getAll(userId);
    return res.send({
      data: favs,
      message: 'Got user\'s favourite book list'
    });
  } catch (e) {
    return res.status(500).send({
      data: {},
      message: 'Something went wrong, please try again later'
    });    
  }
}

async function addToFav(req, res) {
  try {
    const { bookId } = req.params;
    const userId = req.decodedToken.userId;
    const favourite = await UserFav.get(userId, bookId);
    if (favourite) {
      return res.status(409).send({
        data: {},
        message: 'Book already in User\'s favourite list'
      });
    }
    await UserFav.add(userId, bookId);
    return res.send({
      data: {},
      message: 'Book added to User\'s favourite list'
    });
  } catch (e) {
    return res.status(500).send({
      data: {},
      message: 'Something went wrong, please try again later'
    });
  }
}

async function removeFromFav(req, res) {
  try {
    const { bookId } = req.params;
    const userId = req.decodedToken.userId;
    const favourite = await UserFav.get(userId, bookId);
    if (!favourite) {
      return res.status(404).send({
        data: {},
        message: 'Book not present in User\'s favourite list. Nothing to remove'
      });
    }
    await UserFav.remove(userId, bookId);
    return res.send({
      data: {},
      message: 'Book removed from User\'s favourite list'
    });
  } catch (e) {
    return res.status(500).send({
      data: {},
      message: 'Something went wrong, please try again later'
    });
  }
}

async function getRead(req, res) {
  try {
    const userId = req.decodedToken.userId;
    const favs =  await UserRead.getAll(userId);
    return res.send({
      data: favs,
      message: 'Got user\'s read books'
    });
  } catch (e) {
    return res.status(500).send({
      data: {},
      message: 'Something went wrong, please try again later'
    });    
  }
}

async function addToRead(req, res) {
  try {
    const { bookId } = req.params;
    const userId = req.decodedToken.userId;
    const favourite = await UserRead.get(userId, bookId);
    if (favourite) {
      return res.status(409).send({
        data: {},
        message: 'Book already read by user'
      });
    }
    await UserRead.add(userId, bookId);
    return res.send({
      data: {},
      message: 'Book added to User\'s read list'
    });
  } catch (e) {
    return res.status(500).send({
      data: {},
      message: 'Something went wrong, please try again later'
    });
  }
}