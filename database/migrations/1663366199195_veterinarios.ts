import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'veterinarios'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('id_vuelo').unsigned().references('vuelos.id') 
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
