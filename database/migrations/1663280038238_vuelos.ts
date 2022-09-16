import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'vuelos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.dateTime('hora_salida')
      table.dateTime('hora_llegada').nullable()
      table.integer('capacidad')
      table.integer('id_aerolinea').unsigned().references('aerolineas.id')
      table.integer('id_ruta').unsigned().references('rutas.id')
      table.integer('id_veterinario').unsigned().references('veterinarios.id')      
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
