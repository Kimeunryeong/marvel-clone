const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://gateway.marvel.com:443/v1/public";

// [Get] Comics 이벤트
export async function apiGetComics() {
  return await fetch(`${BASE_URL}/comics?apikey=${API_KEY}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}


// [GET] Events 리스트
export async function apiGetEvents() {
  return await fetch(`${BASE_URL}/events?limit=10&apikey=${API_KEY}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}