const app = require("./src/app");

app.listen(app.get("port"), (err)=>{
    try {
        console.log(`servidor corriendo en el puerto ${app.get("port")}`);
    } catch (error) {
        console.log(err);
    }
});