const { Router }    = require('express'),
      router        = Router(),
      usuariosRutas = require('./usuarios'),
      authRutas     = require('./auth');


router.use('/register', usuariosRutas );
router.use('/login', authRutas );

   
module.exports = router;



