const path = require("path");
module.exports={
    entry: "./formulario.js",
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    }
}