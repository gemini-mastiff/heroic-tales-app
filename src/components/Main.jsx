import styled from "styled-components";
import { useState } from "react";
import rollCalc from "../js/rollCalc.js";
import WidthContainer from "./WidthContainer.jsx";
import RollLog from "./RollLog.jsx";
import CharSheet from "./CharSheet.jsx";
import DiceBox from "./DiceBox.jsx";
import DialogModal from "./DialogModal.jsx";

const initCharArr = [
  {
    name: "Sir Tomwell",
    race: "Human",
    class: "Ranger",
    subclass: "Hunter",
    skills: [
      { name: "Shooting", rating: 2, active: false },
      {
        name: "Tracking",
        rating: 3,
        active: false,
      },
      {
        name: "Traps",
        rating: 1,
        active: false,
      },
      { name: "Survival", rating: 1, active: false },
    ],
    abilities: [],
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

export default function Main() {
  const [charArr, setCharArr] = useState(initCharArr);
  const [currChar, setCurrChar] = useState(0);
  const [editChar, setEditChar] = useState(false);
  const [results, setResults] = useState(false);
  const [rollLog, setRollLog] = useState([]);

  console.log(rollLog);

  const skillTotal = charArr[currChar].skills
    .filter((skill) => skill.active)
    .reduce((acc, skill) => acc + skill.rating, 0);

  const handleSkill = (skill) => {
    setResults(false);
    setCharArr(
      charArr.map((char) => {
        if (char.name === charArr[currChar].name) {
          char.skills.map((skillItem) => {
            if (skillItem.name === skill.name) {
              skill.active = !skill.active;
              return skill;
            }
          });
          return char;
        }
      })
    );
  };
  const resetSkills = () => {
    setResults(false);
    setCharArr(
      charArr.map((char) => {
        if (char.name === charArr[currChar].name) {
          char.skills.map((skill) => {
            skill.active = false;
            return skill;
          });
          return char;
        }
      })
    );
  };
  const handleResults = (checkNum) => {
    const newResults = rollCalc(checkNum + 1, skillTotal);
    setResults(newResults);
    setRollLog([...rollLog, newResults]);
  };

  return (
    <MainStyled>
      <WidthContainer>
        <GameGrid>
          <RollLog rollLog={rollLog} />
          <CharSheetContainer>
            <CharSheet
              char={charArr[currChar]}
              handleSkill={handleSkill}
              skillTotal={skillTotal}
              setEditChar={setEditChar}
            />
          </CharSheetContainer>
          <DiceBox
            skillTotal={skillTotal}
            results={results}
            resetSkills={resetSkills}
            handleResults={handleResults}
            setResults={setResults}
          />
        </GameGrid>
        <DialogModal isOpen={editChar} onClose={setEditChar} />
      </WidthContainer>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  background-color: var(--BG-COLOUR);
  display: flex;
`;

const GameGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 1fr;
  padding: 1em 0;
  gap: 1em;
`;

const CharSheetContainer = styled.div`
  background-color: var(--MAIN-COLOUR);
  padding: 0.5em;
`;
