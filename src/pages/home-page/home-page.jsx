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
    genres: ["Parkour", "War", "Open world"],
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
    description: "FIFA 22 is the latest installment in the popular football (soccer) video game series. With improved gameplay, realistic graphics, and various game modes, it offers an immersive experience for football enthusiasts. Control your favorite teams, compete in intense matches, and enjoy the thrill of the beautiful game.",
  },
  {
    image: "https://i.pinimg.com/236x/31/d7/07/31d707254d10d91193df42fc375066c9.jpg",
    title: "uncharted 4",
    genres: ["Action", "Adventure","Third-person shooter",],
    price: 49.99,
    video: "https://www.youtube.com/embed/hh5HV4iic1Y",
    id: 8,
    description: "A Thief's End is an action-packed adventure game that takes players on a thrilling journey alongside Nathan Drake, a seasoned treasure hunter. Join him on his quest for a fabled pirate treasure, facing dangerous adversaries, solving intricate puzzles, and uncovering long-lost secrets. With stunning visuals, captivating storytelling, and exhilarating gameplay,The game delivers an unforgettable and cinematic gaming experience. Prepare to embark on an epic adventure that will test your skills, wit, and courage to the limit.",
  },
  {
    image: "https://i.pinimg.com/236x/3b/5d/22/3b5d22ba69dffe36bf1c1cf908195d4d.jpg",
    title: "watch dogs",
    genres: ["Action-adventure", "Open world","Stealth"],
    price: 49.99,
    video: "https://www.youtube.com/embed/PFko4Kut39s",
    id: 9,
    description: "dive into a technologically advanced open world as a skilled hacker seeking justice. Explore a sprawling cityscape, utilize hacking abilities to manipulate systems, and engage in intense third-person combat. Uncover a web of corruption and navigate a narrative filled with intrigue and suspense. Experience the thrill of being a vigilante in a digital age where information is power.",
  },
  {
    image: "https://i.pinimg.com/564x/19/47/d4/1947d4e41698c221c6b4f4ca7957de83.jpg",
    title: "Halo 5: Guardians",
    genres: ["First-person shooter", "Science fiction"],
    price: 49.99,
    video: "https://www.youtube.com/embed/o1igaMv46SY",
    id: 10,
    description: "This is an epic first-person shooter set in a science fiction universe. Players assume the role of the iconic Master Chief and also play as Spartan Locke, leading their respective teams on a high-stakes mission. Engage in intense combat against alien enemies, utilize advanced weaponry, and navigate expansive and visually stunning environments. The game features a compelling single-player campaign and offers robust multiplayer modes for cooperative and competitive play. With its thrilling action and immersive sci-fi world",
  },
  {
    image: "https://i.pinimg.com/736x/1a/12/d0/1a12d079dae8a8fd2ac0387d0d541894.jpg",
    title: "resident evil 2",
    genres: ["sports", "multiplier"],
    price: 49.99,
    video: "https://www.youtube.com/embed/o1igaMv46SY",
    id: 11,
    description: "This is a survival horror game that immerses players in a nightmarish zombie-infested world. Set in the fictional Raccoon City, players assume the roles of Leon S. Kennedy and Claire Redfield, who find themselves trapped in the midst of a deadly viral outbreak. Navigate through dark and eerie environments, solve puzzles, and confront grotesque creatures in a desperate fight for survival. With atmospheric tension, immersive gameplay, and a gripping storyline,it delivers a terrifying experience that keeps players on the edge of their seats as they unravel the mysteries behind the outbreak and uncover the truth lurking in the shadows.",
  },
  {
    image: "https://i.pinimg.com/736x/5e/c8/f8/5ec8f8c5af5e0a285831bab9a391f294.jpg",
    title: "burnout 3",
    genres: ["sports", "Racing"],
    price: 49.99,
    video: "https://www.youtube.com/embed/o1igaMv46SY",
    id: 12,
    description: "This is an adrenaline-fueled racing game that combines high-speed action with spectacular crashes. Experience intense arcade-style racing as you compete in a variety of races and challenges across different locations. Push your driving skills to the limit, perform daring maneuvers, and take down rivals in epic collisions. The game features a robust crash mode where you can cause massive pile-ups and destruction for maximum points. With its fast-paced gameplay, exhilarating races, and breathtaking crashes.",
  },
  {
    image: "https://i.pinimg.com/564x/3b/e1/b9/3be1b96a85580dfeb0e58a222da8455f.jpg",
    title: "The Witcher",
    genres: ["sports", "Action"],
    price: 49.99,
    video: "https://www.youtube.com/embed/o1igaMv46SY",
    id: 13,
    description: "This is a dark fantasy action role-playing game based on the book series of the same name by Andrzej Sapkowski. Players assume the role of Geralt of Rivia, a skilled monster hunter known as a Witcher, in a vast and immersive open world. Embark on epic quests, engage in intense combat, and make impactful choices that shape the outcome of the story. Explore richly detailed environments, interact with intriguing characters, and uncover deep and complex narratives. With its compelling storytelling, dynamic combat system, and intricate world-building",
  },
  {
    image: "https://i.pinimg.com/564x/34/58/3c/34583c6c53be8bd5da6b404b568bb66c.jpg",
    title: "assassins creed 3",
    genres: ["sports", "multiplier"],
    price: 49.99,
    video: "https://www.youtube.com/embed/o1igaMv46SY",
    id: 14,
    description: "This is an action-adventure game set during the American Revolution. Players take on the role of Connor Kenway, a half-English, half-Mohawk assassin, as he fights against the Templars and explores a historically rich open world. Experience a compelling narrative filled with political intrigue, betrayal, and revenge. Engage in stealthy assassinations, engage in intense combat, and traverse diverse landscapes ranging from bustling cities to untamed frontier wilderness. With its immersive setting, engaging gameplay mechanics, and a blend of historical events and fiction",
  },
  {
    image: "https://i.pinimg.com/564x/cd/eb/0b/cdeb0b03e50dd0f0a6c0bd8dcde76407.jpg",
    title: "assassins creed origin",
    genres: ["sports", "multiplier"],
    price: 49.99,
    video: "https://www.youtube.com/embed/o1igaMv46SY",
    id: 15,
    description: "This is an action role-playing game set in ancient Egypt. Players assume the role of Bayek, a skilled Medjay warrior, as they uncover the origins of the Assassin Brotherhood. Explore a vast and detailed open world, including iconic locations like Alexandria and the Great Pyramids, while engaging in a rich and immersive storyline. Experience intense combat with a revamped combat system and engage in stealthy assassinations using a wide array of weapons and tools. With its stunning visuals, deep and captivating narrative, and a meticulously recreated ancient Egypt",
  },
  {
    image: "https://i.pinimg.com/736x/0a/d7/04/0ad7041010e2efa0dac6eb6c6f7b057d.jpg",
    title: "God of war",
    genres: ["sports", "multiplier"],
    price: 49.99,
    video: "https://www.youtube.com/embed/o1igaMv46SY",
    id: 16,
    description: "This is an action-adventure game that follows the journey of Kratos, a Spartan warrior turned god, as he battles mythical creatures and gods from Greek mythology. Set in a beautifully realized world inspired by Norse mythology, players accompany Kratos and his son Atreus on an emotional and perilous quest. Experience intense combat with brutal and satisfying melee attacks, solve intricate puzzles, and navigate breathtaking environments. The game offers a compelling story filled with deep character development and explores themes of fatherhood, redemption, and the consequences of one's actions. With its immersive gameplay, stunning visuals, and gripping narrative",
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
