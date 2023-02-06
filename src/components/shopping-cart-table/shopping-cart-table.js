import './shopping-cart-table.scss';

import {connect } from 'react-redux';
import { bookAddedToCart, bookRemoveFromCart, allBookRemoveFromCart } from '../../actions';


const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
  const renderRow = (item, idx)=> {
    const {id, title, count, total} = item;
    return (                  
    <tr key={id}>
      <td>{idx + 1}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>{total} $</td>
      <td>Action</td>
      <td>
        <button
        onClick={() => onDecrease(id)} 
        className="btn btn-outline-warining btn-warning ">
          <i className="fa fa-trash-o"/>
        </button>
        <button 
        onClick={() => onIncrease(id)} 
        className="btn btn-outline-successing btn-success">
          <i className="fa fa-trash-o"/>
        </button>
        <button 
        onClick={() => onDelete(id)} 
        className="btn btn-outline-dangering btn-danger">
          <i className="fa fa-trash-o"/>
        </button>
      </td>
    </tr>
    )
  }
  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table">
        <tbody>
            {items.map(renderRow)}
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  )
}

const mapStateToProps = ({shoppingCart:{cartItems, orderTotal}}) => {
  return {
    items: cartItems,
    total: orderTotal,
  }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemoveFromCart,
    onDelete: allBookRemoveFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);