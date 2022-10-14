import { test } from '@japa/runner'

test.group('Usuarios', () => {
  test('Ver usuarios', async ({ client }) => {
    const response = await client.get('/usuarios/1')
    response.assertStatus(200)
    response.assertBodyContains(
      {
        "id": 1,
        "nombre": "Juan José Sánchez",
        "correo": "juanj.sanchezg@autonoma.edu.co",
        "contrasena": "$argon2id$v=19$t=3,m=4096,p=1$3DfdQL7fzWz23T6/NDqEJA$STxTfWM7Nvw7+nkVq0f3m4UHtmj1wgXq1a2JISAxzSU",
        "id_rol": 1,
        "created_at": "2022-09-25T22:55:38.000-05:00",
        "updated_at": "2022-09-25T22:55:38.000-05:00"
      }
    )
  })
  test('Listar usuarios', async ({ client }) => {
    const response = await client.get('/usuarios')
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 1,
        "nombre": "Juan José Sánchez",
        "correo": "juanj.sanchezg@autonoma.edu.co",
        "contrasena": "$argon2id$v=19$t=3,m=4096,p=1$3DfdQL7fzWz23T6/NDqEJA$STxTfWM7Nvw7+nkVq0f3m4UHtmj1wgXq1a2JISAxzSU",
        "id_rol": 1,
        "created_at": "2022-09-25T22:55:38.000-05:00",
        "updated_at": "2022-09-25T22:55:38.000-05:00"
      }
    ])
  })
})
