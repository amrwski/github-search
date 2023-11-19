import { IUserDetails } from "../types";
import { url } from "./config";

export const getUsersById = async (userIds: number[]) => {
  const userPromises = userIds.map(async (userId) => {
    try {
      const response = await fetch(`${url}/user/${userId}`);

      if (!response.ok) {
        throw new Error(`Error fetching user with ID ${userId}`);
      }

      return response.json();
    } catch (error) {
      console.error(error.message);
    }
  });
  const users: IUserDetails[] = await Promise.all(userPromises);

  return users.filter((user) => user !== null);
};
