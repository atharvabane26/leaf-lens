import { useState } from 'react'
import ImageBox from './ImageBox'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <div className="card">
      <ImageBox src={product.image} label={product.name} height={150} />
      <span className="badge">{product.category}</span>
      <h3 className="product-name">{product.name}</h3>
      <p className="muted">{product.description}</p>
      <p className="info-line"><strong>Good for:</strong> {product.usedFor}</p>
      <p className="price">₹{product.price} <small className="muted">/ {product.unit}</small></p>
      <button className="btn btn-small" onClick={handleAdd}>
        {added ? 'Added ✓' : 'Add to cart'}
      </button>
    </div>
  )
}

export default ProductCard