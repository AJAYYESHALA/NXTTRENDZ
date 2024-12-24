import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const getTotalPrice = () => {
        const totalPrice = cartList.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        )

        return totalPrice
      }

      const cartLength = cartList.length
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart

      const onRemoveAllCartItems = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  className="cart-remove-button"
                  type="button"
                  onClick={onRemoveAllCartItems}
                >
                  Remove All
                </button>
                <CartListView />

                <div className="cart-summary">
                  <h1 className="summary-heading">
                    Order Total:
                    <span className="summary-span">Rs {getTotalPrice()}/-</span>
                  </h1>
                  <p className="summary-heading">{cartLength} Items in cart</p>
                  <button className="button1" type="button">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
