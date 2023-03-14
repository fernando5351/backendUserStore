const boom = require("@hapi/boom");
const factory = require("../database/factory");

class Comentarios {

    constructor (){

    }

    async createComentario(data){
        const {author, comment, pets} = data;
        const query = `INSERT INTO comments(author, comment, pets) VALUES ("${author}", "${comment}", "${pets}")`; 
        const res = await factory(query);
        if (res) {
            return {
                author,
                comment,
                pets
            };
        }
    }

    async getComments(){
        const query = `SELECT * FROM comments`;
        const res = await factory(query);
        return res
    }

}

module.exports = Comentarios;