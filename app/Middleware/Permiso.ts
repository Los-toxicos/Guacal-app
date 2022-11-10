import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Permisos from 'App/Models/Permiso';
import PermisoRol from '../Models/PermisoRol';
import Rol from '../Models/Rol';



export default class Permiso {
  public async handle({ auth, request, response }: HttpContextContract, next: () => Promise<void>) {

    let url = request.url();
    let metodo = request.method().toLowerCase();
    let partes = url.split('/');
    partes.forEach(p => {
      if (p.match('//d')) {
        url = url.replace(`/${p}`, '/?')
      }
    })

    let elRolId = auth.user?.id_rol;
    if (elRolId == undefined) {
      elRolId = 4;
    }
    let elPermiso = await Permisos.query().where('url', url).where('metodo', metodo).first();
    let elPermisoRol = await PermisoRol.query().where('id_rol', '=', elRolId).where('id_permiso', '=', elPermiso?.id).first();

    if (elPermisoRol == undefined) {
      return response.unauthorized({ error: 'No tiene permisos' })
    } else if (elPermisoRol) {
      await next();
    }


    response.unauthorized({ error: 'No tiene permiso para acceder a este recurso' });
  }
}
