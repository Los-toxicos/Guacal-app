import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Permisos from 'App/Models/Permiso';
import PermisoRol from '../Models/PermisoRol';


export default class Permiso {
  public async handle({auth, request, response}: HttpContextContract, next: () => Promise<void>) {
    
    let url = request.url();
    console.log(response);
    
    const metodo = request.method();
    const partes = url.split('/');
    partes.forEach(p=>{
      if (p.match('//d')){
        url = url.replace(`/${p}`,'/?')
      }
    })
    let el_rol = auth.user?.rol;
    let el_permiso:Permisos = await Permisos.query().where('url',url).andWhere('metodo',metodo); 
    let el_permiso_rol:PermisoRol = await PermisoRol.query().where('id_rol',el_rol).andWhere('id_permiso',el_permiso.id);
    if (el_permiso_rol) {
      await auth.use('api').authenticate
      console.log("El Usuario con Permisos-->", JSON.stringify(auth.user))      
    } 
    
    await next()
  }
}
