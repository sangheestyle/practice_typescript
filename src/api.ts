import requestPromise from "request-promise";

export async function getUser(userId: number) {
  return await requestPromise({
    uri: `http://localhost:3000/api/users/${userId}`,
    json: true,
  });
}
