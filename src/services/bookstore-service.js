class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: "Production-Ready Microservices",
        author: "Susan J. Fowler",
        price: 32,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
      },
      {
        id: 2,
        title: "Realease It!",
        author: "Michael T. Nygard",
        price: 45,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403,BO1,204,203,200_.jpg'
      },
    ];
  }
}

export default BookstoreService;
