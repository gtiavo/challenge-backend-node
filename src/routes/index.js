const { Router } = require('express'),
      router = Router(),
     usuariosRutas = require('./usuarios.routes');


router.use('/usuarios', usuariosRutas );

   
module.exports = router;



