import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Mascota from '../../app/Models/Mascota';

export default class extends BaseSeeder {
  public async run() {
    await Mascota.createMany([
      {
        nombre: 'Jimmy Jazz',
        especie: 'Gato',
        peso: 12,
        estatura:40, 
        id_usuario:5
      },
      {
        nombre: 'Canela',
        especie: 'Perro',
        peso:23,
        estatura:120,
        id_usuario:6
      },
      {
        nombre: 'Naomi',
        especie: 'Gato',
        peso: 10,
        estatura:42, 
        id_usuario:5
      },
      {
        nombre: 'Firulais',
        especie: 'Perro',
        peso:29,
        estatura:100,
        id_usuario:6
      }
    ])
  }
}
