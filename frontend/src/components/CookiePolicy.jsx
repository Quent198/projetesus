import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const CookiePolicy = () => {
  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>Politique de cookies</h1>
        <p style={styles.text}>
          Notre site utilise des cookies pour améliorer votre expérience
          utilisateur. Les cookies sont de petits fichiers texte qui sont
          stockés sur votre appareil lorsque vous visitez un site Web. Ils
          permettent au site de se souvenir de vos actions et préférences (comme
          la connexion, la langue, la taille de la police et d'autres
          préférences d'affichage) sur une période de temps. Cela vous évite de
          saisir ces informations chaque fois que vous revenez sur le site ou
          que vous naviguez d'une page à l'autre.
        </p>
        <h2 style={styles.subtitle}>Types de cookies utilisés</h2>
        <p style={styles.text}>
          Nous utilisons plusieurs types de cookies sur notre site :
        </p>
        <ul style={styles.list}>
          <li>Cookies essentiels : Ces cookies sont nécessaires au
            fonctionnement de notre site et vous permettent d'utiliser ses
            fonctionnalités de base.</li>
          <li>Cookies de performance : Ces cookies nous aident à comprendre
            comment les visiteurs interagissent avec notre site en collectant
            et rapportant des informations de manière anonyme.</li>
          <li>Cookies de fonctionnalité : Ces cookies permettent au site de se
            souvenir des choix que vous faites (comme votre nom d'utilisateur,
            votre langue ou la région dans laquelle vous vous trouvez) et
            fournissent des fonctionnalités améliorées et plus personnelles.</li>
          <li>Cookies de suivi et publicitaires : Ces cookies sont utilisés pour
            suivre les informations sur les visiteurs du site et afficher des
            publicités ciblées. Ils peuvent également être utilisés pour suivre
            votre comportement de navigation sur d'autres sites Web.</li>
        </ul>
        <h2 style={styles.subtitle}>Gestion des cookies</h2>
        <p style={styles.text}>
          Vous pouvez contrôler et/ou supprimer les cookies à votre guise. Vous
          pouvez supprimer tous les cookies déjà présents sur votre ordinateur
          et vous pouvez configurer la plupart des navigateurs pour les bloquer.
          Toutefois, si vous le faites, vous devrez peut-être ajuster manuellement
          certaines préférences à chaque fois que vous visitez un site, et
          certains services et fonctionnalités peuvent ne pas fonctionner.
        </p>
      </div>
      <div style={{ marginBottom: "50px" }}></div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginTop: "30px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#666",
  },
  list: {
    paddingLeft: "20px",
  },
};

export default CookiePolicy;


