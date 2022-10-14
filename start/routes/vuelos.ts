import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get("/vuelos", "VuelosController.index");
    Route.get("/vuelos/:id", "VuelosController.show");
    Route.post("/vuelos/:id", "VuelosController.store");
    Route.put("/vuelos/:id", "VuelosController.update");
    Route.delete("/vuelos/:id", "VuelosController.destroy");
})
