import rp from "request-promise";

export async function getUser(userId) {
  try {
    return await rp({
      uri: `http://localhost:3000/api/users/${userId}`,
      json: true,
    });
  } catch (error) {
    if (error.statusCode === 404) {
      return null;
    }

    throw Error(`Unable to fetch user #${userId}`);
  }
}
