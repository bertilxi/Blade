import { Seed } from "@iguazu/puma";

const tableName = "resource";

export = new Seed(async knex => {
  await knex(tableName).del();
  return knex(tableName).insert([
    { name: "Jose Perez" },
    { name: "Juan Gonzalez" },
    { name: "Pablo Gomez" },
    { name: "Jose Hernandez" },
    { name: "Federico Perez" }
  ]);
});
