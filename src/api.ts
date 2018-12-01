import rp from "request-promise";

export async function getUser(userId: number) {
  try {
    const response = await rp({
      uri: `http://localhost:3000/api/users/${userId}`,
      json: true,
    });

    return {
      ...response,
      fullName: `${response.firstName} ${response.lastName}`,
    };
  } catch (error) {
    return {};
  }
}
