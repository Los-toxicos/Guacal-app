import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'veterinarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nombre').notNullable()
      table.string('especialidad').notNullable()
           
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
       table.timestamps(true,true )
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
