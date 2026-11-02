const diseases = {
  Tomato___Late_blight: {
    plant: 'Tomato',
    name: 'Late Blight',
    description: 'A fungal-like disease that spreads fast in cool, wet weather.',
    symptoms: ['Dark water-soaked patches on leaves', 'White fuzzy growth under leaves', 'Brown rotting on fruit'],
    treatment: ['Remove infected leaves', 'Spray a copper-based fungicide', 'Avoid watering from above'],
    supplementId: 1,
  },
  Apple___Apple_scab: {
    plant: 'Apple',
    name: 'Apple Scab',
    description: 'A fungal disease that leaves rough, scabby spots on leaves and fruit.',
    symptoms: ['Olive-green spots on leaves', 'Scabby patches on fruit', 'Leaves dropping early'],
    treatment: ['Rake and destroy fallen leaves', 'Apply sulfur fungicide in spring', 'Prune for better airflow'],
    supplementId: 2,
  },
  Corn___Common_rust: {
    plant: 'Corn',
    name: 'Common Rust',
    description: 'Fungal disease that forms rusty pustules on both sides of the leaf.',
    symptoms: ['Small reddish-brown pustules', 'Yellowing leaves', 'Reduced grain yield'],
    treatment: ['Plant resistant hybrids', 'Apply fungicide early', 'Rotate crops each season'],
    supplementId: 3,
  },
  Potato___Early_blight: {
    plant: 'Potato',
    name: 'Early Blight',
    description: 'Caused by a fungus, shows up as ring-shaped spots on older leaves.',
    symptoms: ['Brown spots with rings', 'Yellow area around spots', 'Leaves dry and fall'],
    treatment: ['Remove infected foliage', 'Use mancozeb fungicide', 'Water the soil, not the leaves'],
    supplementId: 1,
  },
}

export default diseases