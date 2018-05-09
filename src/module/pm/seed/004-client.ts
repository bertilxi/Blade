import { Seed } from "@iguazu/puma";

const tableName = "client";

export = new Seed(async knex => {
  await knex(tableName).del();
  return knex(tableName).insert([
    { name: "walmart" },
    { name: "netflix" },
    { name: "google" }
  ]);
});
