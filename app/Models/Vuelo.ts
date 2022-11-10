import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm';
import Veterinario from './Veterinario';

export default class Vuelo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public hora_salida: string
  
  @column()
  public hora_llegada: string

  @column()
  public capacidad: number

  @column()
  public id_ruta: number

  @column()
  public id_aerolinea: number

  @column()
  public id_veterinario: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Veterinario, {
    foreignKey: 'id_veterinario'
  })
  public veterinario: HasOne<typeof Veterinario>
}
