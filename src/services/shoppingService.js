const boom = require("@hapi/boom");
const factory = require("../database/factory");

class Shopping{

    constructor(){}

    async create(data){
        const { idPastel, idFlavor, idDecoration, idSize, idUser, idColor1, idColor2 } = data;
        const query = `INSERT INTO pedidos (idPastel, idFlavor, idDecoration, idSize, idUser, estado, idColor1, idColor2) VALUES ("${idPastel}", "${idFlavor}", "${idDecoration}", "${idSize}", "${idUser}", "1","${idColor1}","${idColor2}");`;
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
        flavor.nameFlavor AS flavor_name,
        decoration.nameDecoration AS decoration_name,
        size.nameSize,
        size.sizeDescription,
        pastel.imgurl,
        pedidos.cant
        FROM pedidos
        INNER JOIN color AS color1 ON pedidos.idColor1 = color1.id
        INNER JOIN color AS color2 ON pedidos.idColor2 = color2.id
        INNER JOIN flavor ON pedidos.idFlavor = flavor.id
        INNER JOIN decoration ON pedidos.idDecoration = decoration.id
        INNER JOIN size ON pedidos.idSize = size.id
        INNER JOIN pastel ON pedidos.idPastel = pastel.id
        WHERE pedidos.idUser = ${id} AND pedidos.estado = 1;
        `;
        const res = await factory(query);
        try {
            return res
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = Shopping;