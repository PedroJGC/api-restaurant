import type { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.renameTable("table_sessions", "tables_sessions")
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.renameTable("tables_sessions", "table_sessions")
}
