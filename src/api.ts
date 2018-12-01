import rp from "request-promise";

export async function getUser(userId: number) {
  return await rp({
    uri: `http://localhost:3000/api/users/${userId}`,
    json: true,
  });
}
