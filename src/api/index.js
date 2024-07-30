import axios, { AxiosError } from "axios";
export const base = 'http://localhost:3001';

export async function PostReq(paramQuery, data, config = { headers: {} }) {
  try {
    const res = await axios.post(`${base}${paramQuery}`, data, config);
    return res;
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      const { response } = error;
      throw response?.data?.message ?? error.message;
    } else {
      throw error?.message ?? error;
    }
  }
}


export function GetReq(paramQuery) {
  const res = axios.get(`${base}${paramQuery}`)
  res.then(res => console.log(res))
      .catch(e => alert('Something went wrong ' + e.message))

  return res;
}