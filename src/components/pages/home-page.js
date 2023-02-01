import BookList from "../book-list/BookList";

const HomePage = () => {
  return (
    <>
      <div>Home Page</div>
      <BookList books = {[
      {
        id: 1,
        title: "Production-Ready Microservices",
        author: "Susan J. Fowler",
      },
      {
        id: 2,
        titile: "Realease It!",
        author: "Michael T. Nygard",
      },
    ]}/>
    </>
  );
};

export default HomePage;