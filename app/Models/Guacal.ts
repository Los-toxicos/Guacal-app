import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Mascota from './Mascota';
import Aerolinea from './Aerolinea';

export default class Guacal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tamano: string

  @column()
  public estado: string
  
  @column()
  public id_mascota: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Mascota, {
    foreignKey: 'id_mascota'
  })
  public mascota: HasOne<typeof Mascota>

  @manyToMany(() => Aerolinea, {
    pivotTable: 'guacal_aerolineas',
    pivotForeignKey: 'id_guacal',
    pivotRelatedForeignKey: 'id_aerolinea'
  })
  public aerolineas: ManyToMany<typeof Aerolinea>
}
