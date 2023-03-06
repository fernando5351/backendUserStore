const connection = require("./connection");
const util = require("util");
const query = util.promisify(connection.query).bind(connection);

async function factory(sql){
    try {
        const res = query(sql);
        return res;
    } catch (error) {
        console.log(error)
    }
}

module.exports = factory;