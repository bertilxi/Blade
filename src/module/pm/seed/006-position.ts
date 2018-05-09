import { Seed } from "@iguazu/puma";

const tableName = "position";

export = new Seed(async knex => {
  await knex(tableName).del();
  return knex(tableName).insert([
    { name: "awesome walmart Position 1", project_id: 1 },
    { name: "awesome walmart Position 2", project_id: 1 },
    { name: "awesome walmart Position 3", project_id: 1 },
    { name: "awesome netflix Position 1", project_id: 2 },
    { name: "awesome netflix Position 2", project_id: 2 },
    { name: "awesome netflix Position 3", project_id: 2 },
    { name: "awesome google Position 1", project_id: 3 },
    { name: "awesome google Position 2", project_id: 3 },
    { name: "awesome google Position 3", project_id: 3 }
  ]);
});
