import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const LegalNotice = () => {
  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>Mentions Légales</h1>
        <p style={styles.text}>
          Les présentes mentions légales s'appliquent à toute personne
          visitant ou utilisant le site Web.
        </p>
        <h2 style={styles.subtitle}>Editeur du site</h2>
        <p style={styles.text}>
          Votre Nom ou Raison Sociale<br />
          Adresse : Votre adresse<br />
          Téléphone : Votre numéro de téléphone<br />
          Email : Votre adresse email<br />
          SIRET : Votre numéro de SIRET<br />
          Directeur de la publication : Nom du directeur de la publication<br />
          Hébergeur : Nom de l'hébergeur<br />
          Adresse : Adresse de l'hébergeur<br />
          Téléphone : Numéro de téléphone de l'hébergeur<br />
        </p>
        <h2 style={styles.subtitle}>Propriété intellectuelle</h2>
        <p style={styles.text}>
          Le contenu de ce site Web est protégé par les lois sur la propriété
          intellectuelle et est la propriété de l'éditeur du site ou de ses
          fournisseurs de contenu. Toute utilisation non autorisée du contenu
          du site Web peut violer les lois sur la propriété intellectuelle,
          les lois sur la confidentialité et les règlements et statuts
          applicables.
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
};

export default LegalNotice;
