import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  // load the saved cart so it survives a page refresh
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  function addToCart(product) {
    const existing = items.find((i) => i.id === product.id)
    if (existing) {
      setItems(items.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i)))
    } else {
      setItems([...items, { id: product.id, name: product.name, price: product.price, qty: 1 }])
    }
  }

  function changeQty(id, change) {
    setItems(
      items
        .map((i) => (i.id === id ? { ...i, qty: i.qty + change } : i))
        .filter((i) => i.qty > 0)
    )
  }

  function removeItem(id) {
    setItems(items.filter((i) => i.id !== id))
  }

  function clearCart() {
    setItems([])
  }

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.qty * i.price, 0)

  return (
    <CartContext.Provider
      value={{ items, addToCart, changeQty, removeItem, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext)
}