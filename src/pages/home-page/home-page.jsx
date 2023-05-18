import React from "react";
import "./home-page.css";
import { GameItem } from "../../components/game-item/game-item";


const games = [
  {
    image: "/game-covers/forza_5.jpeg",
    title: "Forza Horizon 5",
    genres: ["Race", "Simulator", "Open world"],
    price: 59.99,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "An endless kaleidoscope of Horizon adventures awaits you! Take exciting trips through the incredibly beautiful and original world of Mexico behind the wheel of the greatest cars in history. Start your Horizon adventure today by adding the game to your wishlist!",
  },
  {
    image: "/game-covers/battlefield_2042.jpg",
    title: "Battlefield 2042",
    genres: ["Action", "Shooter", "War"],
    video: "https://www.youtube.com/embed/ASzOzrB-a9E",
    price: 59.99,
    id: 2,
    description:
      "Battlefield™ 2042 — is a first-person shooter that brings the series back to legendary large-scale battles. In a chaotic future, adapt and thrive on an ever-changing battlefield with your squad and an arsenal of the latest technology.",
  },
  {
    image: "/game-covers/life_is_strange_true_colors.jpeg",
    title: "Life is Strange True Colors",
    genres: ["Deep plot", "Protagonist"],
    video: "https://www.youtube.com/embed/b6CkzwVAr0M",
    price: 59.99,
    id: 3,
    description:
      "Alex Chen hides from everyone his 'curse' - the supernatural ability to read the strong emotions of others and influence them. But when her brother dies - allegedly in an accident - Alex uses her to find out the truth.",
  },
  {
    image: "/game-covers/gta_v.jpeg",
    title: "Grand Theft Auto V",
    genres: ["Open world", "Action"],
    video: "https://www.youtube.com/embed/QkkoHAzjnUs",
    price: 59.99,
    id: 4,
    description:
      "Grand Theft Auto V for PC allows players to explore the iconic world of Los Santos and Blaine County in resolutions up to 4k and beyond at 60 frames per second.",
  },
  {
    image: "/game-covers/rainbow_siege.jpeg",
    title: "Tom Clancy's Rainbow Six Siege",
    video: "https://www.youtube.com/embed/6wlvYh0h63k",
    genres: ["Tactics", "Shooter"],
    price: 59.99,
    id: 5,
    description:
      "Tom Clancy's Rainbow Six – is a continuation of the acclaimed first-person shooter developed by the studio Ubisoft Montreal.",
  },
  {
    image: "/game-covers/assassins_creed_valhalla.png",
    title: "Assassin’s Creed Valhalla",
    genres: ["Parkour", "War", "Открытый мир"],
    video: "https://www.youtube.com/embed/ssrNcwxALS4",
    price: 59.99,
    id: 6,
    description:
      "Assassin’s Creed Valhalla — is a multiplatform action/RPG video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth installment in the Assassin's Creed series.",
  },
  {
    image: "https://i.pinimg.com/736x/7f/67/6e/7f676e7dcf5b4f3d352d5ccaf2cb2164.jpg",
    title: "Fifa 22",
    genres: ["sports", "multiplier"],
    price: 49.99,
    video: "https://www.youtube.com/embed/o1igaMv46SY",
    id: 7,
    description: "Description of Game 6",
  },
];

export const HomePage = () => {
  return (
    <div className="home-page">
      {games.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
};
