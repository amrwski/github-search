import { url, token } from "./config";

export const getUserByName = async (username: string) => {
  try {
    const response = await fetch(`${url}/users/${username}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const userData = await response.json();

    return userData;
  } catch (error) {
    console.error("Error fetching user details", error);
  }
};
