import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import Usuario from './Usuario';
import Guacal from './Guacal';

export default class Mascota extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public especie: string

  @column()
  public peso: number

  @column()
  public estatura: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo (() => Usuario,{
    localKey:'id_usuario',
  })
  public usuario:BelongsTo<typeof Usuario>

  @hasOne(() => Guacal, {
    foreignKey: 'id_guacal'
  })
  public guacal: HasOne<typeof Guacal>
}
