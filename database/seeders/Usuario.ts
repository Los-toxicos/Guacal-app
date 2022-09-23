import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Usuario from '../../app/Models/Usuario';

export default class extends BaseSeeder {
  public async run() {
    await Usuario.createMany([
      {
        name: 'Juan José Sánchez',
        email:'juanj.sanchezg@autonoma.edu.co',
        password:'hola123',
        id_rol: 1
      },
      {
        name:'Valeria Estrada',
        email:'valreia.estradal@autonoma.edu.co',
        password:'hola123',
        id_rol: 1
      },
      {
        name:'Felipe Buitrago',
        email:'felipe.buitragoca@autonoma.edu.co',
        password:'hola123',
        id_rol: 2
      },
      {
        name:'Joe Doe',
        email:'jujo00sg@gmail.com',
        password:'hola123',
        id_rol: 2
      },
      {
        name:'Jane Doe',
        email:'jujo00sg@hotmail.com',
        password:'hola123',
        id_rol: 3
      },
      {
        name:'Pepito Perez',
        email:'jujo00sg@icloud.com',
        password:'hola123',
        id_rol: 3
      }
    ])
  }
}
