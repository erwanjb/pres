import React, { createRef, useEffect, useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faHandsHelping, faClock, faCalendarAlt, faQuoteLeft, faQuoteRight, faMobileAlt, faAt, faBars } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Home() {

  const accueil = createRef();
  const history = useHistory();

  const [width, setWidth] = useState(document.getElementsByTagName('body')[0].offsetWidth);

  const handleMention = () => {
    history.replace('/mentions-legales');
  }

  const handlePol = () => {
    history.push('/politique-de-confidentialite');
  }

  const handleClick = (event) => {
    document.getElementsByClassName('nav_item active')[0].setAttribute('class', 'nav_item');
    event.target.setAttribute('class', 'nav_item active');
  }
  const handleContact = () => {
    document.getElementsByClassName('nav_item active')[0].setAttribute('class', 'nav_item');
    document.getElementById('id-contact').setAttribute('class', 'nav_item active');
  }

  const resize = () => {
    if (document.getElementsByTagName('body')[0] && document.getElementsByTagName('body')[0].offsetWidth >= 600) {
      for (const item of Array.from(document.getElementsByClassName("nav_item"))) {
        item.style.display = "flex";
      } 
    } else if (document.getElementsByTagName('body')[0] && document.getElementsByTagName('body')[0].offsetWidth < 600) {
      for (const item of Array.from(document.getElementsByClassName("nav_item"))) {
        item.style.display = "none";
      } 
    }
    if(document.getElementsByTagName('body')[0]) {
      if(Math.abs(width - document.getElementsByTagName('body')[0].offsetWidth) >= 20) {
        setWidth(document.getElementsByTagName('body')[0].offsetWidth);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resize);
    const type = window.location.href.split('/')[window.location.href.split('/').length -1].slice(1);
    if (type ==='services' || type ===" accueil" || type === "apropos" || type === "contact") {
      document.getElementsByClassName('nav_item active')[0].setAttribute('class', 'nav_item');
      document.getElementById(`id-${type}`).setAttribute('class', 'nav_item active');
    }
  }, [])

  const handleHide = () => {
    let display = document.getElementsByClassName('nav_item')[0].style.display;
    if (display !== "flex") {
      for (const item of Array.from(document.getElementsByClassName("nav_item"))) {
        item.style.display = "flex";
      }
    } else {
      for (const item of Array.from(document.getElementsByClassName("nav_item"))) {
        item.style.display = "none";
      }
    }
  }
  return (
    <div className="app">
      <div className="nav">
        <img className="logo" src="/pres.png"/>
        <div className="content_nav_item">
          <HashLink id="id-accueil" onClick={handleClick} className="nav_item active" smooth to="/#accueil">Accueil</HashLink>
          <HashLink id="id-services" onClick={handleClick} className="nav_item" smooth to="/#services">Services</HashLink>
          <HashLink id="id-apropos" onClick={handleClick} className="nav_item" smooth to="/#apropos">A propos</HashLink>
          <HashLink id="id-contact" onClick={handleClick} className="nav_item" smooth to="/#contact">contact</HashLink>
        </div>
        <div className="bar" onClick={handleHide}>
            <FontAwesomeIcon  size="2x" color="#fff"  icon={faBars} />
        </div>
      </div>
      <div ref={accueil} id="accueil" className="accueil">
        <div className="background_accueil">
          <div className="main_accueil">
          </div>
        </div>
      </div>
      <div className="triangle" style={{borderWidth: `0 ${width/2}px  100px ${width/2}px`}}></div>
      <div className="sur_ligne_accueil">
        <img className="main_logo" src="pres.png"/>
        <h1 className="title">Développe vos solutions numériques</h1>
        <div className="content_border">
          <span className="border"></span>
        </div>
        <p className="paraph_accueil">
          Vous voulez un site Web qui représente vos valeurs et corresponde à vos besoins ? <br/>
          Vous avez besoin d’un logiciel, d’une application, ou de toute autre solution informatique ?<br/>
          Nous développons votre projet, et le faisons passer d’idée à réalité !
        </p>
        <a href="#contact" onClick={handleContact} className="contactez">Contactez-nous !</a>
      </div>
      <div className="why">
        <h2 className="why_title">Pourquoi nous ?</h2>
        <div className="why_content">
          <div className="why_item">
            <FontAwesomeIcon className="why_item_image"  size="5x" color="#a273ff" icon={faComments} />
            <h3 className="why_item_title">Accessibilité</h3>
            <p className="why_item_paraph">Nous sommes à votre disposition pour vous apporter une réponse rapide et personnalisée</p>
          </div>
          <div className="why_item">
            <FontAwesomeIcon className="why_item_image"  size="5x" color="#a273ff" icon={faHandsHelping} />
            <h3 className="why_item_title">Coopération</h3>
            <p className="why_item_paraph">Vous êtes inclus tout au long du développement pour être au plus près de votre vision</p>
          </div>
          <div className="why_item">
            <FontAwesomeIcon className="why_item_image"  size="5x" color="#a273ff" icon={faClock} />
            <h3 className="why_item_title">Rapidité</h3>
            <p className="why_item_paraph">L'une de nos priorités est de mener à bien vos projets dans les plus brefs délais</p>
          </div>
          <div className="why_item">
            <FontAwesomeIcon className="why_item_image"  size="5x" color="#a273ff" icon={faCalendarAlt} />
            <h3 className="why_item_title">Gestion</h3>
            <p className="why_item_paraph">Nous pouvons gérer les contenus, modifications et mises à jour de votre site</p>
          </div>
        </div>
      </div>
      <div className="why_triangle_left" style={{borderWidth: `100px ${width*3/8}px 0 ${width*3/8}px`}}></div>
      <div className="why_triangle_right" style={{borderWidth: `50px ${width/4}px 0 ${width/4}px`}}></div>
      <div id="services" className="services">
        <h2 className="service_title">Services</h2>
        <div className="content_service">
          <div className="service_item one">
            <img className="service_item_img" src="/siteweb.png"/>
            <h3 className="service_item_title">Sites Web</h3>
            <p className="service_item_paraph">Que vous ayez besoin d'un blog, d'un site vitrine ou e-commerce, nous sommes là pour les réaliser !</p>
          </div>
          <div className="service_item two">
            <img className="service_item_img" src="/logiciel.png"/>
            <h3 className="service_item_title">Logiciels</h3>
            <p className="service_item_paraph">Vous avez besoin d'un logiciel de bureau pour gérer des données, accéder facilement à certaines ressources ou effectuer des opérations, contactez-nous !</p>
          </div>
          <div className="service_item three">
            <img className="service_item_img" src="/application.png"/>
            <h3 className="service_item_title">Applications</h3>
            <p className="service_item_paraph">Vous avez un projet d'application mobile ou de bureau ? Venez nous en parler !</p>
          </div>
          <div className="service_item four">
            <img className="service_item_img" src="/bots.png"/>
            <h3 className="service_item_title">Bots & Plugins</h3>
            <p className="service_item_paraph">Vous avez une idée de bot ou bien d'un plugin pour un jeu ou un logiciel ? N'hésitez pas à nous soumettre votre projet !</p>
          </div>
          <img className="service_img" src="/services.png"/>
        </div>
      </div>
      <div className="apropos_triangle_left" style={{borderWidth: `100px ${width*3/8}px 0 ${width*3/8}px`}}></div>
      <div className="apropos_triangle_right" style={{borderWidth: `50px ${width/4}px 0 ${width/4}px`}}></div>
      <div id="apropos" className="apropos">
        <h2 className="apropos_title">A Propos</h2>
        <div className="apropos_content">
          <div className="content_profil">
            <img className="idriss" src="/idriss.png"/>
          </div>
          <div className="content_paraph_apropos">
            <div className="apropos_paraph">
              <p className="paraph_apropos">
                J’ai décidé de créer IdCorp en 2020 pour exprimer ma passion pour le développement et le numérique.<br/>
                Mon parcours a débuté au sein de Simplon.Co où j’ai pu apprendre les technologies du Web ainsi que le Java.<br/>
                L’école 42 m’a ensuite permis d’acquérir l’algorithmie et la rigueur nécessaires à une bonne utilisation des langages tels que le C et bien d’autres.<br/>
                C’est surtout mon fonctionnement autodidacte et ma polyvalence qui me permettent aujourd’hui de vous offrir un résultat de qualité, basé sur vos propres besoins et exigences.
              </p>
              <FontAwesomeIcon className="apropos_item_left"  size="3x" color="#fff" icon={faQuoteLeft} />
              <FontAwesomeIcon className="apropos_item_right"  size="3x" color="#fff" icon={faQuoteRight} />
            </div>
            <h3 className="apropos_sub_title">Idriss Cornuau</h3>
            <p className="apropos_titre">Fondateur d'IdCorp</p>
          </div>
        </div>
        <div className="apropos_content">
          <div className="content_profil">
            <img className="erwan" src="/erwan.jpeg"/>
          </div>
          <div className="content_paraph_apropos">
            <div className="apropos_paraph">
              <p className="paraph_apropos">
                J’ai voulu rejoindre IdCorp en 2020 pour exercer ma passion pour le développement.<br/>
                J'ai comme première expérience d'avoir rejoint Simplon.Co où j’ai pu développer mes compétences en JavaScript.<br/>
                Dans un second temps j'ai rejoint Simplon.Prod qui m'a apporter la rigueur nécessaires à la conception de projets numériques.<br/>
                Je suis curieux, je m'adapte à tout type de situation et j'aime le travail d'équipe.
              </p>
              <FontAwesomeIcon className="apropos_item_left"  size="3x" color="#fff" icon={faQuoteLeft} />
              <FontAwesomeIcon className="apropos_item_right"  size="3x" color="#fff" icon={faQuoteRight} />
            </div>
            <h3 className="apropos_sub_title">Erwan Jean Baptiste</h3>
            <p className="apropos_titre">Associé d'IdCorp</p>
          </div>
        </div>
      </div>
      <div className="triangle_apropos_one" style={{borderWidth: `0 ${width}px 100px 0`}}></div>
      <div className="triangle_apropos_two" style={{borderWidth: `100px 0 0 ${width}px`}}></div>
      <div className="triangle_apropos_three" style={{borderWidth: `100px ${width}px 0 0`}}></div>
      <div id="contact" className="contact">
        <h2 className="contact_title">Contact</h2>
        <div className="content_contact">
          <div className="coordonnee">
            <p className="contact_paraph">
              <FontAwesomeIcon className="contact_image"  size="2x" icon={faMobileAlt} />
              <div className="contact_layout">
                <span>+33 6 95 74 22 16</span>
                <span>+33 6 58 32 37 82</span>
              </div>
            </p>
            <p className="contact_paraph">
              <FontAwesomeIcon className="contact_image"  size="2x" icon={faAt} />
              contact@idcorp.fr
            </p>
          </div>
          <form className="form" action="mailto:contact@idcorp.fr" method="post" name="contact">
            <input required className="input" type="text" placeholder="Nom"/>
            <input required className="input" type="email" placeholder="Email"/>
            <textarea required className="input area" placeholder="Message"/>
            <input className="input submit" type="submit"  value="ENVOYER"/>
          </form>
        </div>
      </div>
      <div className="footer">
        <h2 className="title_footer">IdCorp 2020</h2>
        <div className="mentions">
          <a onClick={handleMention}>Mentions légales</a>
          <a onClick={handlePol}>Politique de confidentialité</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
