export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  }).format((number * 25) / 100)
}

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    // because colors is already an array
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}
