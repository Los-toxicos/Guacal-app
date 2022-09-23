import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aerolinea from '../../app/Models/Aerolinea';

export default class extends BaseSeeder {
  public async run () {
    await Aerolinea.createMany([
      {
        nombre:'Avianca',
        nit:'9856987458',
        codigo:'AV'
      },
      {
        nombre:'Latam',
        nit:'1234561425',
        codigo:'LA'
      },
      {
        nombre:'Copa Airlines',
        nit:'4561237845',
        codigo:'CM'
      },
      {
        nombre:'United',
        nit:'7894562134',
        codigo:'UA'
      }
    ])
  }
}
