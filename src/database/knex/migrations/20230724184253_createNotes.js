/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments("id")
    table.text("title")
    table.text("description")
    table.integer("user_id").references("id").inTable("users")
  })

exports.down = (knex) => knex.schema.dropTable("users")
