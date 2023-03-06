const boom = require('@hapi/boom');
const factory = require('../database/factory');

class Decoration {
    constructor (){}

    async getDecoration(){
        const sql = `SELECT * FROM decoration`;
        const res = await factory(sql);
        return res;
    }
}

module.exports = Decoration;