import { Migration } from "@iguazu/puma";

const tableName = "resource";

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
    });
  },
  knex => knex.schema.dropTableIfExists(tableName)
);
