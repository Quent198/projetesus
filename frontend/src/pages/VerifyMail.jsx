import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function VerifyMail() {
  return (
    <div>
      <Header />
      <div className="bg-secondary-bg h-[90svh] w-screen flex items-center justify-center">
        <div className="shadow-xl p-10 bg-white text-center">
          <h1 className="text-primary text-4xl">Vérification du compte</h1>
          <p className="my-10 text-lg">
            Merci d'avoir confirmé votre adresse e-mail ! Vous pouvez désormais vous connecter à votre compte.
          </p>

          <Link to="/login">
            <button
              className="btn bg-primary text-white border-none rounded-[100px] text-xl hover:bg-secondary my-3"
              type="button"
            >
              Se connecter
            </button>
          </Link>

          <p className="text-sm mt-3">
            Vous n'avez pas reçu d'email ? <Link to="/forgotpassword" className="text-secondary">Renvoyer l'email</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
