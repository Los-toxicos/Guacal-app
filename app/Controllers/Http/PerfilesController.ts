import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Perfil from 'App/Models/Perfil';

export default class PerfilsController {

    /**
            * Lista todos 
            */
    public async index(ctx: HttpContextContract) {
        let perfiles: Perfil[] = await Perfil.query();
       
           return perfiles;
       }
    

    /**
    * Almacena la información 
    */
    public async store({ request }: HttpContextContract) {

        const body = request.body();
        const perfil: Perfil = await Perfil.create(body);
        return perfil;
    }

    /**
    * Muestra la información 
    */
    public async show({ params }: HttpContextContract) {
        let perfil = await Perfil.query().where('id', params.id);
        return perfil
    }

    /**
    * Actualiza la información de basado
    * en el identificador y nuevos parámetros
    */
    public async update({ params, request }: HttpContextContract) {
        const body = request.body();
        const perfil:Perfil = await Perfil.findOrFail(params.id)
        perfil.celular = body.celular;
        perfil.url_facebook = body.url_facebook;      
        perfil.url_instagram = body.url_instagram;    
        perfil.id_usuario = body.id_usuario;        
        return perfil.save();

    }

    /**
    * Elimina basado en el identificador
    */
    public async destroy({ params }: HttpContextContract) {
        const perfil:Perfil = await Perfil.findOrFail(params.id)
        return perfil.delete();
    }

}
