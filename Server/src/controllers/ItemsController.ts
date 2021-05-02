import knex from '../database/connection';
import{Request, Response} from 'express';

class itemsController{

async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
    
    const serializedItems = items.map(item => { 
        return {
            id: item.id,
            title: item.title,
            image_url: `http://192.168.1.106:3333/uploads/${item.image}`,
        };
    });
    
    return response.json(serializedItems);
    }

    /*Padrão para comandos: 
    index = listagem de vários
    show = listagem de um único
    create = cadastrar
    update = alterar
    delete = deletar*/

}

export default itemsController;