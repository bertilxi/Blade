import { Migration } from "@iguazu/puma";

const tableName = "assignment";

export = new Migration(
  knex => {
    return knex.schema.createTable(tableName, table => {
      table.increments();
      table.timestamps(true, true);
      table.timestamp("deleted_at");
      table
        .boolean("deleted")
        .notNullable()
        .defaultTo("false");

      table.integer("position_id").references("position.id");
      table.integer("resource_id").references("resource.id");
    });
  },
  knex => knex.schema.dropTableIfExists(tableName)
);
