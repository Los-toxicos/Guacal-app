import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AerolineasController {

    /**
        * Lista todos 
        */
    public async index(ctx: HttpContextContract) {

    }

    /**
    * Almacena la información 
    */
    public async store({ request }: HttpContextContract) {


    }

    /**
    * Muestra la información 
    */
    public async show({ params }: HttpContextContract) {

    }

    /**
    * Actualiza la información de basado
    * en el identificador y nuevos parámetros
    */
    public async update({ params }: HttpContextContract) {


    }

    /**
    * Elimina basado en el identificador
    */
    public async destroy({ params }: HttpContextContract) {

    }

}
