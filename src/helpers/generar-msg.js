

const crearMSG = ( email ) => {

  const msg = { 
    to: email, // Change to your recipient
    from: 'victorg.avila@gmail.com', // Change to your verified sender
    subject: 'Bienvenido a mi app, ChallengeNode',
    text: 'Bienvenido a mi app',
    html: `<article style="border: 1px solid black;
    width: 50%;
    font-size: 20px;
    text-align: center;
    padding: 20px;
    background-color: rgba(0, 0, 255, 0.726);
    color: aliceblue;">
    Gracias por pertenecer a esta enorme comunidad!!! :D
    <img 
    style="margin-top: 20px;"
    width="50%"
    src="https://icdn.dtcn.com/image/digitaltrends_es/34-many-wooden-emoticon-or-emoji-face-balls-one-up-front-720x720.jpg"
    alt="no se encontro la imagen"
      >
   </article>`,}

   return msg;
  }

  module.exports = { crearMSG }

