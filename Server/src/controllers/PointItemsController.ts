import knex from '../database/connection';
import{Request, Response} from 'express';

class PointItemsController{

async index(request: Request, response: Response) {
    
    const pointItems = await knex('point_items').select('*');
    
    const serializedItems = pointItems.map(item => { 
        return {
            id_Ponto: item.point_id,
            id_Item: item.item_id,
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

export default PointItemsController;