

const crearMSG = ( email ) => {

  const msg = { 
    to: email, // Change to your recipient
    from: 'victorg.avila@gmail.com', // Change to your verified sender
    subject: 'Bienvenido a mi app, ChallengeNode',
    text: 'Bienvenido a mi app',
    html: `
    
    <img 
    style="margin-top: 20px;"
    width="50%"
    src="https://dpilaser.com/wp-content/uploads/2017/01/Bienvenido.png"
    alt="no se encontro la imagen"
      >
   `,}

   return msg;
  }

  module.exports = { crearMSG }

