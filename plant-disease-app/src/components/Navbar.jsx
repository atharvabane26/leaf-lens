import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useTheme from '../hooks/useTheme'
import { useCart } from '../context/CartContext'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { totalItems } = useCart()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>🌿 LeafCare</Link>

        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/agriculture" onClick={closeMenu}>Agriculture</NavLink></li>
          <li><NavLink to="/detect" onClick={closeMenu}>Detect Disease</NavLink></li>
          <li><NavLink to="/shop" onClick={closeMenu}>Shop</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        </ul>

        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Link to="/cart" className="icon-btn" onClick={closeMenu}>
            🛒
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
          <button className="icon-btn menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar