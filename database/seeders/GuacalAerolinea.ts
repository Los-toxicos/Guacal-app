import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import GuacalAerolinea from '../../app/Models/GuacalAerolinea';

export default class extends BaseSeeder {
  public async run () {
    await GuacalAerolinea.createMany([
      {
        id_aerolinea:1,
        id_guacal:1
      },
      {
        id_aerolinea:1,
        id_guacal:2
      },
      {
        id_aerolinea:1,
        id_guacal:3
      },
      {
        id_aerolinea:2,
        id_guacal:4
      },
      {
        id_aerolinea:2,
        id_guacal:5
      },
      {
        id_aerolinea:2,
        id_guacal:6
      }
    ])
  }
}
