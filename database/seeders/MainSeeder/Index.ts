import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Application from '@ioc:Adonis/Core/Application'

export default class IndexSeeder extends BaseSeeder {

  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {

    if (Seeder.default.developmentOnly && !Application.inDev) {
      return
    }

    await new Seeder.default(this.client).run()
  }

  public async run() {
    await this.runSeeder(await import('../Rol'))
    await this.runSeeder(await import('../Usuario'))
    await this.runSeeder(await import('../Permiso'))
    await this.runSeeder(await import('../Perfil'))
    await this.runSeeder(await import('../PermisoRol'))
    await this.runSeeder(await import('../Aerolinea'))    
    await this.runSeeder(await import('../Mascota'))
    await this.runSeeder(await import('../Guacal'))
    await this.runSeeder(await import('../Ruta'))
    await this.runSeeder(await import('../Vuelo'))
    await this.runSeeder(await import('../Veterinario'))    
    await this.runSeeder(await import('../GuacalAerolinea'))
  }
}
