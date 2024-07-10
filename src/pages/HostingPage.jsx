import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Appartement from "../assets/Hosting/appartement.jpeg"
import Maison from "../assets/Hosting/maison.jpg"
import Villa from "../assets/Hosting/villa.jpg"


function HostingPage() {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [filteredType, setFilteredType] = useState('');
  const [filteredPrice, setFilteredPrice] = useState('');

  const accommodations = [
    { id: 1, type: 'Appartement', name: 'Appartement de luxe', price: 150, image: Appartement },
    { id: 2, type: 'Maison', name: 'Maison avec vue sur la mer', price: 250, image: Maison },
    { id: 3, type: 'Villa', name: 'Villa avec piscine privée', price: 500, image: Villa },
  ];

  const filteredAccommodations = accommodations.filter(acc => {
    
    if (filteredType && acc.type !== filteredType) {
      return false;
    }
    
    if (filteredPrice && acc.price > filteredPrice) {
      return false;
    }
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Recherche pour destination: ${destination}, dates: ${dates}`);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h1 className="text-3xl font-bold mb-8 text-center">Trouvez votre hébergement idéal</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center space-x-4">
                <label htmlFor="destination" className="sr-only">Destination:</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  placeholder="Entrez une destination"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-4">
                <label htmlFor="dates" className="sr-only">Dates:</label>
                <input
                  type="text"
                  id="dates"
                  name="dates"
                  placeholder="Sélectionner les dates"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-600 text-white py-2 px-4 rounded-md transition duration-300"
              >
                <SearchIcon className="h-6 w-6 inline-block -mt-1 mr-2 " />
                Rechercher
              </button>
            </form>

            
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Hébergements disponibles</h2>

              
              <div className="flex items-center space-x-4 mb-6">
                
                <div className="relative">
                  <select
                    value={filteredType}
                    onChange={(e) => setFilteredType(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 text-gray-600 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="">Tous les types</option>
                    <option value="Appartement">Appartements</option>
                    <option value="Maison">Maisons</option>
                    <option value="Villa">Villas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                      <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm18 0a10 10 0 11-20 0 10 10 0 0120 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                
                <div className="relative">
                  <select
                    value={filteredPrice}
                    onChange={(e) => setFilteredPrice(Number(e.target.value))}
                    className="appearance-none bg-white border border-gray-300 text-gray-600 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="">Tous les prix</option>
                    <option value={150}>Jusqu'à $150</option>
                    <option value={250}>Jusqu'à $250</option>
                    <option value={500}>Jusqu'à $500</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                      <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm18 0a10 10 0 11-20 0 10 10 0 0120 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

            
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAccommodations.map(accommodation => (
                  <div key={accommodation.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={accommodation.image} alt={accommodation.name} className="w-full h-48 object-cover object-center" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{accommodation.name}</h3>
                      <p className="text-gray-600">{accommodation.type}</p>
                      <p className="text-gray-800 font-bold mt-2">{`$${accommodation.price}/nuit`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HostingPage;
