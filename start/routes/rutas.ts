import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get("/rutas", "RutasController.index");
    Route.get("/rutas/:id", "RutasController.show");
    Route.post("/rutas", "RutasController.store");
    Route.put("/rutas/:id", "RutasController.update");
    Route.delete("/rutas/:id", "RutasController.destroy");
})
