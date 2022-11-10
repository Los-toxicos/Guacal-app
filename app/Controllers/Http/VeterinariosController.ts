import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Veterinario from 'App/Models/Veterinario';

export default class VeterinariosController {

    /**
            * Lista todos 
            */
    public async index(ctx: HttpContextContract) {
        let veterinarios: Veterinario[] = await Veterinario.query();
        return veterinarios;
    }

    /**
    * Almacena la información 
    */
    public async store({ request }: HttpContextContract) {
        const body = request.body();
        const new_veterinario : Veterinario = await Veterinario.create(body);
        return new_veterinario;

    }

    /**
    * Muestra la información 
    */
    public async show({ params }: HttpContextContract) {
        let veterinario = await Veterinario.query().where('id', params.id);
        return veterinario
    }

    /**
    * Actualiza la información de basado
    * en el identificador y nuevos parámetros
    */
    public async update({ params, request }: HttpContextContract) {

        const body = request.body();
        const veterinario:Veterinario = await Veterinario.findOrFail(params.id)
        veterinario.nombre = body.nombre;
        veterinario.especialidad = body.especialidad;        
        veterinario.id_vuelo = body.id_vuelo;
        return veterinario.save();
    }

    /**
    * Elimina basado en el identificador
    */
    public async destroy({ params }: HttpContextContract) {
        const veterinario:Veterinario = await Veterinario.findOrFail(params.id)
        return veterinario.delete();
    }

}
