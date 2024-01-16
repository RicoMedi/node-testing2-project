const request = require("supertest");
const db = require("../../data/db-config");
const server = require("../server.js");
const Country = require("./travel-model.js");

const country1 = { country: "colombia" };
const country2 = { country: "panama" };

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db("country").truncate();
});

afterAll(async () => {
  await db.destroy();
});
it("correct env variable", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});

describe("country model functions", () => {
  describe("create a country", () => {
    it("adds a country to the db", async () => {
      let countrys;
      await Country.createCountry(country1);
      countrys = await db("country");
      expect(countrys).toHaveLength(1);

      await Country.createCountry(country2);
      countrys = await db("country");
      expect(countrys).toHaveLength(2);
    });
    it("inserted country", async () => {
      const country = await Country.createCountry(country1);
      expect(country).toMatchObject({ country_id: 1, ...country });
    });
  });
  describe("[DELETE] / deletes country", () => {
    it("removes country from db", async () => {
      const [country_id] = await db("country").insert(country1);
      let countrys = await db("country").where({ country_id }).first();
      expect(countrys).toBeTruthy();

      await request(server).delete("/country/" + country_id)
      countrys = await db("country").where({country_id}).first();
      expect(countrys).toBeFalsy();
    });
    it('Respond with the deleted country', async()=>{
        await db("country").insert(country1)
        let country= await request(server).delete("/country/1")
        expect(country.body).toMatchObject(country1)
    })
  });
});
