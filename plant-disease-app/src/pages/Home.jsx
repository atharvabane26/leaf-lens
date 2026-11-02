import { Link } from 'react-router-dom'
import ImageBox from '../components/ImageBox'
import { soils, crops, regions, seasons } from '../data/maharashtra'

function Home() {
  const stats = [
    { number: regions.length, label: 'Farming regions' },
    { number: soils.length, label: 'Major soil types' },
    { number: crops.length, label: 'Key crops covered' },
    { number: seasons.length, label: 'Seasons' },
  ]

  return (
    <>
      <section className="home-hero">
        <div>
          <span className="badge">Made for Maharashtra</span>
          <h1>Healthy crops start with a healthy leaf</h1>
          <p className="muted">
            Learn about the soils, crops and climate of Maharashtra, check your plant for
            disease from a single photo, and find the right organic treatment.
          </p>
          <div className="btn-row">
            <Link to="/detect" className="btn">Check my plant</Link>
            <Link to="/agriculture" className="btn btn-outline">Explore farming</Link>
          </div>
        </div>
        <ImageBox label="Hero image: farm field in Maharashtra" height={320} />
      </section>

      <section className="stats">
        {stats.map((s) => (
          <div className="card stat" key={s.label}>
            <div className="stat-number">{s.number}</div>
            <div className="muted">{s.label}</div>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>What you can do here</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">🔍</div>
            <h3>Detect plant disease</h3>
            <p className="muted">Upload a leaf photo and get the disease name, symptoms and treatment steps.</p>
            <Link to="/detect" className="text-link">Try it →</Link>
          </div>
          <div className="card">
            <div className="icon">🌾</div>
            <h3>Learn about farming</h3>
            <p className="muted">Soil types, crops, seasons and regions of Maharashtra in one place.</p>
            <Link to="/agriculture" className="text-link">Read more →</Link>
          </div>
          <div className="card">
            <div className="icon">🧴</div>
            <h3>Buy organic products</h3>
            <p className="muted">Compost, bio-fungicides and natural pesticides to protect your plants.</p>
            <Link to="/shop" className="text-link">Visit shop →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Soils of Maharashtra</h2>
        <p className="muted">Soil decides what grows well and which diseases show up.</p>
        <div className="cards">
          {soils.map((soil) => (
            <div className="card" key={soil.id}>
              <ImageBox src={soil.image} label={soil.name} height={140} />
              <h3>{soil.name}</h3>
              <p className="muted">{soil.whereFound}</p>
            </div>
          ))}
        </div>
        <Link to="/agriculture" className="text-link">See full details →</Link>
      </section>

      <section className="cta">
        <h2>Noticed spots on your leaves?</h2>
        <p>Catch the disease early and save your crop.</p>
        <Link to="/detect" className="btn">Scan a leaf now</Link>
      </section>
    </>
  )
}

export default Home