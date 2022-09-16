import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, BelongsTo, HasOne, hasOne, belongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Perfil from './Perfil';
import Rol from './Rol';
import ApiToken from './ApiToken';
import Mascota from './Mascota';

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string;

  @column()
  public email: string;

  @column()
  public password: string;

  @column()
  public id_rol:number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Perfil, {
    foreignKey: 'id_user'
  })
  public profile: HasOne<typeof Perfil>

  @belongsTo(() => Rol, {
    foreignKey: 'id_rol'
  })
  public rol: BelongsTo<typeof Rol>

  @hasMany(() => ApiToken,{
    foreignKey:'id_usuario',
  })
  public tokens:HasMany<typeof ApiToken>

  @hasMany(() => Mascota,{
    foreignKey:'id_mascota',
  })
  public mascotas:HasMany<typeof Mascota>

  @beforeSave()
  public static async hashPassword (el_usuario: Usuario) {
    if (el_usuario.$dirty.password) {
      el_usuario.password = await Hash.make(el_usuario.password)
    }
  }
}