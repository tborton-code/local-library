function findAccountById(accounts, id) {
  //loop through the accounts array and check id argument against {id: "5f446f2ecfaf0310387c9603"}
  //return the object with the matching id
  //do it all with the find method!
  const matchingAccount = accounts.find((accounts) => accounts.id === id);
  return matchingAccount;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last > b.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  //takes in an object "account" and the "books" array
  //initializes amtOfBorrows = 0
  let amtOfBorrows = 0;
  let accID = account.id;
  for (let book of books){
  for (let transaction of book.borrows){
    //adds to amtOfBorrows if accounts.id === books.borrows
    if (accID === transaction.id){
      amtOfBorrows ++
    }
  }}
  //returns amtOfBorrows  
  return amtOfBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  let finalArray = [];
  for (currentBook of books){
    if (!currentBook.borrows[0].returned 
      && currentBook.borrows[0].id === account.id){
        currentBook.author = authors.find((author)=> author.id===currentBook.authorId);
        finalArray.push(currentBook)
      }
  }
  return finalArray;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
