import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
    <Header/>
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Politique de Confidentialité</h1>
      <p className="mb-4">
        Votre vie privée est importante pour nous. Cette politique de confidentialité explique quelles données personnelles nous recueillons et comment nous les utilisons.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information que nous collectons</h2>
      <p className="mb-4">
        Nous collectons des informations que vous nous fournissez directement, telles que votre nom, adresse e-mail, et d'autres informations que vous soumettez via notre site web.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Utilisation de l'information</h2>
      <p className="mb-4">
        Nous utilisons les informations que nous collectons pour fournir, maintenir et améliorer nos services, ainsi que pour communiquer avec vous.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Partage de l'information</h2>
      <p className="mb-4">
        Nous ne partageons pas vos informations personnelles avec des tiers, sauf si cela est nécessaire pour fournir nos services ou si nous y sommes légalement obligés.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Sécurité de l'information</h2>
      <p className="mb-4">
        Nous mettons en œuvre des mesures de sécurité pour protéger vos informations contre tout accès non autorisé, altération, divulgation ou destruction.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Vos droits</h2>
      <p className="mb-4">
        Vous avez le droit d'accéder, de corriger, de supprimer ou de limiter l'utilisation de vos informations personnelles. Pour exercer ces droits, veuillez nous contacter.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Modifications de cette politique</h2>
      <p className="mb-4">
        Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. Nous vous informerons de tout changement en publiant la nouvelle politique sur notre site web.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contactez-nous</h2>
      <p>
        Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à : contact@example.com.
      </p>
    </div>
    <Footer/>
    </>
    
  );
};

export default PrivacyPolicy;
