import { test } from '@japa/runner'

test.group('Aerolineas', () => {
  test('Ver Aerolinea segun id', async ({ client }) => {
    const response = await client.get('/aerolineas/1')
    response.assertStatus(200);
    response.assertBodyContains([
      {
        "id": 1,
        "nombre": "Avianca",
        "nit": "9856987458",
        "codigo": "AV",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00"
    }]
    )
  });
  test('Listar aerolineas', async ({ client }) => {
    const response = await client.get('/aerolineas')
    response.assertStatus(200);
    response.assertBodyContains([
      
      {
        "id": 1,
        "nombre": "Avianca",
        "nit": "9856987458",
        "codigo": "AV",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "guacales": [
            {
                "id": 1,
                "tamano": "PEQUENO",
                "estado": "VACIO",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00",
                "id_mascota": null
            },
            {
                "id": 2,
                "tamano": "PEQUENO",
                "estado": "VACIO",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00",
                "id_mascota": null
            },
            {
                "id": 3,
                "tamano": "MEDIANO",
                "estado": "VACIO",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00",
                "id_mascota": null
            }
        ],
        "rutas": [
            {
                "id": 1,
                "origen": "Bogota",
                "destino": "Manizales",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00"
            },
            {
                "id": 2,
                "origen": "Manizales",
                "destino": "Medellin",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00"
            }
        ]
    },
    {
        "id": 2,
        "nombre": "Latam",
        "nit": "1234561425",
        "codigo": "LA",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "guacales": [
            {
                "id": 4,
                "tamano": "MEDIANO",
                "estado": "VACIO",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00",
                "id_mascota": null
            },
            {
                "id": 5,
                "tamano": "GRANDE",
                "estado": "VACIO",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00",
                "id_mascota": null
            },
            {
                "id": 6,
                "tamano": "GRANDE",
                "estado": "VACIO",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00",
                "id_mascota": null
            }
        ],
        "rutas": [
            {
                "id": 3,
                "origen": "Medellin",
                "destino": "Cartagena",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00"
            }
        ]
    },
    {
        "id": 3,
        "nombre": "Copa Airlines",
        "nit": "4561237845",
        "codigo": "CM",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "guacales": [],
        "rutas": [
            {
                "id": 4,
                "origen": "Cartagena",
                "destino": "Pereira",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00"
            }
        ]
    },
    {
        "id": 4,
        "nombre": "United",
        "nit": "7894562134",
        "codigo": "UA",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "guacales": [],
        "rutas": [
            {
                "id": 5,
                "origen": "Pereira",
                "destino": "Bogota",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00"
            }
        ]
    }
      ]
    
    )
  });/* test('Eliminar usuario segun id', async ({ client }) => {
    const response = await client.delete('/aerolineas/1')
    response.assertStatus(200);
  }); */
})
