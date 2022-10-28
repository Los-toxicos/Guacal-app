import { test } from '@japa/runner'

test.group('Roles', () => {
test('Ver rol segun id', async ({ client }) => {
  const response = await client.get('/roles/1')
  response.assertStatus(200);
  response.assertBodyContains(
    {
      "id": 1,
      "nombre": "Administrador",
      "created_at": "2022-10-21T16:38:48.000-05:00",
      "updated_at": "2022-10-21T16:38:48.000-05:00"
  }
  )
});
test('Listar roles', async ({ client }) => {
  const response = await client.get('/roles')
  response.assertStatus(200);
  response.assertBodyContains([
    
    {
      "id": 1,
      "nombre": "Administrador",
      "created_at": "2022-10-21T16:38:48.000-05:00",
      "updated_at": "2022-10-21T16:38:48.000-05:00",
      "permisos": [
          {
              "id": 1,
              "url": "/aerolineas",
              "metodo": "post",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 2,
              "url": "/aerolineas",
              "metodo": "get",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 3,
              "url": "/aerolineas/?",
              "metodo": "get",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 4,
              "url": "/aerolineas/?",
              "metodo": "put",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 5,
              "url": "/aerolineas/?",
              "metodo": "delete",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 6,
              "url": "/guacales",
              "metodo": "post",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 7,
              "url": "/guacales",
              "metodo": "get",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 8,
              "url": "/guacales/?",
              "metodo": "get",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 9,
              "url": "/guacales/?",
              "metodo": "put",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 10,
              "url": "/guacales/?",
              "metodo": "delete",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 11,
              "url": "/mascotas",
              "metodo": "post",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 12,
              "url": "/mascotas",
              "metodo": "get",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 13,
              "url": "/mascotas/?",
              "metodo": "get",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 14,
              "url": "/mascotas/?",
              "metodo": "put",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 15,
              "url": "/mascotas/?",
              "metodo": "delete",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 16,
              "url": "/permisos",
              "metodo": "post",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 17,
              "url": "/permisos",
              "metodo": "get",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 18,
              "url": "/permisos/?",
              "metodo": "get",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 19,
              "url": "/permisos/?",
              "metodo": "put",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 20,
              "url": "/permisos/?",
              "metodo": "delete",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 21,
              "url": "/roles",
              "metodo": "post",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 22,
              "url": "/roles",
              "metodo": "get",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 23,
              "url": "/roles/?",
              "metodo": "get",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 24,
              "url": "/roles/?",
              "metodo": "put",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 25,
              "url": "/roles/?",
              "metodo": "delete",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 26,
              "url": "/rutas",
              "metodo": "post",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 27,
              "url": "/rutas",
              "metodo": "get",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          },
          {
              "id": 28,
              "url": "/rutas/?",
              "metodo": "get",
              "created_at": "2022-10-21T16:38:48.000-05:00",
              "updated_at": "2022-10-21T16:38:48.000-05:00"
          }
      ]
  },
  {
      "id": 2,
      "nombre": "Operador de Aerolinea",
      "created_at": "2022-10-21T16:38:48.000-05:00",
      "updated_at": "2022-10-21T16:38:48.000-05:00",
      "permisos": []
  },
  {
      "id": 3,
      "nombre": "Cliente",
      "created_at": "2022-10-21T17:28:32.000-05:00",
      "updated_at": "2022-10-21T17:28:32.000-05:00",
      "permisos": []
  }
    ]
  
  )
});/* test('Eliminar rol segun id', async ({ client }) => {
  const response = await client.delete('/roles/3')
  response.assertStatus(200);
}); */

})