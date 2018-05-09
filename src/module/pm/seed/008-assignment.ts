import { Seed } from "@iguazu/puma";

const tableName = "assignment";

export = new Seed(async knex => {
  await knex(tableName).del();
  return knex(tableName).insert([
    { position_id: 1, resource_id: 1 },
    { position_id: 2, resource_id: 2 },
    { position_id: 3, resource_id: 3 },
    { position_id: 4, resource_id: 4 },
    { position_id: 5, resource_id: 5 },
    { position_id: 6, resource_id: 1 },
    { position_id: 7, resource_id: 2 },
    { position_id: 8, resource_id: 3 },
    { position_id: 9, resource_id: 4 }
  ]);
});
