import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GuacalAerolinea from '../../Models/GuacalAerolinea';

export default class GuacalAerolineaController {

    /**
            * Lista todos 
            */
    public async index(ctx: HttpContextContract) {

        let guacalAerolinea: GuacalAerolinea[] = await GuacalAerolinea.query()
        return guacalAerolinea;
    }

    /**
    * Almacena la información 
    */
    public async store({ request }: HttpContextContract) {

        const body = request.body();
        const el_guacal_aerolinea: GuacalAerolinea = await GuacalAerolinea.create(body);
        return el_guacal_aerolinea;
    }

    /**
    * Muestra la información 
    */
    public async show({ params }: HttpContextContract) {

        return GuacalAerolinea.findOrFail(params.id);
    }

    /**
    * Actualiza la información de basado
    * en el identificador y nuevos parámetros
    */
    public async update({ params, request }: HttpContextContract) {

        const body = request.body();
        const el_guacal_aerolinea: GuacalAerolinea = await
            GuacalAerolinea.findOrFail(params.id);
            el_guacal_aerolinea.id_guacal = body.id_guacal;
            el_guacal_aerolinea.id_aerolinea = body.id_aerolinea;
        return el_guacal_aerolinea.save();
    }

    /**
    * Elimina basado en el identificador
    */
    public async destroy({ params }: HttpContextContract) {

        const el_guacal_aerolinea: GuacalAerolinea = await GuacalAerolinea.findOrFail(params.id);
        return el_guacal_aerolinea.delete();
    }

}
