import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aerolinea from '../../Models/Aerolinea';

export default class AerolineasController {

    /**
        * Lista todos 
        */
    public async index(ctx: HttpContextContract) {
        
        let aerolineas: Aerolinea[] = await Aerolinea.query().preload('guacales').preload('rutas');
        return aerolineas;
    }

    /**
    * Almacena la información 
    */
    public async store({ request }: HttpContextContract) {

        const body = request.body();
        const new_airline = await Aerolinea.create(body);
        return new_airline;

    }

    /**
    * Muestra la información 
    */
    public async show({ params }: HttpContextContract) {

        let aerolinea = await Aerolinea.query().where('id', params.id);
        return aerolinea;
    }   

    /**
    * Actualiza la información de basado
    * en el identificador y nuevos parámetros
    */
    public async update({ params, request }: HttpContextContract) {

        const body = request.body();
        const aerolinea:Aerolinea = await Aerolinea.findOrFail(params.id)
        aerolinea.nombre = body.nombre;
        aerolinea.nit = body.nit;        
        aerolinea.codigo = body.codigo;        
        return aerolinea.save()
    }

    /**
    * Elimina basado en el identificador
    */
    public async destroy({ params }: HttpContextContract) {

        const aerolinea:Aerolinea = await Aerolinea.findOrFail(params.id)
        return aerolinea.delete();
    }

}
