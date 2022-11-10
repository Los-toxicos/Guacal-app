import { test } from '@japa/runner'

test.group('Guacales', () => {
  test('Ver guacal segun id', async ({ client }) => {
    const response = await client.get('/guacales/1')
    response.assertStatus(200);
    response.assertBodyContains([
      {
        "id": 1,
        "tamano": "PEQUENO",
        "estado": "VACIO",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "id_mascota": null
    }]
    )
  });
  test('Listar guacales', async ({ client }) => {
    const response = await client.get('/guacales')
    response.assertStatus(200);
    response.assertBodyContains([
      
      {
        "id": 1,
        "tamano": "PEQUENO",
        "estado": "VACIO",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "id_mascota": null,
        "aerolineas": [
            {
                "id": 1,
                "nombre": "Avianca",
                "nit": "9856987458",
                "codigo": "AV",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00"
            }
        ]
    },
    {
        "id": 2,
        "tamano": "PEQUENO",
        "estado": "VACIO",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "id_mascota": null,
        "aerolineas": [
            {
                "id": 1,
                "nombre": "Avianca",
                "nit": "9856987458",
                "codigo": "AV",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00"
            }
        ]
    },
    {
        "id": 3,
        "tamano": "MEDIANO",
        "estado": "VACIO",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "id_mascota": null,
        "aerolineas": [
            {
                "id": 1,
                "nombre": "Avianca",
                "nit": "9856987458",
                "codigo": "AV",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00"
            }
        ]
    },
    {
        "id": 4,
        "tamano": "MEDIANO",
        "estado": "VACIO",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "id_mascota": null,
        "aerolineas": [
            {
                "id": 2,
                "nombre": "Latam",
                "nit": "1234561425",
                "codigo": "LA",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00"
            }
        ]
    },
    {
        "id": 5,
        "tamano": "GRANDE",
        "estado": "VACIO",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "id_mascota": null,
        "aerolineas": [
            {
                "id": 2,
                "nombre": "Latam",
                "nit": "1234561425",
                "codigo": "LA",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00"
            }
        ]
    },
    {
        "id": 6,
        "tamano": "GRANDE",
        "estado": "VACIO",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "id_mascota": null,
        "aerolineas": [
            {
                "id": 2,
                "nombre": "Latam",
                "nit": "1234561425",
                "codigo": "LA",
                "created_at": "2022-10-21T16:38:49.000-05:00",
                "updated_at": "2022-10-21T16:38:49.000-05:00"
            }
        ]
    },
    {
        "id": 7,
        "tamano": "PEQUENO",
        "estado": "RESERVADO",
        "created_at": "2022-10-28T01:20:56.000-05:00",
        "updated_at": "2022-10-28T01:20:56.000-05:00",
        "id_mascota": null,
        "aerolineas": []
    },
    {
        "id": 8,
        "tamano": "PEQUENO",
        "estado": "RESERVADO",
        "created_at": "2022-10-28T01:21:24.000-05:00",
        "updated_at": "2022-10-28T01:21:24.000-05:00",
        "id_mascota": null,
        "aerolineas": []
    },
    {
        "id": 9,
        "tamano": "PEQUENO",
        "estado": "RESERVADO",
        "created_at": "2022-10-28T01:22:36.000-05:00",
        "updated_at": "2022-10-28T01:22:36.000-05:00",
        "id_mascota": null,
        "aerolineas": []
    },
    {
        "id": 10,
        "tamano": "PEQUENO",
        "estado": "RESERVADO",
        "created_at": "2022-10-28T01:23:48.000-05:00",
        "updated_at": "2022-10-28T01:23:48.000-05:00",
        "id_mascota": null,
        "aerolineas": []
    },
    {
        "id": 11,
        "tamano": "PEQUENO",
        "estado": "RESERVADO",
        "created_at": "2022-10-28T01:26:09.000-05:00",
        "updated_at": "2022-10-28T01:26:09.000-05:00",
        "id_mascota": null,
        "aerolineas": []
    },
    {
        "id": 12,
        "tamano": "PEQUENO",
        "estado": "RESERVADO",
        "created_at": "2022-10-28T01:28:05.000-05:00",
        "updated_at": "2022-10-28T01:28:05.000-05:00",
        "id_mascota": null,
        "aerolineas": []
    },
    {
        "id": 13,
        "tamano": "PEQUENO",
        "estado": "RESERVADO",
        "created_at": "2022-10-28T01:30:05.000-05:00",
        "updated_at": "2022-10-28T01:30:05.000-05:00",
        "id_mascota": null,
        "aerolineas": []
    },
    {
        "id": 14,
        "tamano": "PEQUENO",
        "estado": "RESERVADO",
        "created_at": "2022-10-28T01:30:35.000-05:00",
        "updated_at": "2022-10-28T01:30:35.000-05:00",
        "id_mascota": null,
        "aerolineas": []
    },
    {
        "id": 15,
        "tamano": "PEQUENO",
        "estado": "RESERVADO",
        "created_at": "2022-10-28T01:35:54.000-05:00",
        "updated_at": "2022-10-28T01:35:54.000-05:00",
        "id_mascota": null,
        "aerolineas": []
    },
    {
        "id": 16,
        "tamano": "PEQUENO",
        "estado": "RESERVADO",
        "created_at": "2022-10-28T01:47:03.000-05:00",
        "updated_at": "2022-10-28T01:47:03.000-05:00",
        "id_mascota": null,
        "aerolineas": []
    }
      ]
    
    )
  });/* test('Eliminar usuario segun id', async ({ client }) => {
    const response = await client.delete('/mascotas/4')
    response.assertStatus(200);
  }); */
})
