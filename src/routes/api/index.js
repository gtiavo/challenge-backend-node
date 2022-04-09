const { Router }   = require('express');
     
//metodo de express
const router = Router();


//Rutas:
router.use('/characters', require('./characters'));       


module.exports = router;