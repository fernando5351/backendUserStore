const boom = require("@hapi/boom");
const factory = require("../database/factory");
const bcryptjs = require("bcryptjs");
const connection = require("../database/connection");

class UserService {
  constructor() { };

  create(data) {
    const { name, lastname, age, direction, email, password, cellphone } = data;
    return new Promise((resolve, reject) => {
      let sql = `SELECT email FROM users WHERE email = "${email}"`;
      connection.query(sql, async (err, results) => {
        if (err) {
          reject(boom.badImplementation("Error al crear usuario"));
        } else if (results.length == 0) {
          const passHash = await bcryptjs.hash(password, 8);
          const query = `INSERT INTO users(name, lastname, direction, password, email, age, cellphone) VALUES ("${name}","${lastname}","${direction}","${passHash}","${email}","${age}", "${cellphone}")`;
          const result = await factory(query);
          console.log(result);
          if (result) {
            var userDetails = {
              id: result.insertId,
              name: name,
              lastname: lastname,
              age: age,
              direction: direction,
              email: email
            }
          }
          resolve(userDetails);
        } else {
          reject(boom.conflict("Email en uso"));
        }
      });
    });
  }

  login(data){
    const { email, password } = data;
    return new Promise(async(resolve, reject)=>{
      let sql = `SELECT * FROM users WHERE email = '${email}'`;
      connection.query(sql, async (err, results)=>{
        try {
          if ( results.length === 0) {
            resolve(boom.notFound("No se encontro ningun usuario con el correo especificado"));
          } if (results.length >= 1 && (await bcryptjs.compare(password, results[0].password)) !== true) {
            resolve(boom.unauthorized("Contraseña incorrecta, verifica que este bien escrita"));         
          } if (results.length >= 1 && (await bcryptjs.compare(password, results[0].password)) == true) {
            resolve(results);
          }
        } catch {
          reject(err)
        }
      })
    });
  }

  getUser(id) {
    return new Promise(async (resolve, reject) => {
      console.log(id);
      const sql = `SELECT * FROM users WHERE id="${id}"`;
      try {
        const user = await factory(sql);
        console.log(user);
        if (user.length == 0) {
          resolve(boom.notFound('user not found'));
        } else {
          resolve(user);
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  deleteUser(id) {
    console.log(id);
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.getUser(id);
        console.log(user.id);
        if (user.length > 0) {
          const sql = `DELETE FROM users WHERE id="${user[0].id}"`;
          const res = await factory(sql);
          resolve(res);
        } 
      } catch (err) {
        reject(err);
      }
    });
  }


}

module.exports = UserService;