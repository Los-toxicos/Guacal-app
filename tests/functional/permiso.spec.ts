import { test } from '@japa/runner'

test.group('Permisos', () => {
  test('Ver permiso segun id', async ({ client }) => {
    const response = await client.get('/permisos/1')
    response.assertStatus(200);
    response.assertBodyContains([
      {
        "id": 1,
        "url": "/aerolineas",
        "metodo": "post",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00"
    }]
    )
  });
  test('Listar permisos', async ({ client }) => {
    const response = await client.get('/permisos')
    response.assertStatus(200);
    response.assertBodyContains([
      
      {
        "id": 1,
        "url": "/aerolineas",
        "metodo": "post",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 2,
        "url": "/aerolineas",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 3,
        "url": "/aerolineas/?",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 4,
        "url": "/aerolineas/?",
        "metodo": "put",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 5,
        "url": "/aerolineas/?",
        "metodo": "delete",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 6,
        "url": "/guacales",
        "metodo": "post",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 7,
        "url": "/guacales",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 8,
        "url": "/guacales/?",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 9,
        "url": "/guacales/?",
        "metodo": "put",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 10,
        "url": "/guacales/?",
        "metodo": "delete",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 11,
        "url": "/mascotas",
        "metodo": "post",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 12,
        "url": "/mascotas",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 13,
        "url": "/mascotas/?",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 14,
        "url": "/mascotas/?",
        "metodo": "put",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 15,
        "url": "/mascotas/?",
        "metodo": "delete",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 16,
        "url": "/permisos",
        "metodo": "post",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 17,
        "url": "/permisos",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 18,
        "url": "/permisos/?",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 19,
        "url": "/permisos/?",
        "metodo": "put",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 20,
        "url": "/permisos/?",
        "metodo": "delete",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 21,
        "url": "/roles",
        "metodo": "post",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 22,
        "url": "/roles",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 23,
        "url": "/roles/?",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 24,
        "url": "/roles/?",
        "metodo": "put",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 25,
        "url": "/roles/?",
        "metodo": "delete",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 26,
        "url": "/rutas",
        "metodo": "post",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 27,
        "url": "/rutas",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 28,
        "url": "/rutas/?",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": [
            {
                "id": 1,
                "nombre": "Administrador",
                "created_at": "2022-10-21T16:38:48.000-05:00",
                "updated_at": "2022-10-21T16:38:48.000-05:00"
            }
        ]
    },
    {
        "id": 29,
        "url": "/rutas/?",
        "metodo": "put",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 30,
        "url": "/rutas/?",
        "metodo": "delete",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 31,
        "url": "/usuarios",
        "metodo": "post",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 32,
        "url": "/usuarios",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 33,
        "url": "/usuarios/?",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 34,
        "url": "/usuarios/?",
        "metodo": "put",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 35,
        "url": "/usuarios/?",
        "metodo": "delete",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 36,
        "url": "/veterinarios",
        "metodo": "post",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 37,
        "url": "/veterinarios",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 38,
        "url": "/veterinarios/?",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 39,
        "url": "/veterinarios/?",
        "metodo": "put",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 40,
        "url": "/veterinarios/?",
        "metodo": "delete",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 41,
        "url": "/vuelos",
        "metodo": "post",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 42,
        "url": "/vuelos",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 43,
        "url": "/vuelos/?",
        "metodo": "get",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 44,
        "url": "/vuelos/?",
        "metodo": "put",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    },
    {
        "id": 45,
        "url": "/vuelos/?",
        "metodo": "delete",
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "roles": []
    }
      ]
    
    )
  });/* test('Eliminar usuario segun id', async ({ client }) => {
    const response = await client.delete('/permisos/1')
    response.assertStatus(200);
  }); */
})
