import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'guacales'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('id_mascota').unsigned().references('mascotas.id').nullable()
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
