import qs from "qs";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://gateway.marvel.com:443/v1/public";

// [Get] Comics 리스트
export async function apiGetComics({ queryKey }) {
  const limit = queryKey[1].limit;
  try {
    return await fetch(`${BASE_URL}/comics?limit=${limit}&apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    // console.log(error);
  }
}

// [GET] Events 리스트
export async function apiGetEvents({ pagaParam }) {
  console.log(pageParam)
  const offset = pagaParam * 10;

  return await fetch(
    `${BASE_URL}/events?limit=10&offset=${offset}&apikey=${API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
}

// [GET] Characters 리스트
export async function apiGetCharacters({ queryKey }) {
  const limit = queryKey[1].limit;
  try {
    return await fetch(
      `${BASE_URL}/characters?limit=${limit}&apikey=${API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// params: id
// [GET] Characters Detail
export async function apiGetCharacterDetail({ queryKey }) {
  const id = queryKey[1].id;
  try {
    return await fetch(`${BASE_URL}/characters/${id}apikey=${API_KEY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

//
export async function apiPostMail(data) {
  try {
    return await fetch(
      "https://script.google.com/macros/s/AKfycbzeCTfcXjhcz6bvI2NNpVk_W02TfWwezygi6_BZCD-L5t_4r5IlalwGYi86lNgXM2Fpqg/exec",
      {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: qs.stringify(data),
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
