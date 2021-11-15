import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:4000'
  : 'https://phone-store-driven.herokuapp.com';

export function getProducts() {
  const promise = axios.get(`${BASE_URL}/products`);
  return promise;
}

export function getProductsByCategorie({ categorie, value }) {
  const colorCode = value.replace('#', '');
  const promise = axios.get(`${BASE_URL}/products?${categorie}=${colorCode}`);
  return promise;
}

export function getProductById(id) {
  return axios.get(`${BASE_URL}/products/${id}`);
}

export function getCategories() {
  return axios.get(`${BASE_URL}/categories`);
}

export function postCheckout({ body, headers }) {
  const promise = axios.post(`${BASE_URL}/checkout`, body, headers);
  return promise;
}
