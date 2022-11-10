import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
    Route.post("/login", "SeguridadController.login");
    Route.post("/forgot", "SeguridadController.forgotPassword");
    Route.post("/reset", "SeguridadController.resetPassword");
    Route.post("/logout", "SeguridadController.logout");
})
