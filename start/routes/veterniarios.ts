import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get("/veterinarios", "VeterinariosController.index");
    Route.get("/veterinarios/:id", "VeterinariosController.show");
    Route.post("/veterinarios/:id", "VeterinariosController.store");
    Route.put("/veterinarios/:id", "VeterinariosController.update");
    Route.delete("/veterinarios/:id", "VeterinariosController.destroy");
})
