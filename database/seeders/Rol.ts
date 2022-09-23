import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Rol from '../../app/Models/Rol';

export default class extends BaseSeeder {
  public async run () {
    await Rol.createMany([
      {
        nombre: 'Administrador'
      },
      {
        nombre: 'Operador de Aerolinea'
      },
      {
        nombre: 'Usuario'
      }
      
    ])
  }
}
