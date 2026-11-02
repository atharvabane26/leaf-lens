import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const { items, changeQty, removeItem, clearCart, totalPrice } = useCart()
  const [form, setForm] = useState({ name: '', phone: '', address: '' })
  const [orderId, setOrderId] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function placeOrder(e) {
    e.preventDefault()
    // demo only: no real payment or server yet
    setOrderId('LC' + Date.now().toString().slice(-6))
    clearCart()
  }

  if (orderId) {
    return (
      <section className="empty-state">
        <h1>Order placed ✅</h1>
        <p>Your order ID is <strong>{orderId}</strong>.</p>
        <p className="muted">This is a demo checkout, so no payment was taken.</p>
        <Link to="/shop" className="btn">Continue shopping</Link>
      </section>
    )
  }

  if (items.length === 0) {
    return (
      <section className="empty-state">
        <h1>Your cart is empty</h1>
        <p className="muted">Add some products from the shop.</p>
        <Link to="/shop" className="btn">Go to shop</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>Your Cart</h1>

      <div className="cart-layout">
        <div className="card">
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <p className="muted">₹{item.price} each</p>
              </div>
              <div className="qty">
                <button onClick={() => changeQty(item.id, -1)}>−</button>
                <span>{item.qty}</span>
                <button onClick={() => changeQty(item.id, 1)}>+</button>
              </div>
              <strong>₹{item.price * item.qty}</strong>
              <button className="link-btn" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
        </div>

        <form className="card form" onSubmit={placeOrder}>
          <h3>Delivery details</h3>
          <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
          <input name="phone" placeholder="Phone number" value={form.phone} onChange={handleChange} required />
          <textarea name="address" rows="3" placeholder="Delivery address" value={form.address} onChange={handleChange} required />

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
          <button className="btn" type="submit">Place order</button>
        </form>
      </div>
    </section>
  )
}

export default Cart