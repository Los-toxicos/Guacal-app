import { test } from '@japa/runner'

test.group('Rutas', () => {
  test('Ver ruta segun id', async ({ client }) => {
    const response = await client.get('/rutas/1')
    response.assertStatus(200);
    response.assertBodyContains([
      {
        "id": 1,
        "origen": "Bogota",
        "destino": "Manizales",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00"
    }]
    )
  });
  test('Listar rutas', async ({ client }) => {
    const response = await client.get('/rutas')
    response.assertStatus(200);
    response.assertBodyContains([
      
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
    },
    {
        "id": 3,
        "origen": "Medellin",
        "destino": "Cartagena",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00"
    },
    {
        "id": 4,
        "origen": "Cartagena",
        "destino": "Pereira",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00"
    },
    {
        "id": 5,
        "origen": "Pereira",
        "destino": "Bogota",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00"
    }
      ]
    
    )
  });/* test('Eliminar usuario segun id', async ({ client }) => {
    const response = await client.delete('/mascotas/4')
    response.assertStatus(200);
  }); */
})
