import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Aerolinea from './Aerolinea';

export default class Ruta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public origen: string

  @column()
  public destino: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Aerolinea, {
    pivotTable: 'vuelos',
    pivotForeignKey: 'id_ruta',
    pivotRelatedForeignKey: 'id_aerolinea'
  })
  public aerolineas: ManyToMany<typeof Aerolinea>
}
