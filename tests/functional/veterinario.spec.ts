import { test } from '@japa/runner'

test.group('Veterinarios', () => {
  test('Ver veterinario segun id', async ({ client }) => {
    const response = await client.get('/veterinarios/1')
    response.assertStatus(200);
    response.assertBodyContains([
      {
        "id": 1,
        "nombre": "Manuel Osos",
        "especialidad": "General",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "id_vuelo": 1
    }]
    )
  });
  test('Listar veterinarios', async ({ client }) => {
    const response = await client.get('/veterinarios')
    response.assertStatus(200);
    response.assertBodyContains([
      
      {
        "id": 1,
        "nombre": "Manuel Osos",
        "especialidad": "General",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "id_vuelo": 1
    },
    {
        "id": 2,
        "nombre": "Victoria Micos",
        "especialidad": "Anestesiologo",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "id_vuelo": null
    },
    {
        "id": 3,
        "nombre": "Nina Serpientes",
        "especialidad": "Felinos",
        "created_at": "2022-10-21T16:38:49.000-05:00",
        "updated_at": "2022-10-21T16:38:49.000-05:00",
        "id_vuelo": null
    }
      ]
    
    )
  });/* test('Eliminar usuario segun id', async ({ client }) => {
    const response = await client.delete('/mascotas/4')
    response.assertStatus(200);
  }); */
})
