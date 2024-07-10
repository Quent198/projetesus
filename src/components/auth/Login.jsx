import Header from "../../components/Header";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Header />
      <div className="bg-secondary-bg h-[90svh] w-screen flex items-center justify-center">
        <form className="shadow-xl p-10 bg-white">
          <h1 className="text-primary text-4xl">Connexion</h1>
          <label className="input input-bordered flex items-center gap-2 my-10 bg-primary text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Pseudo" />
          </label>
          <label className="input input-bordered flex items-center gap-2 bg-primary text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow opacity-1 text-white"
              placeholder="Mot de passe"
            />
          </label>
          <div className="form-control my-5">
            <label className="cursor-pointer label flex flex-row justify-start">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-success"
              />
              <span className="label-text text-black pl-3">
                Se souvenir de moi
              </span>
            </label>
          </div>

          <button
            className="btn bg-primary text-white border-none rounded-[100px] text-xl hover:bg-secondary my-3"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <p className="mx-1">Se connecter</p>
          </button>
          <p className="text-sm mt-3">
            Vous n'avez pas de compte ?{" "}
            <Link to="/register" className="text-secondary">
              S'inscrire
            </Link>
          </p>

          <p className="text-sm hover:cursor-pointer hover:text-secondary">
            Mot de passe oublié
          </p>
        </form>
      </div>
    </div>
  );
}
