function AdminDashboard({ user }) {
  return (
    <div>
      <section className="hero">
        <span className="badge">Administrator Panel</span>

        <h1>Welcome, {user?.name || 'Administrator'}!</h1>

        <p>Manage and monitor your LeafCare platform.</p>
      </section>

      <div className="stats">
        <div className="card stat">
          <div className="stat-number">125</div>
          <p>Registered Users</p>
        </div>

        <div className="card stat">
          <div className="stat-number">48</div>
          <p>Disease Records</p>
        </div>

        <div className="card stat">
          <div className="stat-number">86</div>
          <p>Plant Scans</p>
        </div>

        <div className="card stat">
          <div className="stat-number">12</div>
          <p>Products</p>
        </div>
      </div>

      <section className="section">
        <h2>Admin Activities</h2>

        <div className="cards">
          <div className="card">
            <h3>👥 User Management</h3>
            <p>View and manage registered users.</p>
          </div>

          <div className="card">
            <h3>🌱 Disease Management</h3>
            <p>Manage plant disease information.</p>
          </div>

          <div className="card">
            <h3>🛒 Product Management</h3>
            <p>Manage products available in the shop.</p>
          </div>

          <div className="card">
            <h3>📊 System Reports</h3>
            <p>View plant detection activity and reports.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminDashboard
