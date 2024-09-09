import React, { useState } from 'react';
import { resetPassword } from '../../api/user'; // Fonction API pour réinitialiser le mot de passe
import Header from "../../components/Header";
import Footer from "../Footer";
import { useParams } from 'react-router-dom';

export default function ResetPassword() {
  const {token} = useParams()
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      formData.token = token
      const response = await resetPassword(formData);
      if (response.message === "PASSWORD_RESET_SUCCESS") {
        alert("Mot de passe réinitialisé avec succès !");
      } else {
        alert(response.error);
      }
    } catch (error) {
      console.error("Erreur lors de la réinitialisation :", error);
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
              type="password"
              className="grow"
              placeholder="Nouveau mot de passe"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 my-10 bg-primary text-white ">
            <input
              type="password"
              className="grow"
              placeholder="Confirmer le nouveau mot de passe"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </label>

          <button
            className="btn bg-primary text-white border-none rounded-[100px] text-xl hover:bg-secondary my-3"
            type="submit"
          >
            <p className="mx-1">Réinitialiser</p>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
