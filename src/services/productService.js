const Boom = require('@hapi/boom');
const factory = require('../database/factory')

class User {
    constructor (){}

    async getProducts(){
        const sql = `Select name, imgurl, price from products`;
        const res = await factory(sql);
        return res;
    }

    async getProduct(id){
        const sql = `select name, description, price, imgurl, idflavor, recipe, idcolor, idsize from  `;
    }
}

module.exports = User;