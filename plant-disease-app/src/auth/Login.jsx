
import { useState } from 'react'
import './Login.css'

function Login({ onLogin }) {
  const [role, setRole] = useState('user')
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    const accounts = {
      user: {
        id: 'user@leafcare.com',
        password: 'User@123',
        name: 'LeafCare User'
      },
      admin: {
        id: 'admin@leafcare.com',
        password: 'Admin@123',
        name: 'Administrator'
      }
    }

    const account = accounts[role]

    if (
      userId.trim().toLowerCase() === account.id &&
      password === account.password
    ) {
      onLogin({
        role,
        name: account.name,
        userId: account.id
      })
    } else {
      setError('Invalid User ID or Password. Please try again.')
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-brand">
          <div className="brand-icon">🌿</div>
          <h1>LeafCare</h1>
          <p>Smart Plant Disease Detection System</p>
        </div>

        <div className="login-heading">
          <h2>Welcome Back!</h2>
          <p>Login to continue to your account</p>
        </div>

        <div className="role-selector">
          <button
            type="button"
            className={role === 'user' ? 'role-btn active' : 'role-btn'}
            onClick={() => {
              setRole('user')
              setError('')
            }}
          >
            👤 User Login
          </button>

          <button
            type="button"
            className={role === 'admin' ? 'role-btn active' : 'role-btn'}
            onClick={() => {
              setRole('admin')
              setError('')
            }}
          >
            🛡️ Admin Login
          </button>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <label>User ID / Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-submit">
            Login as {role === 'user' ? 'User' : 'Admin'} →
          </button>
        </form>

        <div className="demo-credentials">
          <h4>Demo Login Credentials</h4>
          <p><strong>User ID:</strong> user@leafcare.com</p>
          <p><strong>Password:</strong> User@123</p>
          <hr />
          <p><strong>Admin ID:</strong> admin@leafcare.com</p>
          <p><strong>Password:</strong> Admin@123</p>
        </div>

        <p className="login-footer">
          © 2026 LeafCare | Smart Agriculture Platform
        </p>

      </div>
    </div>
  )
}

export default Login
