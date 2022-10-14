import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Permiso from '../../app/Models/Permiso';

export default class extends BaseSeeder {
  public async run() {
    await Permiso.createMany([
      /* Aerolineas */
      {
        url: '/aerolineas',
        metodo: 'post'
      },
      {
        url: '/aerolineas',
        metodo: 'get'
      },
      {
        url: '/aerolineas/?',
        metodo: 'get'
      },
      {
        url: '/aerolineas/?',
        metodo: 'put'
      },
      {
        url: '/aerolineas/?',
        metodo: 'delete'
      },
      /* Guacales */
      {
        url: '/guacales',
        metodo: 'post'
      },
      {
        url: '/guacales',
        metodo: 'get'
      },
      {
        url: '/guacales/?',
        metodo: 'get'
      },
      {
        url: '/guacales/?',
        metodo: 'put'
      },
      {
        url: '/guacales/?',
        metodo: 'delete'
      },
      /* Mascotas */
      {
        url: '/mascotas',
        metodo: 'post'
      },
      {
        url: '/mascotas',
        metodo: 'get'
      },
      {
        url: '/mascotas/?',
        metodo: 'get'
      },
      {
        url: '/mascotas/?',
        metodo: 'put'
      },
      {
        url: '/mascotas/?',
        metodo: 'delete'
      },
      /* Permisos */
      {
        url: '/permisos',
        metodo: 'post'
      },
      {
        url: '/permisos',
        metodo: 'get'
      },
      {
        url: '/permisos/?',
        metodo: 'get'
      },
      {
        url: '/permisos/?',
        metodo: 'put'
      },
      {
        url: '/permisos/?',
        metodo: 'delete'
      },
      /* Roles */
      {
        url: '/roles',
        metodo: 'post'
      },
      {
        url: '/roles',
        metodo: 'get'
      },
      {
        url: '/roles/?',
        metodo: 'get'
      },
      {
        url: '/roles/?',
        metodo: 'put'
      },
      {
        url: '/roles/?',
        metodo: 'delete'
      },
      /* Rutas */
      {
        url: '/rutas',
        metodo: 'post'
      },
      {
        url: '/rutas',
        metodo: 'get'
      },
      {
        url: '/rutas/?',
        metodo: 'get'
      },
      {
        url: '/rutas/?',
        metodo: 'put'
      },
      {
        url: '/rutas/?',
        metodo: 'delete'
      },
      /* Usuarios */
      {
        url: '/usuarios',
        metodo: 'post'
      },
      {
        url: '/usuarios',
        metodo: 'get'
      },
      {
        url: '/usuarios/?',
        metodo: 'get'
      },
      {
        url: '/usuarios/?',
        metodo: 'put'
      },
      {
        url: '/usuarios/?',
        metodo: 'delete'
      },
      /* Veterinarios */
      {
        url: '/veterinarios',
        metodo: 'post'
      },
      {
        url: '/veterinarios',
        metodo: 'get'
      },
      {
        url: '/veterinarios/?',
        metodo: 'get'
      },
      {
        url: '/veterinarios/?',
        metodo: 'put'
      },
      {
        url: '/veterinarios/?',
        metodo: 'delete'
      },
      /* Vuelos */      
      {
        url: '/vuelos',
        metodo: 'post'
      },
      {
        url: '/vuelos',
        metodo: 'get'
      },
      {
        url: '/vuelos/?',
        metodo: 'get'
      },
      {
        url: '/vuelos/?',
        metodo: 'put'
      },
      {
        url: '/vuelos/?',
        metodo: 'delete'
      }
    ])
  }
}
