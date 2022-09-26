import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.get("/aerolineas", "AerolineasController.index");    
    Route.get("/aerolineas/:id", "AerolineasController.show");
    Route.post("/aerolineas/:id", "AerolineasController.store");
    Route.put("/aerolineas/:id", "AerolineasController.update");
    Route.delete("/aerolineas/:id", "AerolineasController.destroy");
})
