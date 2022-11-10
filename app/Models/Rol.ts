import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Usuario from './Usuario';
import Permiso from './Permiso';

export default class Rol extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Usuario, {
    foreignKey: 'id_rol'
  })
  public users: HasMany<typeof Usuario>

  @manyToMany(() => Permiso, {
    pivotTable: 'permiso_rols',
    pivotForeignKey: 'id_rol',
    pivotRelatedForeignKey: 'id_permiso'

    /* pivotColumns: ['created_at'] */
  })
  public permisos: ManyToMany<typeof Permiso>
}
