import * as stats from "../src/stats";
import * as user from "../src/user";

jest.mock("../src/user");

describe('aveFirstNameLength', () => {
  it('returns average first name length as a number', async () => {
    (user.getUserWithFullName as jest.Mock)
      .mockResolvedValueOnce({ firstName: 'smith', lastName: 'lee' })
      .mockResolvedValueOnce({ firstName: 'sanghee', lastName: 'kim' });

    const userIds = [1, 2];
    const aveLength = await stats.aveFirstNameLength(userIds);
    expect(aveLength).toBe(6);
  });

  it('throws Errors if given userIds is empty', async () => {
    await expect(stats.aveFirstNameLength([]))
      .rejects
      .toThrowError("userIds is required");
  })
});