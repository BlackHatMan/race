
export const createCar = async (name, color) => {
  const car = {
    name,
    color
  }

  await fetch('http://127.0.0.1:3000/garage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  }
  )
}

export const removeCar = async (id) => {

  await fetch(`http://127.0.0.1:3000/garage/${id}`, { method: 'DELETE' })
}
export const updateCar = async (id, color, name) => {
  const car = {
    color,
    name
  }
  await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  })
}

export const getCars = async () => {
  const response = await fetch('http://127.0.0.1:3000/garage')
  return await response.json()
}

export const startEngine = async (id) => {
  const resp = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {
    method: 'PATCH'
  })
  return await resp.json()
}

export const startError = async (id) => {
  const err = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, {
    method: 'PATCH'
  }).then(st => console.log(st.status === false ? 'errrrrrr' : 'null'))

}