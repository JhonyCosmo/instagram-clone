const multer = require('multer');
const path = require('path');

module.exports={
    storage: new multer.diskStorage({
        //Navegando des de a pasta do arquivo ate a pasta desejada
        destination: path.resolve(__dirname,'..','..','uploads'),
        //Funcao passando a req, o arquivo e um callback
        filename: function(req,file,cb){
            //Callback recebe um possivel erro e depois o nome do arquivo
            cb(null,file.originalname);
        }
    })
}
