const data = [
  {
    id: crypto.randomUUID(),
    cover: "snow-white.jpeg",
    title: "Disney’s Snow White",
    description:
      "Starring Rachel Zegler in the title role and Gal Gadot as her Stepmother, the Evil Queen, the magical adventure journeys back to the timeless story with beloved characters Bashful, Doc, Dopey, Grumpy, Happy, Sleepy, and Sneezy.",
    genre: "Drama, Fantasy, Live Action, Musical",
    rating: 5,
    price: 140,
  },
  {
    id: crypto.randomUUID(),
    cover: "tron-ares.jpeg",
    title: "Tron: Ares",
    description:
      "“TRON: Ares” follows a highly sophisticated Program, Ares, who is sent from the digital world into the real world on a dangerous mission, marking humankinds first encounter with A.I. being",
    genre: "Action-Adventure, Live Action, Science Fiction",
    rating: 3,
    price: 90,
  },
  {
    id: crypto.randomUUID(),
    cover: "moana2.jpeg",
    title: "Moana 2 Reo Māori",
    description:
      "Moana 2 and Moana 2 Reo Māori reunites Moana and Maui three years later for an expansive new voyage alongside a crew of unlikely seafarers. After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything shes ever faced.",
    genre: "Action-Adventure, Animation, Family, Fantasy, Musical",
    rating: 4,
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    cover: "au_movies_disney_wish_payoff_poster_ehvl_27739531.jpeg",
    title: "Wish",
    description:
      "n “Wish,” Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force—a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe—the ruler of Rosas, King Magnifico—to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
    genre: "Action-Adventure, Animation, Fantasy, Kids & Family",
    rating: 4,
    price: 250,
  },
  {
    id: crypto.randomUUID(),
    cover: "au_poster_movies_disney_zootopia2_teaser_b4cb9449.jpeg",
    title: "Zootopia 2",
    description:
      "In Walt Disney Animation Studios’ “Zootopia 2,” detectives Judy Hopps (voiced by Ginnifer Goodwin) and Nick Wilde (voiced by Jason Bateman) find themselves on the twisting trail of a mysterious reptile who arrives in Zootopia and turns the mammal metropolis upside down.",
    genre: "Adventure, Animation, Comedy",
    rating: 5,
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    cover: "au_movies_encanto_reomaori_disneyplus_poster_72c43495.jpeg",
    title: "Encanto Reo Māori",
    description:
      "Walt Disney Animation Studios’ ENCANTO, with all-new songs by award-winner Lin-Manuel Miranda, tells the tale of the Madrigals, an extraordinary family living in a magical house in the Colombian mountains. But when Mirabel, the only ordinary family member, discovers the magic surrounding their home is in danger, she may be her family’s last hope.",
    genre: "Adventure, Animation, Comedy",
    rating: 5,
    price: 100,
  },
];

function getAllMovies() {
  return data;
}

export { getAllMovies };

