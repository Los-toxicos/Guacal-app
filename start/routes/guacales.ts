import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get("/guacales", "GuacalesController.index");
    Route.get("/guacales/:id", "GuacalesController.show");
    Route.post("/guacales", "GuacalesController.store");
    Route.put("/guacales/:id", "GuacalesController.update");
    Route.delete("/guacales/:id", "GuacalesController.destroy");
})
