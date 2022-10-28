import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mascota from '../../Models/Mascota';

export default class MascotasController {

    /**
            * Lista todos 
            */
    public async index(ctx: HttpContextContract) {

        let mascotas: Mascota[] = await Mascota.query();
        return mascotas;
    }

    /**
    * Almacena la información 
    */
    public async store({ request }: HttpContextContract) {

        const body = request.body();
        const new_mascota : Mascota = await Mascota.create(body);
        return new_mascota;
    }

    /**
    * Muestra la información 
    */
    public async show({ params }: HttpContextContract) {

        let mascota = await Mascota.query().where('id', params.id);
        return mascota;
    }

    /**
    * Actualiza la información de basado
    * en el identificador y nuevos parámetros
    */
    public async update({ params, request }: HttpContextContract) {

        const body = request.body();
        const mascota:Mascota = await Mascota.findOrFail(params.id)
        mascota.nombre = body.nombre;
        mascota.especie = body.especie;        
        mascota.peso = body.peso;
        mascota.estatura = body.estatura;
        mascota.id_usuario = body.id_usuario;
        mascota.id_guacal = body.id_guacal;        
        return mascota.save()
    }

    /**
    * Elimina basado en el identificador
    */
    public async destroy({ params }: HttpContextContract) {

        const mascota:Mascota = await Mascota.findOrFail(params.id)
        return mascota.delete();
    }

}
