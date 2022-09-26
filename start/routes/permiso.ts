import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {    
    Route.get("/permisos", "PermisosController.index");
    Route.get("/permisos/:id", "PermisosController.show");
    Route.post("/permisos/:id", "PermisosController.store");
    Route.put("/permisos/:id", "PermisosController.update");
    Route.delete("/permisos/:id", "PermisosController.destroy");
})
