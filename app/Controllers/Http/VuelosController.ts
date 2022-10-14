import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Vuelo from 'App/Models/Vuelo';

export default class VuelosController {

    /**
            * Lista todos 
            */
    public async index(ctx: HttpContextContract) {

        let vuelos: Vuelo[] = await Vuelo.query().preload('veterinario');
        return vuelos;
    }

    /**
    * Almacena la información 
    */
    public async store({ request }: HttpContextContract) {

        const body = request.body();
        const new_vuelo = await Vuelo.create(body);
        return new_vuelo;
    }

    /**
    * Muestra la información 
    */
    public async show({ params }: HttpContextContract) {

        let vuelo = await Vuelo.query().where('id', params.id);
        return vuelo;
    }

    /**
    * Actualiza la información de basado
    * en el identificador y nuevos parámetros
    */
    public async update({ params, request }: HttpContextContract) {

        const body = request.body();
        const vuelo:Vuelo = await Vuelo.findOrFail(params.id)
        vuelo.hora_salida = body.hora_salida;  
        vuelo.hora_llegada = body.hora_llegada;  
        vuelo.capacidad = body.capacidad;  
        vuelo.id_ruta = body.id_ruta;  
        vuelo.id_aerolinea = body.id_aerolinea;  
        vuelo.id_veterinario = body.id_veterinario;                
        return vuelo.save()
    }

    /**
    * Elimina basado en el identificador
    */
    public async destroy({ params }: HttpContextContract) {

        const vuelo:Vuelo = await Vuelo.findOrFail(params.id)
        return vuelo.delete();
    }

}
