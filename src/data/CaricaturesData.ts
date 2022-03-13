import OnePersonCaricature from "../assets/caricatures/1pessoas.png";
import TwoPersonsCaricature from "../assets/caricatures/2pessoas.png";
import ThreePersonsCaricature from "../assets/caricatures/3pessoas.png";
import FourPersonsCaricature from "../assets/caricatures/4pessoas.png";

import { ICaricatureItem } from "../store/modules/cart/types";

export const CARICATURES_DATA: ICaricatureItem[] = [
  {
    id: 1,
    name: "Caricatura 1 Pessoa",
    price: 45,
    quantity: 1,
    photo: OnePersonCaricature,
  },
  {
    id: 2,
    name: "Caricatura 2 Pessoas",
    quantity: 2,
    price: 90,
    photo: TwoPersonsCaricature,
  },
  {
    id: 3,
    name: "Caricatura 3 Pessoas",
    quantity: 3,
    price: 135,
    photo: ThreePersonsCaricature,
  },
  {
    id: 4,
    name: "Caricatura 4 Pessoas",
    quantity: 4,
    price: 180,
    photo: FourPersonsCaricature,
  },
];
