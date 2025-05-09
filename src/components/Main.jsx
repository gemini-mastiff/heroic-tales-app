import styled from "styled-components";
import { useState } from "react";
import rollCalc from "../js/rollCalc.js";
import WidthContainer from "./WidthContainer.jsx";
import RollLog from "./RollLog.jsx";
import CharSheet from "./CharSheet.jsx";
import DiceBox from "./DiceBox.jsx";
import DialogModal from "./DialogModal.jsx";
import EditCharForm from "./EditCharForm.jsx";

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
    let newRollLog;
    if (rollLog.length >= 20) {
      newRollLog = rollLog.slice(1);
    } else newRollLog = rollLog;
    setResults(newResults);
    setRollLog([...newRollLog, newResults]);
  };
  const handleCharEdit = (newCharDetails) => {
    setCharArr(
      charArr.map((char, i) => {
        if (i === currChar) {
          return newCharDetails;
        }
      })
    );
    setEditChar(false);
  };

  console.log(charArr);

  return (
    <MainStyled>
      <WidthContainer>
        <GameGrid>
          <RollLog rollLog={rollLog} />
          <CharDiceContainer>
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
          </CharDiceContainer>
        </GameGrid>
        <DialogModal isOpen={editChar} onClose={setEditChar}>
          <EditCharForm char={charArr[currChar]} onSubmit={handleCharEdit} />
        </DialogModal>
      </WidthContainer>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  background-color: var(--BG-COLOUR);
`;

const GameGrid = styled.div`
  max-height: 955px;
  display: flex;
  align-items: stretch;
  padding: 1em 0;
  gap: 1em;
  margin: auto;
`;

const CharDiceContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const CharSheetContainer = styled.div`
  background-color: var(--MAIN-COLOUR);
  padding: 0.5em;
`;
