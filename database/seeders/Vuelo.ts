import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Vuelo from '../../app/Models/Vuelo';

export default class extends BaseSeeder {
  public async run () {
    await Vuelo.createMany([
    {
      hora_salida:'00:10',
      hora_llegada:'01:10',
      capacidad:10,
      id_ruta:1,
      id_aerolinea:1
    },
    {
      hora_salida:'21:10',
      hora_llegada:'02:03',
      capacidad:15,
      id_ruta:2,
      id_aerolinea:1
    },
    {
      hora_salida:'12:10',
      hora_llegada:'17:30',
      capacidad:5,
      id_ruta:3,
      id_aerolinea:2
    },
    {
      hora_salida:'05:10',
      hora_llegada:'06:03',
      capacidad:20,
      id_ruta:4,
      id_aerolinea:3
    },
    {
      hora_salida:'20:40',
      hora_llegada:'22:03',
      capacidad:2,
      id_ruta:5,
      id_aerolinea:4
    }
    ])
  }
}
