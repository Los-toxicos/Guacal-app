import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'guacal_aerolineas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('id_guacal').unsigned().references('guacals.id').nullable()
      table.integer('id_aerolinea').unsigned().references('aerolineas.id').nullable()
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
