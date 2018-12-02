import nock from "nock";
import * as api from "../src/api";

describe("GET /api/users/:id", () => {
  it("return user object if it is exist", async() => {
    nock("http://localhost:3000")
      .get("/api/users/1")
      .reply(200, {
        firstName: "ari",
        lastName: "kim",
      });

    const result = await api.getUser(1);
    expect(result)
      .toEqual({
        firstName: "ari",
        lastName: "kim",
      });
  });

  it("return null if id is not exist", async() => {
    nock("http://localhost:3000")
      .get("/api/users/1")
      .reply(404, {});

    const result = await api.getUser(1);
    expect(result)
      .toEqual(null);
  });

  it("throw Errors if server returns error", async() => {
    nock("http://localhost:3000")
      .get("/api/users/1")
      .reply(500, {});

    const userId = 1;
    await expect(api.getUser(userId))
      .rejects
      .toThrowError(`Unable to fetch user #${userId}`);
  });
});
