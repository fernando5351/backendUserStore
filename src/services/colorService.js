const boom = require('@hapi/boom');
const factory = require('../database/factory');

class Color {
    constructor (){}

    async getColors(){
        const sql = `SELECT * FROM color`;
        const res = await factory(sql);
        return res;
    }

    async getColor(id){
        const query = `
            SELECT color1.nameColor AS color1, color2.nameColor AS color2,
            pastel.description, pastel.imgurl,
            (SELECT namePastel FROM pastel WHERE id = pedidos.idPastel) AS pastel_name,
            flavor.nameFlavor AS flavor_name,
            decoration.nameDecoration AS decoration_name,
            size.nameSize,
            size.sizeDescription,
            pedidos.cant
            FROM pedidos 
            INNER JOIN color AS color1 ON pedidos.idColor1 = color1.id  
            INNER JOIN color AS color2 ON pedidos.idColor2 = color2.id  
            INNER JOIN flavor ON pedidos.idFlavor = flavor.id
            INNER JOIN decoration ON pedidos.idDecoration = decoration.id
            INNER JOIN size ON pedidos.idSize = size.id
            INNER JOIN pastel ON pedidos.idPastel = pastel.id
            WHERE pedidos.idUser = 9 AND pedidos.estado=1;
        `;
        const res = await factory(sql);
    }

    /*
    SELECT color1.nameColor AS color1, color2.nameColor AS color2,
        (SELECT namePastel FROM pastel WHERE id = pedidos.idPastel) AS pastel_name,
        flavor.nameFlavor AS flavor_name,
        decoration.nameDecoration AS decoration_name,
        size.nameSize,
        size.sizeDescription,
        pedidos.cant
        FROM pedidos 
        INNER JOIN color AS color1 ON pedidos.idColor1 = color1.id  
        INNER JOIN color AS color2 ON pedidos.idColor2 = color2.id  
        INNER JOIN flavor ON pedidos.idFlavor = flavor.id
        INNER JOIN decoration ON pedidos.idDecoration = decoration.id
        INNER JOIN size ON pedidos.idSize = size.id
        WHERE pedidos.idUser = 9 AND pedidos.estado=1;
    */
}

module.exports = Color;