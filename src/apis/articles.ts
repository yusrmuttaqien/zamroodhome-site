export async function getArticles(params: string = '', passFn: (e: any) => any) {
  return fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/api/zamrood/article' + params)
    .then((res) => res.json())
    .then(passFn);
}
