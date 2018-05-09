import { Migration } from "@iguazu/puma";

const tableName = "project";

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

      table.string("name").notNullable();
      table.integer("client_id").references("client.id");
    });
  },
  knex => knex.schema.dropTableIfExists(tableName)
);
