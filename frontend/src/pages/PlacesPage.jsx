import React from 'react';
import PlaceCard from "../components/PlaceCard"
import Header from '../components/Header';
import Footer from '../components/Footer';
import image1 from "../assets/Slider/slider1.jpg"
import image2 from "../assets/Slider/slider2.jpg"
import {storage} from "../components/auth/Register"
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { useEffect, useState } from 'react';

function PlacesPage() {
  const [placesUrl, setPlacesUrl] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, 'images/');
      const result = await listAll(storageRef);
      const urls = await Promise.all(result.items.map((item) => getDownloadURL(item)));
      setPlacesUrl(urls)
    };

    fetchImages();
  }, []);
  

  return (
    <>
    <Header/>
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Découvrez nos lieux</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {placesUrl.map((place, index) => (
          <PlaceCard
            key={index}
            image={place}
            // title={place.title}
            // description={place.description}
          />
        ))}
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default PlacesPage;

