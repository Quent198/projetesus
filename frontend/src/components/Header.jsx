import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowDown,
  faUser,
  faBars,
  faTimes,
  faHouse,
  faLocationDot,
  faBed,
  faNewspaper,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/Logo.png";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Header() {

  const {user, logoutConnectedUser} = useContext(UserContext)
  
  return (
    <header className="relative bg-white w-screen h-[10svh] flex justify-between items-center p-3 z-[999]">
      <Link to="/" className="text-primary font-bold hover:text-secondary">
        <img
          src={Logo}
          alt="Logo"
          className="w-auto h-[70px] hover:cursor-pointer"
        />
      </Link>
      <nav>
        <ul className="flex flex-row items-center justify-between">
          <li className="mx-5 hover:text-primary hover:cursor-pointer hidden laptop:flex">
            <Link to="/">Accueil</Link>
          </li>
          <li className="mx-5 hover:text-primary hover:cursor-pointer hidden laptop:flex">
            <Link to="/placespage">Lieux</Link>
          </li>
          <li className="mx-5 hover:text-primary hover:cursor-pointer hidden laptop:flex">
            <Link to="/hostingpage">Hébergement</Link>
          </li>
          <li className="mx-5 hover:text-primary hover:cursor-pointer hidden laptop:flex">
            <Link to="/newspage">Actualité</Link>
          </li>
          <li className="mx-5 hover:text-primary hover:cursor-pointer hidden laptop:flex">
            <Link to="/reviewpage">Avis</Link>
          </li>
          {user ? (
            <li>
              <Link
                to="/"
                className="text-primary font-bold hover:text-secondary"
              >
                <button
                onClick={()=> 
                    logoutConnectedUser()
                }
                  className="
            mx-5 btn bg-primary text-white border-none rounded-[100px] flex-row justify-evenly items-center text-xl hover:bg-secondary
            hidden phone:flex
            "
                >
                  <FontAwesomeIcon icon={faUser} />
                  <p className="mx-1">Déconnexion</p>
                </button>
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="text-primary font-bold hover:text-secondary"
              >
                <button
                  className="
            mx-5 btn bg-primary text-white border-none rounded-[100px] flex-row justify-evenly items-center text-xl hover:bg-secondary
            hidden phone:flex
            "
                >
                  <FontAwesomeIcon icon={faUser} />
                  <p className="mx-1">Connexion</p>
                </button>
              </Link>
            </li>
          )}

          <li className="laptop:hidden flex">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-primary text-white border-none hover:bg-secondary"
              >
                <FontAwesomeIcon icon={faBars} />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-primary text-white rounded-box w-52 text-center flex justify-start items-start mt-1"
              >
                <li className="flex flex-row phone:hidden items-center justify-center">
                  <Link to="/login">
                    <FontAwesomeIcon icon={faUser} className="m-0" />
                    <a className="m-0 p-0">Connexion</a>
                  </Link>
                </li>
                <li className="flex flex-row items-center justify-center hover:text-gray-200">
                  <Link to="/">
                    <FontAwesomeIcon icon={faHouse} className="m-0" />
                    <a className="m-0 p-0">Accueil</a>
                  </Link>
                </li>
                <li className="flex flex-row items-center justify-center hover:text-gray-200">
                  <Link to="/placespage">
                    <FontAwesomeIcon icon={faLocationDot} className="m-0" />
                    <a className="m-0 p-0">Lieux</a>
                  </Link>
                </li>
                <li className="flex flex-row items-center justify-center hover:text-gray-200">
                  <Link to="/hostingpage">
                    <FontAwesomeIcon icon={faBed} className="m-0" />
                    <a className="m-0 p-0">Hébergement</a>
                  </Link>
                </li>
                <li className="flex flex-row items-center justify-center hover:text-gray-200">
                  <Link to="/newspage">
                    <FontAwesomeIcon icon={faNewspaper} className="m-0" />
                    <a className="m-0 p-0">Actualités</a>
                  </Link>
                </li>
                <li className="flex flex-row items-center justify-center hover:text-gray-200">
                  <Link to="/reviewpage">
                    <FontAwesomeIcon icon={faStar} className="m-0" />
                    <a className="m-0 p-0">Avis</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
