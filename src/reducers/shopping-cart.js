import { BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART, ALL_BOOK_REMOVED_FROM_CART } from "./actionTypes";

//функция обновления стейта
const updateCartItems = (cartItems, item, idx) => {
  //item существующий элемент массива который нужно вставить idx - нужен для того что бы знать куда вставить

  //реализация если в корзине кол-во 0, то удаляем позицию товара в целом
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1),
    ]
  }

  if (idx === -1) {
    //означает что это это новый  элемента
    return [
      ...cartItems, //возвращаем старый массив + новый элемент
      item,
    ];
  }
  //а если не -1 то есть уже есть в корзине элемент
  return [
    ...cartItems.slice(0, idx), //порционное изменение состояние, подменой только того симовола который уже есть в корзине
    item,
    ...cartItems.slice(idx + 1),
  ];
};

//функция обновления состояния корзины
const updateCartItem = (book, item = {}, quantity) => {
  //книжка передаваемая, элемент который добавляем, quantity - кол-во книг

  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = 0,
  } = item; //если значений нету - делаем по дефолту

  //возвращаем один обновлненный объект
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

//Общая функция которая в целом обновляет заказ, а когда товара 0 то удаляет и вовсе из корзины
const updateOrder = (state, bookId, quantity) => {
  //state - текущий стейт, quantity кол-во, причем для уменьшение передаем -1
  const { bookList: {books}, shoppingCart: {cartItems} } = state;
  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === book.id);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quantity);
  return {
    orderTotal: 0,
    cartItems: updateCartItems(state.shoppingCart.cartItems, newItem, itemIndex),
  };
};


const updateShoppingCart = (state, action)=> {

  if(state === undefined) {
    return {    
      cartItems: [],
      orderTotal: 0,
    }
  }

    switch (action.type) {
      case BOOK_ADDED_TO_CART:
        return updateOrder(state, action.payload, 1);
      case BOOK_REMOVED_FROM_CART:
        return updateOrder(state, action.payload, -1);
      case ALL_BOOK_REMOVED_FROM_CART:
        //1 находим элемент в заказе с нужным id
        const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
        return updateOrder(state, action.payload, -item.count); //уменьшаем заказа на количество равно какое в корзине

      default:
        return state.shoppingCart;
    }
}

export default updateShoppingCart;