import actu1 from "../../assets/Reviews/actu1.jpg";
import actu2 from "../../assets/Reviews/actu2.webp";
import actu3 from "../../assets/Reviews/actu3.webp";
import actu4 from "../../assets/Reviews/actu4.jpg";


import user1 from "../../assets/Reviews/user1.jpg";
import user2 from "../../assets/Reviews/user2.jpg";
import user3 from "../../assets/Reviews/user3.webp";
import user4 from "../../assets/Reviews/user4.jpg";


export default function LastNews() {
  const Articles = [
    {
      imgUrl: actu1,
      category: "Insolite",
      date: "25 mai 2024",
      title: "Le Palais Idéal du Facteur Cheval",
      description:
        "Dans la Drôme, ce monument unique a été construit par un facteur passionné d'architecture. Il mêle influences orientales, médiévales et antiques, créant un chef-d'œuvre d'art naïf​",
      user: {
        avatarUrl: user1,
        username: "FacteurPassionné26",
      },
    },
    {
      imgUrl: actu2,
      category: "Historique",
      date: "25 mai 2024",
      title: "Le Château de Trévarez",
      description:
        "Le château de Trévarez a été édifié entre 1893 et 1907 par James de Kerjégu, un homme politique breton. Le bâtiment se distingue par son mélange de styles néogothique et néo-Renaissance, reflétant les goûts éclectiques de l'époque. ",
      user: {
        avatarUrl: user2,
        username: "Bretonne29",
      },
    },
    {
      imgUrl: actu3,
      category: "Géographique",
      date: "25 mai 2024",
      title: "Le Lac des Corbeaux",
      description:
        "D'origine glaciaire, ce lac est niché au cœur de la forêt vosgienne, près de la station de La Bresse. Son environnement sauvage et sa tranquillité rappellent les paysages canadiens, offrant une immersion totale dans la nature",
      user: {
        avatarUrl: user3,
        username: "LeCanadienLorrain",
      },
    },
    {
      imgUrl: actu4,
      category: "Culturelle",
      date: "25 mai 2024",
      title: "Cité Internationale de la langue française au Château de Villers-Cotterêts",
      description:
        "Situé dans les Hauts-de-France, ce château, classé Monument Historique, a rouvert ses portes en octobre 2023 après une longue période d'abandon et de restauration. Il accueille désormais la Cité Internationale de la langue française, un centre dédié à la diffusion des cultures francophones. Avec ses 1600 m² d'expositions, des ateliers d'artistes et un laboratoire d'innovation, ce site propose une immersion dans l'histoire et l'évolution de la langue française",
      user: {
        avatarUrl: user4,
        username: "Picard02",
      },
    },
   
  ];

  return (
    <div className="bg-secondary-bg w-screen h-full py-10 px-10">
      <h1 className="uppercase font-bold text-primary text-4xl phone:text-5xl">
        Dernières actualités
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {Articles.map((article) => {
          return (
            <div
              key={article.title}
              className="card w-96 bg-base-100 shadow-xl m-10 hover:cursor-pointer"
            >
              <figure className="h-[200px] w-auto">
                <img src={article.imgUrl} />
              </figure>
              <div className="bg-white text-sm flex flex-col p-5 justify-between">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-primary">{article.category}</p>
                  <p className="font-medium">{article.date}</p>
                </div>
                <div className="m-3 font-bold">{article.title}</div>
                <div>{article.description}</div>
                <div className="mt-3 flex items-center justify-center">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={article.user.avatarUrl} />
                    </div>
                  </div>
                  <p className="mx-3 text-primary font-bold">
                    {article.user.username}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
