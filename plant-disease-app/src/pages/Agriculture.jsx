import { useState } from 'react'
import ImageBox from '../components/ImageBox'
import { soils, crops, seasons, regions, climateNote } from '../data/maharashtra'

const tabs = ['Soils', 'Crops', 'Climate', 'Regions']

function Agriculture() {
  const [activeTab, setActiveTab] = useState('Soils')

  return (
    <section>
      <h1>Agriculture in Maharashtra</h1>
      <p className="muted">Soils, crops, climate and regions that shape farming in the state.</p>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Soils' && (
        <div className="cards">
          {soils.map((soil) => (
            <div className="card" key={soil.id}>
              <ImageBox src={soil.image} label={soil.name} height={160} />
              <h3>{soil.name}</h3>
              <p className="muted">Also called: {soil.alsoCalled}</p>
              <p className="info-line"><strong>Found in:</strong> {soil.whereFound}</p>
              <ul className="list">
                {soil.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <div className="tags">
                {soil.bestCrops.map((c) => <span className="tag" key={c}>{c}</span>)}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Crops' && (
        <div className="cards">
          {crops.map((crop) => (
            <div className="card" key={crop.id}>
              <ImageBox src={crop.image} label={crop.name} height={140} />
              <h3>{crop.name}</h3>
              <span className="badge">{crop.type}</span>
              <p className="info-line"><strong>Season:</strong> {crop.season}</p>
              <p className="info-line"><strong>Grown in:</strong> {crop.grownIn}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Climate' && (
        <>
          <div className="cards">
            {seasons.map((s) => (
              <div className="card" key={s.id}>
                <h3>{s.name}</h3>
                <span className="badge">{s.months}</span>
                <p className="info-line">{s.description}</p>
                <p className="info-line"><strong>{s.cropSeason}</strong></p>
              </div>
            ))}
          </div>
          <div className="card note">
            <ImageBox label="Rainfall map of Maharashtra" height={220} />
            <h3>Rainfall across the state</h3>
            <p className="muted">{climateNote}</p>
          </div>
        </>
      )}

      {activeTab === 'Regions' && (
        <div className="cards">
          {regions.map((r) => (
            <div className="card" key={r.id}>
              <ImageBox src={r.image} label={r.name} height={140} />
              <h3>{r.name}</h3>
              <p className="info-line"><strong>Districts:</strong> {r.districts}</p>
              <p className="info-line"><strong>Soil:</strong> {r.soil}</p>
              <p className="info-line"><strong>Climate:</strong> {r.climate}</p>
              <div className="tags">
                {r.mainCrops.map((c) => <span className="tag" key={c}>{c}</span>)}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Agriculture