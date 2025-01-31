const request = require("supertest");
const app = require("./app");

describe("Humble Superhero API", () => {
  it("should fetch superheroes sorted by humility score", async () => {
    await request(app).post("/superheroes").send({
      name: "Captain Kind",
      superpower: "Empathy",
      humilityScore: 9,
    });

    await request(app).post("/superheroes").send({
      name: "The Gracious Guardian",
      superpower: "Shield of Humility",
      humilityScore: 10,
    });

    const res = await request(app).get("/superheroes");
    expect(res.status).toBe(200);
    expect(res.body[0].name).toBe("The Gracious Guardian"); // Highest humility first
  });
});
