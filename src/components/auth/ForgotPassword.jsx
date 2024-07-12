import Header from "../../components/Header";
import Footer from "../Footer"

export default function ForgotPassword() {
  return (
    <div>
      <Header />
      <div className="bg-secondary-bg h-[90svh] w-screen flex items-center justify-center">
        <form className="shadow-xl p-10 bg-white">
          <h1 className="text-primary text-4xl">Réinitialiser le mot de passe</h1>
          <label className="input input-bordered flex items-center gap-2 my-10 bg-primary text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="email" className="grow" placeholder="Adresse e-mail" />
          </label>
         
         

          <button
            className="btn bg-primary text-white border-none rounded-[100px] text-xl hover:bg-secondary my-3"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <p className="mx-1">Envoyer</p>
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}