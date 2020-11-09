import './App.css';

function App() {
  const handleClick = (type) => {
    document.getElementsByClassName('screen active')[0].setAttribute('class', 'screen');
    document.getElementById(type).setAttribute('class', 'screen active');
  }
  return (
    <div className="app">
        <div className="content_logo">
          <img className="logo_title" src="/pres.png"/>
          <div className="nav">
            <a onClick={handleClick.bind(null, 'presentation')} href="#presentation" className="nav_item">Présentation</a>
            <a onClick={handleClick.bind(null, 'technos')} href="#technos" className="nav_item">Technos</a>
            <a onClick={handleClick.bind(null, 'services')} href="#services" className="nav_item">Services</a>
            <a onClick={handleClick.bind(null, 'contacts')} href="#contacts" className="nav_item">Contacts</a>
          </div>
        </div>
        <div id="presentation" className="screen active">
          <div>
            <h1 className="title">Equipe de freelance à votre service pour réaliser tout type de projet numérique</h1>
            <h2 className="sub_title">Partenaires :</h2>
            <div className="container_card">
              <div className="content_card">
                <div className="card">
                  <div className= "content_photo">
                    <img className="photo_idriss" src="/idriss.png" />
                  </div>
                  <p className="name">Idriss Cornuau</p>
                  <p className="desc">Ancien de Simplon.Co et de l'école 42</p>
                </div>
                <div className="card">
                  <div className= "content_photo">
                    <img className="photo_erwan" src="/erwan.jpeg" />
                  </div>
                  <p className="name">Erwan Jean Baptiste</p>
                  <p className="desc">Ancien de Simplon.Co et de Simplon.Prod</p>
                </div>
              </div>
            </div>
            <div className="content_description">
              <p className="description">Nous avons décidé de créer IdCorp en 2020 pour exprimer notre passion pour le développement et pouvoir collaborer sur les différents chantiers du numérique.</p>
            </div>
        </div>
      </div>
      <div id="technos" className="screen">
        <h2 className="title">Technos web</h2>
        <div className="content_tech_main">
          <div className="container_tech">
            <img className="tech" src="/javascript.png" />
            <img className="tech react" src="/react.png" />
            <img className="tech vue" src="/vue.png" />
            <img className="tech angular" src="/angular.png" />
            <img className="tech node" src="/node.png" />
          </div>
        </div>
        <div className="content_tech_main">
          <div className="container_tech">
            <img className="tech php" src="/php.png" />
            <img className="tech laravel" src="/laravel.png" />
            <img className="tech symfony" src="/symfony.png" />
            <img className="tech wordpress" src="/wordpress.png" />
          </div>
        </div>
        <div className="sub_content">
          <div className="content_mobile">
              <h2 className="title mobile">Techno appli mobile</h2>
              <img className="tech reactnative" src="/reactnative.png"/>
          </div>
          <div className="content_bureautique">
              <h2 className="title mobile">Technos appli bureautique ou jeux vidéos</h2>
              <img className="tech c" src="/c.png"/>
          </div>
        </div>
      </div>
      <div id="services" className="screen">
        <h2 className="title">Services</h2>
        <div className="content_serv">
          <div className="larg_serv">
            <div className="serv">
              <img className="serv_img" src="/site.png" />
              <p className="serv_title">Sites web</p>
            </div>
            <div className="serv appl">
              <img className="serv_img appl" src="/app.png" />
              <p className="serv_title">Applications</p>
              <p className="serv_sub_title">Mobiles<br/> ou<br/> Bureautiques</p>
            </div>
            <div className="serv bot">
              <img className="serv_img bot" src="/bot.png" />
              <p className="serv_title">Bots</p>
            </div>
            <div className="serv debugg">
              <img className="serv_img debugg" src="/debugg.jpg" />
              <p className="serv_title">Debugg<br/> de code</p>
            </div>
            <div className="serv jeux">
              <img className="serv_img jeux" src="/jeux.png" />
              <p className="serv_title">Jeux<br/> Vidéo</p>
            </div>
          </div>
        </div>
        <p className="serv_desc">
          La coopération avec nos clients ainsi que la rapidité et l'accessibilité de nos produits sont essentiels
        </p>
      </div>
      <div id="contacts" className="screen">
        <h2 className="title">Contacts</h2>
        <div className="content_contact">
          <div className="coordonnes">
            <p className="tel_main"> tels : <span className="tel">+33 6 95 74 22 16 <br/> +33 6 58 32 37 82</span></p>
            <p className="mail">email : contact@idcorp.fr</p>
          </div>
          <form className="form" method="post" encType="text/plain" action="mailto:contact@idcorp.fr">
            <h2 className="sub_title">formulaire de contact</h2>
            <input className="input" name="nom" placeholder="Nom" type="text"/>
            <input className="input" name="email" placeholder="Email" type="email"/>
            <textarea className="input area" placeholder="Message" name="message"/>
            <input className="input submit" type="submit" value="Envoyer"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
