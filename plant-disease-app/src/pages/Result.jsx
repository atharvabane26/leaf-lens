import { Link, useLocation, Navigate } from 'react-router-dom'
import diseases from '../data/diseases'
import supplements from '../data/supplements'

function Result() {
  const { state } = useLocation()

  // if someone opens /result directly, send them back home
  if (!state) return <Navigate to="/detect" />

  const { prediction, preview } = state
  const info = diseases[prediction.label]
  const product = supplements.find((s) => s.id === info.supplementId)

  return (
    <section className="result-grid">
      <div className="card">
        <img src={preview} alt="Uploaded leaf" className="preview" />
        <p className="muted">Uploaded image</p>
      </div>

      <div className="card">
        <span className="badge">{info.plant}</span>
        <h2>{info.name}</h2>
        <p className="confidence">Confidence: {prediction.confidence}%</p>
        <p>{info.description}</p>

        <h3>Symptoms</h3>
        <ul className="list">
          {info.symptoms.map((s) => <li key={s}>{s}</li>)}
        </ul>

        <h3>What you can do</h3>
        <ul className="list">
          {info.treatment.map((t) => <li key={t}>{t}</li>)}
        </ul>

        <p className="suggest">
          Suggested product: <strong>{product.name}</strong> (₹{product.price})
        </p>

        <div className="btn-row">
        <Link to="/detect" className="btn">Scan another leaf</Link>
        <Link to="/shop" className="btn btn-outline">Buy treatment</Link>
        </div>
      </div>
    </section>
  )
}

export default Result