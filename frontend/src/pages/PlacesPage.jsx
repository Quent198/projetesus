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
      title: 'Paldenshangpa La Boulaye',
      description: "Paldenshangpa La Boulaye, situé en Bourgogne, est un centre bouddhiste tibétain fondé en 1974 par Kalou Rinpoché. Il abrite le célèbre 'Temple des Mille Bouddhas', un lieu dédié à la pratique et à l’enseignement du bouddhisme de la lignée Shangpa Kagyu. Entouré de jardins et de paysages paisibles, le centre offre des retraites spirituelles, des initiations et des méditations guidées. Ouvert à tous, il attire ceux qui recherchent une connexion spirituelle et un espace de contemplation, faisant de ce lieu un pont entre la tradition bouddhiste tibétaine et l'Occident",
    },
    {
      image: image2,
      title: "Parc naturel régional des Monts d'Ardèche",
      description: "Le Parc naturel régional des Monts d'Ardèche, créé en 2001, se situe dans la région Auvergne-Rhône-Alpes. Ce parc protégé s’étend sur plus de 200 000 hectares et englobe une diversité de paysages, allant des montagnes volcaniques aux vallées profondes, en passant par des forêts et des plateaux. Il met en valeur un patrimoine naturel riche et varié, avec une flore et une faune remarquables, tout en préservant un important patrimoine culturel et architectural. De nombreuses activités de plein air y sont proposées, comme la randonnée, le cyclisme et l’escalade, permettant aux visiteurs de découvrir la beauté et l’authenticité de ce territoire préservé.",
    },
    
  ];

  return (
    <>
    <Header/>
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Découvrez nos lieux</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
