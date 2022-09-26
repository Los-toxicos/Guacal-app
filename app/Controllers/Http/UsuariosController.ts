import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EmailService from '../../Services/EmailService';
import Encryption from '@ioc:Adonis/Core/Encryption'
import Usuario from '../../Models/Usuario';
import Perfil from '../../Models/Perfil';

export default class UsuariosController {

    /**
    * Lista todos los User
    */
     public async index(ctx: HttpContextContract) {

        let usuarios: Usuario[] = await Usuario.query().preload('rol');
        return usuarios; 

    }

    /**
    * Almacena la información de un usuario
    */
    public async store({ request }: HttpContextContract) {

        const body = request.body();        
        const new_user = await Usuario.create(body)
        return new_user;
    }

    /**
    * Muestra la información de un solo usuario
    */
    public async show({ params }: HttpContextContract) {
        let user = await Usuario.query().where("id", params.id).preload('profile')
        return user;
    }

    /**
    * Actualiza la información de un usuario basado
    * en el identificador y nuevos parámetros
    */
    public async update({ params, request }: HttpContextContract) {

        const body = request.body();
        const el_usuario:Usuario = await Usuario.findOrFail(params.id);
        el_usuario.nombre = body.nombre;
        el_usuario.correo = body.email;
        el_usuario.contrasena = body.contrasena;
        el_usuario.id_rol = body.id_rol;
        if (body.profile) {
            body.profile.id_el_usuario = params.id;
            await this.setProfile(body.perfil);
        }
        return el_usuario.save();
        
    }
    public async setProfile(info) {
        const profile_user = await
            Perfil.findBy('id_usuario', info.id_usuario );
        if (profile_user) {
            profile_user.celular = info.celular;
            profile_user.url_facebook = info.url_facebook;
            profile_user.url_instagram = info.url_instagram;
            await profile_user.save();
        } else {
            await Perfil.create(info);
        }
    }

    /**
    * Elimina a un usuario basado en el identificador
    */
    public async destroy({ params }: HttpContextContract) {

        const el_usuario:Usuario = await Usuario.findOrFail(params.id);
        return el_usuario.delete();
    }

}
