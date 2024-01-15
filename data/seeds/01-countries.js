const countries = [
  {
    country: "Mexico",
  },
  {
    country: "United States of America",
  },
  {
    country: "Russia",
  },
];
exports.seed = function (knex) {
  return knex("country")
    .truncate()
    .then(() => {
      return knex("country").insert(countries);
    });
};
