import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Mascota from './Mascota';
import Aerolinea from './Aerolinea';

export default class Guacal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public capacidad: number

  @column()
  public estado: string  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Mascota, {
    foreignKey: 'id_mascota'
  })
  public mascota: HasOne<typeof Mascota>

  @manyToMany(() => Aerolinea, {
    pivotTable: 'guacales_aerolineas',
    pivotForeignKey: 'id_guacal',
    pivotRelatedForeignKey: 'id_aerolinea'
  })
  public aerolineas: ManyToMany<typeof Aerolinea>
}
