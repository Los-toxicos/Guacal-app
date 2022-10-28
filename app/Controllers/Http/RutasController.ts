import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ruta from 'App/Models/Ruta';

export default class RutasController {

    /**
            * Lista todos 
            */
    public async index(ctx: HttpContextContract) {
        let rutas: Ruta[] = await Ruta.query();
        return rutas;
    }

    /**
    * Almacena la información 
    */
    public async store({ request }: HttpContextContract) {

        const body = request.body();
        const new_Rutas : Ruta = await Ruta.create(body);
        return new_Rutas;
    }

    /**
    * Muestra la información 
    */
    public async show({ params }: HttpContextContract) {
        let rutas = await Ruta.query().where('id', params.id);
        return rutas;
    }

    /**
    * Actualiza la información de basado
    * en el identificador y nuevos parámetros
    */
    public async update({ params, request}: HttpContextContract) {

        const body = request.body();
        const ruta:Ruta = await Ruta.findOrFail(params.id)
        ruta.origen = body.origen;
        ruta.destino = body.destino;  
        return ruta.save();
    }

    /**
    * Elimina basado en el identificador
    */
    public async destroy({ params }: HttpContextContract) {
        const rutas:Ruta= await Ruta.findOrFail(params.id)
        return rutas.delete();
    }

}
