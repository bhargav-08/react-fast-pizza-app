import { useDispatch, useSelector } from 'react-redux'
import Button from '../../ui/Button'
import LinkButton from '../../ui/LinkButton'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import { clearCart, getCart } from './cartSlice'

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ]

function Cart() {
  const username = useSelector((state) => state.user.username)
  // Here we should not call function inside useSelector()
  const cart = useSelector(getCart)
  const dispatch = useDispatch()
  // const cart = fakeCart;

  function handleClearCart(e) {
    e.preventDefault()
    dispatch(clearCart())
  }

  if (!cart.length) return <EmptyCart />

  return (
    <div className="p-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-3">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={handleClearCart} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  )
}

export default Cart
