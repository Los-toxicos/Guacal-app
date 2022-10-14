import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'vuelos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('hora_salida').notNullable()
      table.string('hora_llegada').nullable().defaultTo(null)
      table.integer('capacidad').notNullable()
            
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
