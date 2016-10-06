export default function(state, action){
  if(!state){
    return 'Please select a book to start';
  }
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
