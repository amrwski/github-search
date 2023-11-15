const url = "https://api.github.com";
const token = import.meta.env.VITE_GITHUB_API_TOKEN;

export const getUsers = async () => {
  const response = await fetch(`${url}/search/users`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  const data = await response.json();

  return data.items;
};
