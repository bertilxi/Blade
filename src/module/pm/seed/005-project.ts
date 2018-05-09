import { Seed } from "@iguazu/puma";

const tableName = "project";

export = new Seed(async knex => {
  await knex(tableName).del();
  return knex(tableName).insert([
    { name: "awesome walmart", client_id: 1 },
    { name: "awesome netflix", client_id: 2 },
    { name: "awesome google", client_id: 3 }
  ]);
});
