import diseases from '../data/diseases'

export async function predictDisease(file) {
  // pretend the model is thinking
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // pick a random disease for testing
  const labels = Object.keys(diseases)
  const label = labels[Math.floor(Math.random() * labels.length)]
  const confidence = 85 + Math.random() * 14

  return { label, confidence: confidence.toFixed(1) }
}