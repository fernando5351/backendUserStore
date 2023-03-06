const boom = require('@hapi/boom');
const factory = require('../database/factory');

class Decoration {
    constructor (){}

    async getSize(){
        const sql = `SELECT * FROM size`;
        const res = await factory(sql);
        return res;
    }
}

module.exports = Decoration;