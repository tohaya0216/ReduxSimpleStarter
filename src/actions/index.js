export function selectBook(book){
  console.log('A book has been selected:', book.title);

  // selectBook is an ActionCreator, it needs to reutrn an action,
  // an obect with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
