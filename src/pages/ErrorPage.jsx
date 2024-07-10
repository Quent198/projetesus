import { Link, useRouteError } from "react-router-dom";

import Logo from "../assets/Logo.png";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center bg-white w-screen h-screen text-2xl">
      <img
        src={Logo}
        alt="Logo"
        className="w-auto h-[150px] hover:cursor-pointer mb-10"
      />
      <h1 className="text-[red] font-medium">Error {error.status}</h1>
      <h2 className="mb-10 text-[red] font-medium">{error.statusText}</h2>
      <Link to="/" className="text-primary font-bold hover:text-secondary">
        Retourner à l'accueil
      </Link>
    </div>
  );
}
