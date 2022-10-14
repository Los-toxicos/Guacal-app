import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Ruta from '../../app/Models/Ruta';

export default class extends BaseSeeder {
  public async run () {
    await Ruta.createMany([
    {
      origen:'Bogota',
      destino:'Manizales'
    },
    {
      origen:'Manizales',
      destino:'Medellin'
    },
    {
      origen:'Medellin',
      destino:'Cartagena'
    },
    {
      origen:'Cartagena',
      destino:'Pereira'
    },
    {
      origen:'Pereira',
      destino:'Bogota'
    }    
    ])
  }
}
