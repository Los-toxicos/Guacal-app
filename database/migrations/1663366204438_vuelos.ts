import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'vuelos'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('id_aerolinea').unsigned().references('aerolineas.id')
      table.integer('id_ruta').unsigned().references('rutas.id')
      table.integer('id_veterinario').unsigned().references('veterinarios.id')

      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
