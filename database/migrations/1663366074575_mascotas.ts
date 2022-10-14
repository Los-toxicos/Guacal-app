import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'mascotas'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('id_usuario').unsigned().references('usuarios.id')
      table.integer('id_guacal').unsigned().references('guacals.id').nullable()
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
