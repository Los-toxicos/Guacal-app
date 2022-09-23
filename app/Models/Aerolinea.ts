import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Ruta from './Ruta';
import Guacal from './Guacal';

export default class Aerolinea extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public nit: string

  @column()
  public codigo:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Ruta, {
    pivotTable: 'vuelos',
    pivotForeignKey: 'id_aerolinea',
    pivotRelatedForeignKey: 'id_ruta'
  })
  public rutas: ManyToMany<typeof Ruta>

  @manyToMany(() => Guacal, {
    pivotTable: 'guacal_aerolineas',
    pivotForeignKey: 'id_aerolinea',
    pivotRelatedForeignKey: 'id_guacal'
  })
  public guacales: ManyToMany<typeof Guacal>
}
