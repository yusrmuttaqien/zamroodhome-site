export async function getProducts(params: string = '', passFn: (e: any) => any) {
  return fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/api/zamrood/itinerary' + params)
    .then((res) => res.json())
    .then(passFn);
}
