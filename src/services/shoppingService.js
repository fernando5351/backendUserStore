const boom = require("@hapi/boom");
const factory = require("../database/factory");

class Shopping{

    constructor(){}

    async create(data){
        const { idPastel, idFlavor1, idFlavor2, idDecoration, idUser, idColor1, idColor2 } = data;
        const query = `INSERT INTO pedidos (idPastel, idFlavor1, idFlavor2, idDecoration, idUser, estado, idColor1, idColor2) VALUES ("${idPastel}", "${idFlavor1}", "${idFlavor2}", "${idDecoration}", "${idUser}", "1","${idColor1}","${idColor2}");`;
        try {
            const res = await factory(query);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async getShopping(id){
        const query = `
        SELECT color1.nameColor AS color1,
        color2.nameColor AS color2,
        pastel.namePastel,
        flavor1.nameFlavor AS flavor1,
        flavor2.nameFlavor AS flavor2,
        decoration.nameDecoration AS decoration_name,
        pastel.imgurl,
        pastel.price,
        pedidos.cant
        FROM pedidos
        INNER JOIN color AS color1 ON pedidos.idColor1 = color1.id
        INNER JOIN color AS color2 ON pedidos.idColor2 = color2.id
        INNER JOIN flavor AS flavor1 ON pedidos.idFlavor1 = flavor1.id
        INNER JOIN flavor AS flavor2 ON pedidos.idFlavor2 = flavor2.id
        INNER JOIN decoration ON pedidos.idDecoration = decoration.id
        INNER JOIN pastel ON pedidos.idPastel = pastel.id
        WHERE pedidos.idUser = ${id} AND pedidos.estado = 1;`;
        const res = await factory(query);
        try {
            return res
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = Shopping;



        // SELECT color1.nameColor AS color1,
        // color2.nameColor AS color2,
        // flavor.namePastel,
        // flavor.nameFlavor AS flavor_name1,
        // flavor.nameFlavor AS flavor_name2,
        // decoration.nameDecoration AS decoration_name,
        // size.nameSize,
        // size.sizeDescription,
        // pastel.price,
        // pedidos.cant
        // FROM pedidos
        // INNER JOIN color AS color1 ON pedidos.idColor1 = color1.id
        // INNER JOIN color AS color2 ON pedidos.idColor2 = color2.id
        // INNER JOIN flavor ON pedidos.idFlavor1 = flavor.id
        // INNER JOIN flavor ON pedidos.idFlavor2 = flavor.id
        // INNER JOIN decoration ON pedidos.idDecoration = decoration.id
        // INNER JOIN size ON pedidos.idSize = size.id
        // INNER JOIN pastel ON pedidos.idPastel = pastel.id
        // WHERE pedidos.idUser = 10 AND pedidos.estado = 1;