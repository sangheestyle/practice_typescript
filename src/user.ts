import * as api from "./api";

export async function getUserWithFullName(userId) {
  const user = await api.getUser(userId);

  if (!user) {
    return user;
  }

  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
}