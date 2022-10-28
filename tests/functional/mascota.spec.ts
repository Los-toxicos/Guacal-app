import { test } from '@japa/runner'
test.group('Mascotas', () => {
test('Ver mascota segun id', async ({ client }) => {
  const response = await client.get('/mascotas/1')
  response.assertStatus(200);
  response.assertBodyContains([
    {
      "id": 1,
      "nombre": "Jimmy Jazz",
      "especie": "Gato",
      "peso": 12,
      "estatura": 40,
      "created_at": "2022-10-21T16:38:49.000-05:00",
      "updated_at": "2022-10-21T16:38:49.000-05:00",
      "id_usuario": 5,
      "id_guacal": null
  }]
  )
});
test('Listar usuarios', async ({ client }) => {
  const response = await client.get('/mascotas')
  response.assertStatus(200);
  response.assertBodyContains([
    
    {
      "id": 1,
      "nombre": "Jimmy Jazz",
      "especie": "Gato",
      "peso": 12,
      "estatura": 40,
      "created_at": "2022-10-21T16:38:49.000-05:00",
      "updated_at": "2022-10-21T16:38:49.000-05:00",
      "id_usuario": 5,
      "id_guacal": null
  },
  {
      "id": 2,
      "nombre": "Canela",
      "especie": "Perro",
      "peso": 23,
      "estatura": 120,
      "created_at": "2022-10-21T16:38:49.000-05:00",
      "updated_at": "2022-10-21T16:38:49.000-05:00",
      "id_usuario": 6,
      "id_guacal": null
  },
  {
      "id": 3,
      "nombre": "Naomi",
      "especie": "Gato",
      "peso": 10,
      "estatura": 42,
      "created_at": "2022-10-21T16:38:49.000-05:00",
      "updated_at": "2022-10-21T16:38:49.000-05:00",
      "id_usuario": 5,
      "id_guacal": null
  },
  {
      "id": 4,
      "nombre": "Firulais",
      "especie": "Perro",
      "peso": 29,
      "estatura": 100,
      "created_at": "2022-10-21T16:38:49.000-05:00",
      "updated_at": "2022-10-21T16:38:49.000-05:00",
      "id_usuario": 6,
      "id_guacal": null
  }
    ]
  
  )
});/* test('Eliminar usuario segun id', async ({ client }) => {
  const response = await client.delete('/mascotas/4')
  response.assertStatus(200);
}); */
})
