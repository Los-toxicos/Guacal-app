import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Rol from './Rol';

export default class Permiso extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public url: string;

  @column()
  public metodo: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Rol, {
    pivotTable: 'permiso_rols',
    pivotForeignKey: 'id_permiso',
    pivotRelatedForeignKey: 'id_rol'
  })
  public roles: ManyToMany<typeof Rol>
}
