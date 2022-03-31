function findAuthorById(authors, id) {
  const matchingAuthor = authors.find((authors) => authors.id === id);
  return matchingAuthor;
}

function findBookById(books, id) {
  const matchingBook = books.find((books) => books.id === id);
  return matchingBook;
}

function partitionBooksByBorrowedStatus(books) {
  let onShelves = books.filter((book)=> book.borrows[0].returned);
  let onLoan = books.filter((book)=> book.borrows[0].returned===false);
  return [onLoan, onShelves];
  /*  let onLoan = [];
  let onShelves = [];
  for (current of books){
    if (current.borrows[0].returned) {
      onShelves.push(current);
    } else {
      onLoan.push(current)
    }
  }
return [onLoan, onShelves]*/
}

function getBorrowersForBook(book, accounts) {
  let borrowersBook = book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return { ...borrow, ...account };
  });
  return borrowersBook.slice(0, 10);
} 

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
