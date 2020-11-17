import React, { useEffect } from 'react';
import './Home.css';
import { useHistory } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';

function Mention() {
    const history = useHistory();

    const resize = () => {
        console.log(document.getElementsByTagName('body')[0])
        if (document.getElementsByTagName('body')[0] && document.getElementsByTagName('body')[0].offsetWidth >= 600) {
          for (const item of Array.from(document.getElementsByClassName("nav_item"))) {
            item.style.display = "flex";
          } 
        } else if (document.getElementsByTagName('body')[0] && document.getElementsByTagName('body')[0].offsetWidth < 600) {
          for (const item of Array.from(document.getElementsByClassName("nav_item"))) {
            item.style.display = "none";
          } 
        }
    }
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

    useEffect(() => {
        window.addEventListener('resize', resize);
        const type = window.location.href.split('/')[window.location.href.split('/').length -1].slice(1);
        if (type ==='services' || type ===" accueil" || type === "apropos" || type === "contact") {
          document.getElementsByClassName('nav_item active')[0].setAttribute('class', 'nav_item');
          document.getElementById(type).setAttribute('class', 'nav_item active');
        }
    }, [])
    
    const handleClick = (type) => {
        history.push(`/#${type}`)
    }

    const handleMention = () => {
        history.push('/mentions-legales');
      }
    
      const handlePol = () => {
        history.push('politique-de-confidentialite');
      }

    return (
        <div>
            <div className="nav">
                <img className="logo" src="/pres.png"/>
                <div className="content_nav_item">
                    <HashLink className="nav_item" smooth to="/#accueil">Accueil</HashLink>
                    <HashLink className="nav_item" smooth to="/#services">Services</HashLink>
                    <HashLink className="nav_item" smooth to="/#apropos">A propos</HashLink>
                    <HashLink className="nav_item" smooth to="/#contact">contact</HashLink>
                </div>
                <div className="bar" onClick={handleHide}>
                    <FontAwesomeIcon  size="2x" color="#fff"  icon={faBars} />
                </div>
            </div>
            <div className="header">
                <h2 className="header_title">Mentions Légales</h2>
            </div>
            <p>IdCorp est un site édité par la personne physique et auto-entrepreneur Idriss Cornuau, numéro de SIRET 889 098 521 00012, situé 3 Place Fernig 59000 Lille.</p>

            <p>Directeur de la publication : Monsieur Idriss Cornuau – Contact</p>

            <p>Le site Internet https://idcorp.fr (le Site) est la propriété exclusive d’Idriss Cornuau.</p>

            <p>Hébergement</p>
            <p>Le site Internet est hébergé par la société o2switch, 222-224 Boulevard Gustave Flaubert 63000 Clermont-Ferrand, Capital de 100000 euros, Siret : 510 909 80700024.</p>

            <p>Propriété intellectuelle</p>
            <p>De manière générale, les données, les programmes, les échantillons musicaux, les textes, les informations, les logos, les identités visuelles, les images animées ou non et leurs mises en forme, les vidéos, apparaissant sur le Site sont la propriété d’Idriss Cornuau et sont protégées à ce titre par les dispositions du Code de la propriété intellectuelle.</p>

            <p>Tout internaute s’engage à ne pas les utiliser que dans le strict cadre offert par le Site.</p>

            <p>Commentaires</p>
            <p>Les commentaires n’ayant aucun rapport avec le contenu du Site seront considérés comme du spam et par conséquent supprimés. Les commentaires injurieux ou ayant des connotations racistes, violentes ou sexuelles seront également supprimés.</p>

            <p>Responsabilité</p>
            <p>driss Cornuau décline toute responsabilité quant aux éventuels dysfonctionnements pouvant survenir sur le Site et entraîner une perte de données ou une indisponibilité de l’accès aux informations produites sur celui-ci.  Idriss Cornuau ne peut garantir l’exhaustivité et la véracité des informations présentes sur le Site ainsi que l’absence de modification par un tiers (intrusion, virus). L’internaute est seul responsable de l’utilisation qu’il fait du contenu du Site.</p>

            <p>Les éléments présentés sur le Site sont susceptibles de modification sans préavis et sont mis à la disposition des internautes, sans aucune garantie d’aucune sorte, expresse ou tacite.</p>

            <p>La présence de liens hypertextes présents sur le Site ne crée pas une solidarité de responsabilité entre Idriss Cornuau et les propriétaires des autres sites, quant au contenu des sites sur lesquels est redirigé l’internaute. Seule la responsabilité desdits sites peut être engagée.</p>
            <div className="footer">
                <h2 className="title_footer">IdCorp 2020</h2>
                <div className="mentions">
                <a onClick={handleMention}>Mentions légales</a>
                <a onClick={handlePol}>Politique de confidentialité</a>
                </div>
            </div>
        </div>
    )
}

export default Mention;