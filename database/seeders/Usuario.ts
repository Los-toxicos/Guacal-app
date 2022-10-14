import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Usuario from '../../app/Models/Usuario';

export default class extends BaseSeeder {
  public async run() {
    await Usuario.createMany([
      {
        nombre: 'Juan José Sánchez',
        correo:'juanj.sanchezg@autonoma.edu.co',
        contrasena:'hola123',
        id_rol: 1
      },
      {
        nombre:'Valeria Estrada',
        correo:'valreia.estradal@autonoma.edu.co',
        contrasena:'hola123',
        id_rol: 1
      },
      {
        nombre:'Felipe Buitrago',
        correo:'felipe.buitragoca@autonoma.edu.co',
        contrasena:'hola123',
        id_rol: 2
      },
      {
        nombre:'Joe Doe',
        correo:'jujo00sg@gmail.com',
        contrasena:'hola123',
        id_rol: 2
      },
      {
        nombre:'Jane Doe',
        correo:'jujo00sg@hotmail.com',
        contrasena:'hola123',
        id_rol: 3
      },
      {
        nombre:'Pepito Perez',
        correo:'jujo00sg@icloud.com',
        contrasena:'hola123',
        id_rol: 3
      }
    ])
  }
}
