import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Guacal from '../../Models/Guacal';

export default class GuacalsController {

    /**
            * Lista todos 
            */
    public async index(ctx: HttpContextContract) {
        let guacales: Guacal[] = await Guacal.query().preload('mascota').preload('aerolineas')
     //  let guacales: Guacal[] = await Guacal.query().preload('aerolineas');
        return guacales;
    }

    /**
    * Almacena la información 
    */
    public async store({ request }: HttpContextContract) {

        const body = request.body();
        const new_guacal: Guacal = await Guacal.create(body);
        return new_guacal;
    }

    /**
    * Muestra la información 
    */
    public async show({ params }: HttpContextContract) {

        let guacal = await Guacal.query().where('id', params.id);
        return guacal
    }

    /**
    * Actualiza la información de basado
    * en el identificador y nuevos parámetros
    */
    public async update({ params, request }: HttpContextContract) {

        const body = request.body();
        const guacal:Guacal = await Guacal.findOrFail(params.id)
        guacal.tamano = body.tamano;
        guacal.estado = body.estado;        
        guacal.id_mascota = body.id_mascota;        
        return guacal.save();
    }

    /**
    * Elimina basado en el identificador
    */
    public async destroy({ params }: HttpContextContract) {

        const guacal:Guacal = await Guacal.findOrFail(params.id)
        return guacal.delete();
    }

}
