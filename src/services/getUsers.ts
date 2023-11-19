import { url, token } from "./config";

export const getUsers = async (searchQuery: string, page: number = 1, perPage: number = 30) => {
  if (searchQuery.length > 2) {
    const response = await fetch(
      `${url}/search/users?q=${searchQuery}&page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    const data = await response.json();

    return data.items;
  }
};
