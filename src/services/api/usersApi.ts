const BaseURL = "https://fakestoreapi.com";

const limit = 9;

export default async function getUsers() {
  const response = await fetch(`${BaseURL}/users?limit=${limit}`);
  return response.json();
}