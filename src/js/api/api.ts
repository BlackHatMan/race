export type InitialData = {
  name: string,
  color: string,
  id: number
};

export const createCar = async (name: string, color: string) => {
  const car = {
    name,
    color,
  };

  const response = await fetch('http://127.0.0.1:3000/garage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });
  const data = await response.json();
  return data;
};

export const removeCar = async (id: number) => {
  await fetch(`http://127.0.0.1:3000/garage/${id}`, { method: 'DELETE' });
};
export const updateCar = async (id: number, color: string, name: string) => {
  const car = {
    color,
    name,
  };
  await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  });
};

export const getCars = async (page: number) => {
  const response = await fetch(`http://127.0.0.1:3000/garage?_page=${page}&_limit=7`);
  const totalCount = Number.parseInt(response.headers.get('X-Total-Count'), 10);
  const initialData: Array<InitialData> = await response.json();
  return { totalCount, initialData };
};

export const startEngine = async (id: number) => {
  const resp = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {
    method: 'PATCH',
  });
  const data = await resp.json();
  return data;
};
export const stopEngine = async (id: number) => {
  const resp = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`, {
    method: 'PATCH',
  });
  const data = await resp.json();
  return data;
};

export const startError = async (id: number) => {
  const data = fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, {
    method: 'PATCH',
  });
  return data;
};
