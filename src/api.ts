import rp from "request-promise";

export async function getUser(userId: number) {
  const { firstName, lastName, age } = await rp({
    uri: `http://localhost:3000/api/users/${userId}`,
    json: true,
  });

  return {
    fullName: `${firstName} ${lastName}`,
    firstName,
    lastName,
    age
  }
}
