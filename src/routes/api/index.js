const { Router }   = require('express');
     
//metodo de express
const router = Router();


//Rutas:
router.use('/characters', require('./characters'));       
router.use('/movies', require('./movies'));       


module.exports = router;