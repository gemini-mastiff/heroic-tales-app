const initCharArr = [
  {
    id: 0,
    name: "Sir Tomwell",
    race: "Human",
    class: "Ranger",
    subclass: "Hunter",
    skills: [
      { id: 0, name: "Shooting", rating: 2, active: false },
      {
        id: 1,
        name: "Tracking",
        rating: 3,
        active: false,
      },
      {
        id: 2,
        name: "Traps",
        rating: 1,
        active: false,
      },
      { id: 3, name: "Survival", rating: 1, active: false },
    ],
    abilities: [
      {
        id: 0,
        name: "Adaptive",
        desc: "Humans have 1 extra thing they're good at!",
      },
    ],
    stats: {
      hits: 0,
      health: 5,
      injuries: 0,
      armour: 0,
      cast: 0,
    },
    desc: "A hunter from the deadly forests, looking for revenge against his evil brother.",
    inventory: ["Bow", "Quiver of Arrows", "Hunting Knife"],
    img: null,
  },
];

const getCharArr = () => {
  const saved = localStorage.getItem("charArr");
  const parsed = JSON.parse(saved);
  return parsed ? parsed : initCharArr;
};

const getCharId = () => {
  const saved = localStorage.getItem("charId");
  const parsed = JSON.parse(saved);
  return parsed ? parsed : 0;
};

export { getCharArr, getCharId };
