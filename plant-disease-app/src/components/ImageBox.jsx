// If "src" is given it shows the image, otherwise a blank box with a label.
function ImageBox({ src, label, height = 200 }) {
  if (src) {
    return <img src={src} alt={label} className="img-box" style={{ height }} />
  }

  return (
    <div className="img-box img-empty" style={{ height }}>
      <span>🖼️ {label}</span>
    </div>
  )
}

export default ImageBox