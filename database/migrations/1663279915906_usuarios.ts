import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nombre').notNullable()
      table.string('correo').notNullable()
      table.string('contrasena', 256).notNullable().unique()
      table.integer('id_rol').unsigned().references('rols.id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
       
      table.timestamp('created_at',true)
      table.timestamp('updated_at', true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
