const boom = require('@hapi/boom');
const factory = require('../database/factory');

class Decoration {
    constructor (){}

    async getPastel(){
        const sql = `SELECT * FROM pastel`;
        const res = await factory(sql);
        return res;
    }
}

module.exports = Decoration;