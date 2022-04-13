const { Router }   = require('express');
     
//metodo de express
const router = Router();


//Rutas:
router.use('/characters', require('./characters'));       
router.use('/movies', require('./movies'));       
router.use('/genres', require('./genres'));       


module.exports = router;