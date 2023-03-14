const boom = require("@hapi/boom");
const factory = require("../database/factory");

class Shopping{

    constructor(){}

    async create(data){
        const { idPastel, idFlavor,  idDecoration, idUser, idColor1, idColor2 } = data;
        const query = `INSERT INTO pedidos (idPastel, idFlavor, idDecoration, idUser, estado, idColor1, idColor2) VALUES ("${idPastel}", "${idFlavor}", "${idDecoration}", "${idUser}", "1","${idColor1}","${idColor2}");`;
        try {
            const res = await factory(query);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async getShopping(id){
        const query = `
        SELECT pedidos.id, color1.nameColor AS color1,
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

    async getShop(id){
        const query = `
        SELECT pedidos.id, pedidos.idPastel, pastel.imgurl, pedidos.idUser, pastel.price, pastel.namePastel FROM pastel, pedidos
        WHERE pedidos.id = pedidos.idPastel &&  pedidos.idUser = ${id} && pedidos.estado = 1
        `
    }

    async shopping(data) {
        try {
          const promises = data.map(async (id) => {
            const query = `UPDATE pedidos SET estado = 0 WHERE id = ${id}`;
            const res = await factory(query);
            return res;
          });
      
          const results = await Promise.all(promises);
          return results;
        } catch (error) {
          console.log(error);
        }
      }
      

    async delShop(id){
        const query = `DELETE FROM pedidos WHERE id=${id}`;
        const res = await factory(query);
        return res
    }

}

module.exports = Shopping;