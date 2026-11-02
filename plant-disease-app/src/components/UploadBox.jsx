import { useState } from 'react'

const MAX_SIZE = 5 * 1024 * 1024 // 5 MB

function UploadBox({ onAnalyze, loading }) {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [error, setError] = useState('')

  function handleChange(e) {
    const selected = e.target.files[0]
    if (!selected) return

    if (!['image/jpeg', 'image/png'].includes(selected.type)) {
      setError('Please choose a JPG or PNG image.')
      return
    }
    if (selected.size > MAX_SIZE) {
      setError('Image must be smaller than 5 MB.')
      return
    }

    setError('')
    setFile(selected)
    setPreview(URL.createObjectURL(selected))
  }

  return (
    <div className="card upload-box">
      <label className="drop-area">
        <input type="file" accept="image/png, image/jpeg" onChange={handleChange} />
        {preview ? (
          <img src={preview} alt="Selected leaf" className="preview" />
        ) : (
          <p>📷 Click here to upload a leaf photo<br /><small>JPG or PNG, max 5 MB</small></p>
        )}
      </label>

      {error && <p className="error">{error}</p>}

      <button
        className="btn"
        disabled={!file || loading}
        onClick={() => onAnalyze(file, preview)}
      >
        {loading ? 'Analyzing...' : 'Detect Disease'}
      </button>
    </div>
  )
}

export default UploadBox