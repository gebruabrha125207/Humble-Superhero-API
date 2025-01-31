process.env.PORT = 5001;  // Use a different port for testing
const request = require("supertest");
const app = require("./server");
// Reset database or in-memory store before each test
beforeEach(async () => {
  await request(app).delete("/superheroes"); // Ensure this endpoint clears the data
});

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
    expect(res.body).toHaveLength(2);
    expect(res.body[0].name).toBe("The Gracious Guardian"); // Highest humility first
    expect(res.body[1].name).toBe("Captain Kind");
  });
});
