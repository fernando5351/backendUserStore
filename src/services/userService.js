const boom = require("@hapi/boom");
const factory = require("../database/connection");
const bcryptjs = require("bcryptjs");
const connection = require("../database/connection");

class UserService {
    constructor (){};

    async create(data){
        const { name, lastname, age, user, direction, email, password } = data;

        let sql = `SELECT email FROM users WHERE email = "${email}"`;
        connection.query(sql, async(err, rows)=>{
            if (rows.length == 0) {
                const passHash = bcryptjs.hash(password, 8);
                const query = `INSERT INTO users(name, lastname, user, direction, password, email, age) VALUES ("${name}","${lastname}","${user}","${direction}","${passHash}","${email}","${age}")`;
                const rta = await factory(query);
                if (rta) {
                    return {
                        name: name,
                        lastname: lastname,
                        age: age,
                        user: user,
                        direction: direction,
                        email: email
                    }
                } else {
                    return boom.badGateway("ocurrio un error")
                }
            } else {
                return "email en uso"
            }
        })
    }

}

module.exports = UserService;