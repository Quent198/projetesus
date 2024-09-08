import React from 'react';
import PlaceCard from "../components/PlaceCard"
import Header from '../components/Header';
import Footer from '../components/Footer';
import image1 from "../assets/Slider/slider1.jpg"
import image2 from "../assets/Slider/slider2.jpg"

function PlacesPage() {
  const places = [
    {
      image: image1,
      title: 'Lieu 1',
      description: 'Description du lieu 1...',
    },
    {
      image: image2,
      title: 'Lieu 2',
      description: 'Description du lieu 2...',
    },
    
  ];

  return (
    <>
    <Header/>
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Découvrez nos lieux</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {places.map((place, index) => (
          <PlaceCard
            key={index}
            image={place.image}
            title={place.title}
            description={place.description}
          />
        ))}
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default PlacesPage;

