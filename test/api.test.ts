import nock from "nock";
import { getUser } from "../src/api";

describe("GET /api/users/:id", () => {
  it("return user object if it is exist", async() => {
    nock("http://localhost:3000")
      .get("/api/users/1")
      .reply(200, {
        firstName: "ari",
        lastName: "kim",
        age: 1,
      });

    const result = await getUser(1);
    expect(result)
      .toEqual({
        fullName: "ari kim",
        firstName: "ari",
        lastName: "kim",
        age: 1,
      });
  });

  it("return empty plain object if id is not exist", async() => {
    nock("http://localhost:3000")
      .get("/api/users/100")
      .reply(404, {});

    const result = await getUser(100);
    expect(result)
      .toEqual({});
  });
});
