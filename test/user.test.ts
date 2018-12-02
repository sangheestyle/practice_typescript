import { getUserWithFullName } from "../src/user";
import * as api from "../src/api";

jest.mock("../src/api");

describe('user', () => {
  it('should properly decorate fullName', async () => {
    const userFromApi = {
      firstName: 'ari',
      lastName: 'kim'
    };
    (api.getUser as jest.Mock).mockResolvedValueOnce(userFromApi);

    const user = await getUserWithFullName(1);
    expect(user).toEqual({
      fullName: "ari kim",
      ...userFromApi,
    });
  });

  it('should return null if userId is not exist', async () => {
    (api.getUser as jest.Mock).mockResolvedValueOnce(null);
    const user = await getUserWithFullName(1);
    expect(user).toBeNull();
  });
})