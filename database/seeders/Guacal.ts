import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Guacal from '../../app/Models/Guacal';

export default class extends BaseSeeder {
  public async run() {
    await Guacal.createMany([
      {
        tamano: 'PEQUENO',
        estado: 'VACIO'
      },
      {
        tamano: 'PEQUENO',
        estado: 'VACIO'
      },
      {
        tamano: 'MEDIANO',
        estado: 'VACIO'
      },
      {
        tamano: 'MEDIANO',
        estado: 'VACIO'
      },
      {
        tamano: 'GRANDE',
        estado: 'VACIO'
      },
      {
        tamano: 'GRANDE',
        estado: 'VACIO'
      }
    ])
  }
}
