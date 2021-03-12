const { getPromiseQuery } = require('../common/db');

module.exports = {
  addBookReview
};

async function addBookReview(bookId, rating) {
    try {
      const bookRating = parseFloat(rating);
      const query = `UPDATE book SET ratings= ratings+${bookRating}, totalNo = totalNo+1 WHERE bookId= ${bookId}`;
      const values = [
        [bookId],
        [rating]
      ];
      await getPromiseQuery()(query, [values]);
      return;
    } catch (e) {
      throw e;
    }
  }