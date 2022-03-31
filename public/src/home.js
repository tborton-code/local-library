function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedCount = 0
  for(let book in books){
    let {borrows} = books[book]
    borrows.forEach(item => {
      if(item.returned===false){borrowedCount+=1}
    });
  }
  return borrowedCount
}
function _returnMostCommonFive(array) {
  array.sort((a, b) => a.count > b.count ? -1 : 1);
  return array.slice(0,5)
}

function getMostCommonGenres(books) {
  //takes in an array of book objects
  const obj = books.reduce(((total, curr) => {
    if (total[curr.genre]){
      total[curr.genre]++
    } else {
      total[curr.genre] = 1
    }
    return total
  }), {})
  //create array of with [0] as genre and [1] as count
  const entries = Object.entries(obj);
  const array = entries.map((array) => {
  return {name: array[0], count: array[1]};
  })
  return _returnMostCommonFive(array)
}

function getMostPopularBooks(books) {
  /* take in array of book objects*/
  let finalArr = [];
  /*push name (book.title) count (books.borrows.length) to new array*/
  for (let currentBook of books){
    finalArr.push({"name":currentBook.title, "count":currentBook.borrows.length})
  }
  /*sort and slice helper function*/
  return _returnMostCommonFive(finalArr)
}

function getMostPopularAuthors(books, authors) {
  //takes in books array and authors array
  let finalArr = [];
  for (let currAuthor of authors){
    let borrowsCount = 0;
    for (let currBook of books){
      if (currBook.authorId === currAuthor.id){
        borrowsCount += currBook.borrows.length;
      }
    }
    finalArr.push({"name": `${currAuthor.name.first} ${currAuthor.name.last}`, "count": borrowsCount})
  }
  return _returnMostCommonFive(finalArr)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
