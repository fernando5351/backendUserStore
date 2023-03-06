const boom = require('@hapi/boom');
const factory = require('../database/factory');

class Decoration {
    constructor (){}

    async getFlavor(){
        const sql = `SELECT * FROM flavor`;
        const res = await factory(sql);
        return res;
    }
}

module.exports = Decoration;