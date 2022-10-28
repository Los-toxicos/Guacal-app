import { test } from '@japa/runner'


test.group('Usuarios', () => {
  test('Ver usuario segun id', async ({ client }) => {
    const response = await client.get('/usuarios/4')
    response.assertStatus(200);
    response.assertBodyContains(
      {
        "id": 4,
        "nombre": "Joe Doe",
        "correo": "jujo00sg@gmail.com",
        "contrasena": "$argon2id$v=19$t=3,m=4096,p=1$nCPFXdHdrvpyM+KzFGixPw$MCHAlXMGbaqn64aC1nfCrsqO4rPnduN7f6jIUy51WR0",
        "id_rol": 2,
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00"
    }
    )
  });
  test('Listar usuarios', async ({ client }) => {
    const response = await client.get('/usuarios')
    response.assertStatus(200);
    response.assertBodyContains([
      
      {
        "id": 4,
        "nombre": "Joe Doe",
        "correo": "jujo00sg@gmail.com",
        "contrasena": "$argon2id$v=19$t=3,m=4096,p=1$nCPFXdHdrvpyM+KzFGixPw$MCHAlXMGbaqn64aC1nfCrsqO4rPnduN7f6jIUy51WR0",
        "id_rol": 2,
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "rol": {
            "id": 2,
            "nombre": "Operador de Aerolinea",
            "created_at": "2022-10-21T16:38:48.000-05:00",
            "updated_at": "2022-10-21T16:38:48.000-05:00"
        },
        "profile": null
    },
    {
        "id": 5,
        "nombre": "Jane Doe",
        "correo": "jujo00sg@hotmail.com",
        "contrasena": "$argon2id$v=19$t=3,m=4096,p=1$rKb1YOFWyXhLj/MyKjQxjQ$0CTvRBye/V0IAdz5cNnUBfNP9l3QzMTb/Q+AvY5f6dY",
        "id_rol": 3,
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "rol": {
            "id": 3,
            "nombre": "Cliente",
            "created_at": "2022-10-21T17:28:32.000-05:00",
            "updated_at": "2022-10-21T17:28:32.000-05:00"
        },
        "profile": {
            "id": 1,
            "id_usuario": 5,
            "celular": "3125267895",
            "url_facebook": "https://es-la.facebook.com/",
            "url_instagram": "https://www.instagram.com/",
            "created_at": "2022-10-21T16:38:48.000-05:00",
            "updated_at": "2022-10-21T16:38:48.000-05:00"
        }
    },
    {
        "id": 6,
        "nombre": "Pepito Perez",
        "correo": "jujo00sg@icloud.com",
        "contrasena": "$argon2id$v=19$t=3,m=4096,p=1$PHMp2YZMIS5baTEtoJJqTA$IXe3CTk3ma9k41NR3npEzrySuBvc3k6GxgCsiu2UdEM",
        "id_rol": 3,
        "created_at": "2022-10-21T16:38:48.000-05:00",
        "updated_at": "2022-10-21T16:38:48.000-05:00",
        "rol": {
            "id": 3,
            "nombre": "Cliente",
            "created_at": "2022-10-21T17:28:32.000-05:00",
            "updated_at": "2022-10-21T17:28:32.000-05:00"
        },
        "profile": {
            "id": 2,
            "id_usuario": 6,
            "celular": "3589856540",
            "url_facebook": "https://es-la.facebook.com/",
            "url_instagram": "https://www.instagram.com/",
            "created_at": "2022-10-21T16:38:48.000-05:00",
            "updated_at": "2022-10-21T16:38:48.000-05:00"
        }
    }
      ]
    
    )
  });/* test('Eliminar usuario segun id', async ({ client }) => {
    const response = await client.delete('/usuarios/3')
    response.assertStatus(200); 
  });*/
  
  
})
