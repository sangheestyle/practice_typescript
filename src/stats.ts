import { getUserWithFullName } from "./user";

export async function aveFirstNameLength(userIds: number[]): Promise<number> {
  if (!userIds.length) {
    throw new Error("userIds is required.");
  }

  const promises = userIds.map(id => getUserWithFullName(id));
  const users = await Promise.all(promises);
  const sumFirstNames = users
    .map(user => user.firstName.length)
    .reduce((a, b) => a + b, 0);
  return sumFirstNames / userIds.length;
}