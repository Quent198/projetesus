import React, { useContext, useState } from 'react';
import { signin } from '../../api/user'; // Fonction API pour la connexion
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../Footer";
import { UserContext } from '../../context/UserContext';

export default function Login() {
 const {setConnectedUser} = useContext(UserContext)
 const navigate = useNavigate()
  const [formData, setFormData] = useState({
    emailUsername: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signin(formData); // Envoie les données au backend
      if (response.message === 'LOGIN_SUCCESS') {
        alert("Connexion réussie !");
        // Enregistrement du token ou redirection si nécessaire
        setConnectedUser(response.user)
        navigate("/")
      } else {
        alert(response.error); // Gère les erreurs de connexion
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-secondary-bg h-[90svh] w-screen flex items-center justify-center">
        <form className="shadow-xl p-10 bg-white" onSubmit={handleSubmit}>
          <h1 className="text-primary text-4xl">Connexion</h1>
          <label className="input input-bordered flex items-center gap-2 my-10 bg-primary text-white ">
            <input
              type="text"
              className="grow"
              placeholder="Pseudo ou Email"
              name="emailUsername"
              value={formData.emailUsername}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 bg-primary text-white">
            <input
              type="password"
              className="grow opacity-1 text-white"
              placeholder="Mot de passe"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>

          <button
            className="btn bg-primary text-white border-none rounded-[100px] text-xl hover:bg-secondary my-3"
            type="submit"
          >
            <p className="mx-1">Se connecter</p>
          </button>

          <p className="text-sm mt-3">
            Vous n'avez pas de compte ? <Link to="/register" className="text-secondary">S'inscrire</Link>
          </p>

          <p className="text-sm hover:cursor-pointer hover:text-secondary">
            <Link to="/forgotpassword">Mot de passe oublié</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
