import Meditation from "../assets/meditation.svg";
import Swimmer from "../assets/swimmer.svg";
import Bike from "../assets/bike.svg";
import Weight from "../assets/weight.svg";
import Calories from "../assets/calories.svg";
import Proteines from "../assets/proteines.svg";
import Glucides from "../assets/glucides.svg";
import Lipides from "../assets/lipides.svg";

export const titre = [
  { id: "1ti", link: "Accueil" },
  { id: "2ti", link: "Profil" },
  { id: "3ti", link: "Réglage" },
  { id: "4ti", link: "Communauté" },
];

export const iconeAside = [
  { id: "1ic", src: Meditation, alt: "icône d'une personne qui médite" },
  { id: "2ic", src: Swimmer, alt: "icône d'une personne qui nage" },
  { id: "3ic", src: Bike, alt: "icône d'un cycliste" },
  { id: "4ic", src: Weight, alt: "icone d'un poids de musculation" },
];

export const iconeMain = [
  {
    id: "5ic",
    src: Calories,
    alt: "icône d'une flamme de couleur rouge",
    value: "19,930kCal",
    categorie: "Calories",
  },
  {
    id: "6ic",
    src: Proteines,
    alt: "icône d'un morceau de viande de couleur bleue",
    value: "150g",
    categorie: "Protéines",
  },
  {
    id: "7ic",
    src: Glucides,
    alt: "icône d'une pomme de couleur jaune",
    value: "290g",
    categorie: "Glucides",
  },
  {
    id: "8ic",
    src: Lipides,
    alt: "icône d'un hamburger de couleur rose",
    value: "50g",
    categorie: "Lipides",
  },
];
