import React, { useEffect } from 'react';
import './Home.css';
import { useHistory } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';

function Pol() {
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

    const handleClick = (type, event) => {
        history.push(`/#${type}`);
    }

    const handleMention = () => {
        history.push('/mentions-legales');
      }
    
      const handlePol = () => {
        history.push('/politique-de-confidentialite');
      }

    return (
        <div>
            <div className="nav">
                <img className="logo" src="/pres.png"/>
                <div className="content_nav_item">
                    <HashLink className="nav_item"  to="/#accueil">Accueil</HashLink>
                    <HashLink className="nav_item" to="/#services">Services</HashLink>
                    <HashLink className="nav_item" to="/#apropos">A propos</HashLink>
                    <HashLink className="nav_item" to="/#contact">contact</HashLink>
                </div>
                <div className="bar" onClick={handleHide}>
                    <FontAwesomeIcon  size="2x" color="#fff"  icon={faBars} />
                </div>
            </div>
            <div className="header">
                <h2 className="header_title">Politique de Confidentialité</h2>
            </div>
            <p>Date de prise d’effet : 1 octobre 2020</p>

            <p>IdCorp (« nous », « notre », « nos ») exploite le site web https://idcorp.fr (ci-après désigné par le terme « Service »).</p>

            <p>Cette page vous explique nos politiques en matière de collecte, d’utilisation et de communication des données à caractère personnel lorsque vous utilisez notre Service ainsi que les choix qui s’offrent à vous en ce qui concerne ces données.</p>

            <p>Nous utilisons vos données pour fournir et améliorer le Service. En utilisant le Service, vous consentez à la collecte et à l’utilisation d’informations conformément à la présente politique</p>
            
            <p>Définitions</p>
            <p>Service : Par Service on entend le site web https://idcorp.fr exploité par Idriss Cornuau
Données à caractère personnel : Données à Caractère Personnel désigne des données concernant un individu vivant qui peut être identifié à partir de ces données (ou à partir de ces données et d’autres informations en notre possession ou susceptibles d’entrer en notre possession).
Données d’Utilisation : Les Données d’Utilisation sont recueillies automatiquement et sont générées soit par l’utilisation du Service, soit par l’infrastructure du Service proprement dite (par exemple, durée de consultation d’une page).
Cookies : Les cookies sont de petits fichiers enregistrés sur votre dispositif (ordinateur ou dispositif mobile).
Responsable du Traitement : Responsable du Traitement désigne la personne physique ou morale (seule, ou conjointement ou en commun avec d’autres personnes) qui détermine les finalités et les modalités selon lesquelles toutes les données personnelles sont traitées ou doivent l’être. Aux fins de la présente Politique de Confidentialité, nous sommes un Responsable du Traitement de vos données à caractère personnel.
Sous-Traitants (ou Prestataires de Services) : Le terme Sous-Traitant (ou Prestataire de Service) désigne toute personne physique ou morale qui traite les données au nom du Responsable du Traitement. Il se peut que nous fassions appel aux services de plusieurs Prestataires de Services afin de traiter vos données plus efficacement. Personne Concernée (ou Utilisateur) : Par Personne Concernée, on entend toute personne vivante qui utilise notre Service et est le sujet de Données à Caractère Personnel.</p>

            <p>Collecte et utilisation des données</p>
            <p>Nous recueillons plusieurs types de données à différentes fins en vue de vous fournir notre Service et de l’améliorer.</p>

            <p>Types de données recueillies</p>
            <p>Données à Caractère Personnel</p>

            <p>Lorsque vous utilisez notre Service, il est possible que nous vous demandions de nous fournir certaines données personnelles nominatives qui peuvent servir à vous contacter ou à vous identifier (« Données à Caractère Personnel »). Les données personnelles nominatives peuvent comprendre, mais de manière non limitative:</p>
            <p>Adresse email
Prénom et nom de famille
Cookies et Données d’Utilisation</p>
            <p>Nous pouvons utiliser vos Données à Caractère Personnel pour vous envoyer des bulletins d’information, des communications commerciales ou des promotions et d’autres informations susceptibles de vous intéresser.</p>
            
            <p>Vous pouvez choisir de ne recevoir aucune communication de notre part ou de ne recevoir que certaines communications en cliquant sur le lien de désabonnement ou en suivant les instructions qui figurent dans chacun des e-mails que nous envoyons.</p>
            <p>Données d'Utilisation</p>
            <p>Nous pouvons également recueillir des informations relatives au mode d’accès et d’utilisation du Service (« Données d’Utilisation »). Ces Données d’Utilisation peuvent comprendre des informations telles que l’adresse de protocole Internet (c.-à-d. l’adresse IP) de votre ordinateur, le type de navigateur, la version du navigateur, les pages de notre Service que vous consultez, la date et l’heure de votre visite, le temps passé sur ces pages, les identifiants uniques de dispositifs ainsi que d’autres données de diagnostic.</p>
            
            <p>Suivi et données de cookies</p>
            <p>Nous avons recours à des cookies et à d’autres technologies de suivi similaires pour effectuer un suivi des activités effectuées dans notre Service, et nous conservons certaines informations.</p>
            
            <p>Les cookies sont des fichiers à faible volume de données pouvant comporter un identifiant unique anonyme. Les cookies sont envoyés à votre navigateur depuis un site web et sont stockés sur votre dispositif. D’autres technologies de suivi telles que les pixels, les balises et les scripts sont également utilisées pour recueillir et suivre des informations et afin d’améliorer et d’analyser notre Service.</p>
            
            <p>Vous pouvez demander à votre navigateur de refuser tous les cookies ou de vous avertir lorsqu’un cookie est envoyé. Toutefois, si vous n’acceptez pas les cookies, il se peut que vous ne puissiez pas utiliser certains éléments de notre Service.</p>

            <p>Exemples de cookies que nous utilisons:</p>

            <p>Cookies de Session. Nous utilisons des Cookies de Session pour faire fonctionner notre Service.
Cookies de Préférences. Nous utilisons des Cookies de Préférences pour mémoriser vos préférences et vos différents paramètres.
Cookies de Sécurité. Nous utilisons des Cookies de Sécurité pour des raisons de sécurité.</p>

            <p>Utilisation des données</p>

            <p>IdCorp utilise les données recueillies à des fins diverses:</p>
            <p>Pour fournir et assurer notre Service
Pour vous faire part des changements apportés à notre Service
Pour vous permettre d’utiliser les fonctions interactives de notre Service quand vous le souhaitez
Pour assurer l’assistance client
Pour recueillir des données précieuses ou d’analyses qui nous permettront d’améliorer notre Service
Pour contrôler l’utilisation de notre Service
Pour détecter, prévenir et régler les  problèmes techniques
Pour vous faire part de l’actualité, d’offres spéciales et d’informations d’ordre général concernant d’autres marchandises, services et événements que nous proposons et qui sont similaires à ceux que vous avez déjà achetés ou au sujet desquels vous vous êtes déjà renseigné, sauf si vous avez déjà indiqué que vous ne voulez pas recevoir d’informations de cette nature</p>

            <p>Fondement juridique du traitement des données à caractère personnel en vertu du Règlement Général relatif à la Protection des Données (RGPD).</p>

            <p>Si vous résidez dans l’Espace économique européen (EEE), le fondement juridique d’IdCorp en ce qui concerne la collecte et l’utilisation des données personnelles décrites dans la présente Politique de Confidentialité dépend des Données à Caractère Personnel que nous recueillons et du contexte précis dans lequel nous les recueillons.</p>

            <p>IdCorp peut traiter vos Données à Caractère Personnel:</p>
            <p>Parce que nous besoin d’exécuter un contrat passé avec vous
Parce que vous nous avez autorisé à le faire
Parce que nous avons un intérêt légitime à effectuer ce traitement et que vos droits ne priment pas sur cet intérêt légitime
A des fins de traitement des paiements
Pour respecter la loi</p>

            <p>Conservation des données</p>

            <p>IdCorp ne conservera vos Données à Caractère Personnel que tant que cela sera nécessaire aux fins stipulées dans la présente Politique de Confidentialité. Nous conserverons et utiliserons vos Données à Caractère Personnel dans la mesure où cela sera nécessaire pour que nous puissions nous acquitter de nos obligations légales (par exemple, pour respecter la législation en vigueur), résoudre des différends et appliquer nos accords et nos politiques.</p>
            <p>IdCorp conservera également les Données d’Utilisation à des fins d’analyses internes. Les Données d’Utilisation sont généralement conservées pour une période plus courte, sauf lorsque ces données sont utilisées pour renforcer la sécurité ou pour améliorer les fonctionnalités de notre Service, ou si nous sommes légalement tenus de conserver ces données plus longtemps.</p>
            <p>Transfert des données</p>
            <p>Les informations vous concernant, notamment vos Données à Caractère Personnel, peuvent être transférées de votre région, province, pays, ou autre division territoriale vers des ordinateurs – et stockées sur ces derniers – situés à un endroit où la législation relative à la protection des données diffère de celle du territoire où vous résidez.</p>
            <p>Si vous résidez hors de France et que vous choisissez de nous communiquer des informations, sachez que nous transférons les données, y compris les Données à Caractère Personnel, vers la France et que nous les y traitons.</p>
            <p>En acceptant la présente Politique de Confidentialité puis en soumettant ces informations, vous consentez à ce transfert.</p>
            
            <p>IdCorp prendra toutes les mesures raisonnablement nécessaires pour faire en sorte que vos données soient traitées de manière sécurisée et conformément à la présente Politique de Confidentialité et vos Données à Caractère Personnel ne seront transférées vers aucune organisation ni aucun pays à moins que des contrôles adéquats ne soient en place, notamment en ce qui concerne la sécurité de vos données et d’autres données personnelles.</p>
            

            <p>Communication de données</p>
            <p>Communications de données aux forces de l'ordres</p>
            <p>Dans certaines circonstances, IdCorp peut être tenue de communiquer vos Données à Caractère Personnel si la loi l’exige ou en réponse à des demandes valides émanant de pouvoirs publics (par ex. un tribunal ou un organisme gouvernemental).</p>
            
            <p>Exigences légales</p>

            <p>IdCorp peut communiquer vos Données à Caractère Personnel si elle estime de bonne foi que cela est nécessaire pour:</p>
            <p>S’acquitter d’une obligation légale
Protéger et défendre les droits ou les biens de IdCorp
Prévenir d’éventuels actes répréhensibles ou enquêter sur de tels actes dans le cadre du Service
Assurer la sécurité personnelle des utilisateurs du Service ou du public
Se protéger contre la responsabilité civile</p>

            <p>Sécurité des données</p>
            <p>La sécurité de vos données nous tient à cœur. Toutefois, n’oubliez pas qu’aucune méthode de transmission de données par Internet ou méthode de stockage électronique n’est sûre à 100 %. Bien que nous nous efforcions d’utiliser des méthodes commercialement acceptables pour protéger vos Données à Caractère Personnel, nous ne pouvons pas leur garantir une sécurité absolue.</p>

            <p>Droits à la protection des données qui vous sont accordés par le Règlement Général relatif à la Protection des Données (RGPD)</p>
            
            <div>Si vous résidez dans l’Espace économique européen (EEE), vous avez certains droits en matière de protection des données. IdCorp entend prendre des mesures raisonnables pour vous permettre de corriger, de modifier, ou de supprimer vos Données à Caractère Personnel ou d’en limiter l’utilisation.</div>
            <p>Si vous souhaitez savoir quelles Données à Caractère Personnel nous détenons à votre sujet et voulez qu’elles soient supprimées de nos systèmes, veuillez nous contacter.</p>
            <p>Dans certaines circonstances, vous avez les droits suivants en matière de protection des données:</p>

            <p>ertaines circonstances, vous avez les droits suivants en matière de protection des données:

Le droit d’accéder aux informations que nous détenons à votre sujet, de les actualiser ou de les supprimer. Lorsque cette option est proposée, vous pouvez consulter ou actualiser vos Données à Caractère Personnel ou en demander la suppression dans la section paramètres de votre compte. Si vous ne pouvez pas effectuer ces actions vous-même, merci de nous contacter pour obtenir de l’aide.
Droit de rectification. Vous avez le droit de faire rectifier vos données si elles sont inexactes ou incomplètes.
Droit d’opposition. Vous avez le droit de vous opposer à ce que nous traitions vos Données à Caractère Personnel.
Droit de limitation Vous avez le droit de nous demander de limiter le traitement de vos données personnelles.
Le droit à la portabilité des données. Vous avez le droit de recevoir une copie des informations que nous détenons à votre sujet dans un format couramment utilisé, structuré et lisible par une machine.
Droit au retrait du consentement. Vous avez également le droit de retirer votre consentement à tout moment si IdCorp s’est appuyé sur votre consentement pour traiter vos données personnelles.</p>

            <p>Veuillez noter que nous pouvons vous demander de prouver votre identité avant de répondre à des demandes de cette nature.</p>
            <p>Vous avez le droit de déposer plainte auprès d’une autorité de protection des données au sujet de notre collecte et de notre utilisation de vos Données à Caractère Personnel. Pour plus de précisions, veuillez contacter l’autorité de protection des données la plus proche de vous dans l’Espace économique européen (EEE).</p>

            <p>Prestataires de services</p>

            <p>Nous pouvons faire appel à des sociétés tierces et à des tierces personnes pour faciliter la prestation de notre Service (« Prestataires de Services »), assurer le Service en notre nom, assurer des services liés au Service ou nous aider à analyser la façon dont notre Service est utilisé.</p>
            
            <p>Ces tiers n’ont accès à vos Données à Caractère Personnel que pour effectuer ces tâches en notre nom et il leur est interdit de les communiquer ou de les utiliser à quelle qu’autre fin.</p>
            

            <p>Analyses</p>

            <p>Nous pouvons faire appel à des Prestataires de Services tiers pour surveiller
et analyser l’utilisation de notre Service.</p>

            <p>Google Analytics : Google Analytics est un service d’analyse web proposé par Google qui assure le suivi du trafic d’un site web et en rend compte. Google utilise les données recueillies pour suivre et surveiller l’utilisation de notre Service. Ces données sont partagées avec d’autres services Google. Google peut utiliser les données recueillies pour contextualiser et personnaliser les annonces de son propre réseau publicitaire. Vous pouvez empêcher que vos activités dans le cadre du Service ne soient mises à la disposition de Google Analytics en installant le plug-in pour navigateur Analytics Opt out browser add-on de Google Analytics. Ce plugin empêche le code JavaScript de Google Analytics JavaScript (ga.js, analytics.js et dc.js) de partager les informations concernant les activités liées aux visites avec Google Analytics. Pour plus de précisions sur les pratiques de confidentialité de Google, merci de consulter la <a target="_blanck" href="https://policies.google.com/privacy?hl=fr">page web Protection de la vie privée et conditions de Google.</a></p>

            <p>Paiements</p>

            <p>Il se peut que nous proposions des produits et/ ou services payants dans le cadre du Service. En pareil cas, nous ferons appel à des services de tiers pour le traitement des paiements (c.-à-d. à des sociétés de traitement des paiements).</p>

            <p>Nous ne recueillerons pas et ne conserverons pas les données de votre carte de paiement. Ces données sont directement communiquées aux sociétés tierces qui traitent les paiements, lesquelles sociétés utilisent vos données personnelles conformément à leur politique de confidentialité. Ces sociétés de traitement des paiements respectent la norme PCI-DSS gérée par le PCI Security Standards Council, qui est le fruit d’un effort concerté entre des marques telles que Visa, MasterCard, American Express et Discover. Les exigences PCI-DSS aident à garantir un traitement sécurisé des informations de paiement. Les sociétés de traitement de paiements avec lesquelles nous travaillons sont:</p>

            <p>Stripe : <a target="_blanck" href="https://stripe.com/privacy">Leur politique de confidentialité</a> est disponible sur le site ;</p>
            <p>PayPal :  <a target="_blanck" href="https://www.paypal.com/webapps/mpp/ua/privacy-full">Leur politique de confidentialité</a> est disponible sur le site.</p>
            
            <p>Liens pointant vers d’autres sites</p>
            <p>Il se peut que notre Service contienne des liens pointant vers d’autres sites que nous n’exploitons pas. Si vous cliquez sur un lien de tiers, vous serez redirigé vers le site de ce tiers. Nous vous recommandons vivement d’examiner la politique de confidentialité de chacun des sites que vous consultez.</p>
            <p>Nous n’avons aucun contrôle sur le contenu, les politiques ou pratiques de confidentialité des sites ou services de tiers et déclinons toute responsabilité en ce qui les concerne.</p>

            <p>Modifications de la présente Politique de Confidentialité</p>
            <p>Nous nous réservons le droit d’actualiser notre Politique de Confidentialité de temps à autre. Nous vous informerons de toute modification en publiant la nouvelle Politique de Confidentialité sur cette page.</p>

            <p>Avant que la modification ne prenne effet, nous vous en informerons par e-mail et/ ou en plaçant un avis bien en vue dans notre Service et nous actualiserons la « date de prise d’effet » qui figure en haut de la présente Politique de Confidentialité.</p>
            <p>Nous vous conseillons de consulter la présente Politique de Confidentialité périodiquement pour prendre connaissance de toute modification. Les modifications apportées à la présente Politique de Confidentialité prennent effet lorsqu’elles sont publiées sur cette page.</p>

            <p>Nous contacter</p>

            <p>Pour toute question relative à la présente Politique de Confidentialité, veuillez nous contacter:</p>
            <p>Par courrier électronique: <span style={{textDecoration: "underline"}}>contact@idcorp.fr</span></p>
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

export default Pol;