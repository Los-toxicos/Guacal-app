/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/


import Route from '@ioc:Adonis/Core/Route'  

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post("/usuario", "UsuariosController.store");
Route.get("/usuario", "UsuariosController.index");

Route.post("/rol", "RolesController.store");

Route.post("/permiso", "PermisosController.store");

Route.post("/login", "SeguridadController.login");
Route.post("/forgot", "SeguridadController.forgotPassword");
Route.post("/reset", "SeguridadController.resetPassword");
Route.post("/logout", "SeguridadController.logout");

