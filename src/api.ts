import rp from "request-promise";

export async function getUser(userId: number): Promise<any> {
  try {
    return await rp({
      uri: `http://localhost:3000/api/users/${userId}`,
      json: true,
    });
  } catch (error) {
    if (error.statusCode === 404) {
      return null;
    }

    throw new Error(`Unable to fetch user #${userId}`);
  }
}
