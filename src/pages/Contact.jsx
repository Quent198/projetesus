import Logo from "../assets/Logo.png"
import Footer from "../components/Footer";

export default function Contact() {
  return (
   <>
    <header className="bg-[#251D10] w-screen h-[4rem] z-10"></header>
   <div className="flex justify-center flex-col items-center mt-10">
   <a className="z-20" href="/">
          <img src={Logo} />
        </a>
      <h1>Contactez-nous</h1>
      <form className="m-10 border-2 rounded-xl border-gray-300 p-5 w-[350px]">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">Motif de votre contact</span>
          </div>
          <select className="select select-bordered">
            <option disabled selected>
              Choisir
            </option>
            <option>Questions générales</option>
            <option>Problème techniques</option>
            <option>Facturation</option>
            <option>Souscription</option>
            <option>Connexion/Inscription</option>
            <option>Autres</option>
            {/* ajouter un input si l'utilisateur choisit "autres" */}
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">Nom</span>
          </div>
          <input
            type="text"
            placeholder="Nom"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">Email</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-bold">Message</span>
          </div>
          <textarea className="textarea textarea-bordered h-24"></textarea>
        </label>
        <button className="btn mt-5 text-sm">Envoyer</button>
      </form>
    </div>
    <Footer/>
   </>
   
  );
}