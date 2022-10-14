import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Veterinario from '../../app/Models/Veterinario';

export default class extends BaseSeeder {
  public async run () {
    await Veterinario.createMany([
      {
        nombre:'Manuel Osos',
        especialidad:'General',
        id_vuelo:1      
      },
      {
        nombre:'Victoria Micos',
        especialidad:'Anestesiologo'        
      },
      {
        nombre:'Nina Serpientes',
        especialidad:'Felinos'
      }
    ])
  }
}
