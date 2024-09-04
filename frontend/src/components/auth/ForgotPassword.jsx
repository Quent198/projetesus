import React, { useState } from 'react';
import { forgotPassword } from '../../../api/user'; // Fonction API pour le mot de passe oublié
import Header from "../../components/Header";
import Footer from "../Footer";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await forgotPassword({ email });
      if (response.message === "EMAIL_SENT") {
        alert("Email de réinitialisation envoyé !");
      } else {
        alert(response.error);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-secondary-bg h-[90svh] w-screen flex items-center justify-center">
        <form className="shadow-xl p-10 bg-white" onSubmit={handleSubmit}>
          <h1 className="text-primary text-4xl">Réinitialiser le mot de passe</h1>
          <label className="input input-bordered flex items-center gap-2 my-10 bg-primary text-white ">
            <input
              type="email"
              className="grow"
              placeholder="Adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <button
            className="btn bg-primary text-white border-none rounded-[100px] text-xl hover:bg-secondary my-3"
            type="submit"
          >
            <p className="mx-1">Envoyer</p>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
