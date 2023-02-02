import './shopping-cart-table.scss';

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Site Reliability Engineering</td>
            <td>2</td>
            <td>40$</td>
            <td>Action</td>
            <td>
              <button className="btn btn-outline-danger btn-danger">
                <i className="fa fa-trash-o"/>
              </button>
              <button className="btn btn-outline-success btn-success">
                <i className="fa fa-trash-o"/>
              </button>
              <button className="btn btn-outline-warining btn-warning">
                <i className="fa fa-trash-o"/>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total">
        Total: $201
      </div>
    </div>
  )
}

export default ShoppingCartTable;