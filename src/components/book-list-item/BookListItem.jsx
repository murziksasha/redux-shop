
import './bookListItem.scss';


function BookListItem({book}) {
  const {title, author} = book;
  return ( 
    <>
      <span>{title}</span>
      <span>{author}</span>
    </>
  );
}

export default BookListItem;