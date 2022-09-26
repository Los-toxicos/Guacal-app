import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get("/mascotas", "MascotasController.index");
    Route.get("/mascotas/:id", "MascotasController.show");
    Route.post("/mascotas/:id", "MascotasController.store");
    Route.put("/mascotas/:id", "MascotasController.update");
    Route.delete("/mascotas/:id", "MascotasController.destroy");
})
