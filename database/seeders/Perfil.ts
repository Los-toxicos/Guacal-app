import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Perfil from '../../app/Models/Perfil';

export default class extends BaseSeeder {
  public async run() {
    await Perfil.createMany([
      {
        id_usuario: 5,
        celular: '3125267895',
        url_facebook: 'https://es-la.facebook.com/',
        url_instagram: 'https://www.instagram.com/'
      },
      {
        id_usuario: 6,
        celular: '3589856540',
        url_facebook: 'https://es-la.facebook.com/',
        url_instagram: 'https://www.instagram.com/'
      }
    ])
  }
}

