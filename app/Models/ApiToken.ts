import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Usuario from './Usuario';

export default class ApiToken extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_usuario:number

  @column()
  public name:string

  @column()
  public type:string

  @column()
  public token:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo (() => Usuario,{
    localKey:'id_usuario',
  })
  public usuario:BelongsTo<typeof Usuario>
}
