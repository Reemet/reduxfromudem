export function selectBook(book) {
    // selectBook is an actionCreator, it needs to return an Action
    // objectt with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}