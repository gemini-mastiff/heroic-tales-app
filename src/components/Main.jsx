import styled from "styled-components";
import { useEffect, useState } from "react";
import rollCalc from "../js/rollCalc.js";
import WidthContainer from "./WidthContainer.jsx";
import RollLog from "./RollLog.jsx";
import CharSheet from "./CharSheet.jsx";
import Dropdown from "./Dropdown.jsx";
import DiceBox from "./DiceBox.jsx";
import DialogModal from "./DialogModal.jsx";
import EditCharForm from "./EditCharForm.jsx";

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

const getCurrChar = () => {
  const saved = localStorage.getItem("currChar");
  const parsed = JSON.parse(saved);
  return parsed ? parsed : 0;
};

export default function Main() {
  const [charArr, setCharArr] = useState(getCharArr());
  const [currChar, setCurrChar] = useState(getCurrChar());
  const [editChar, setEditChar] = useState(false);
  const [results, setResults] = useState(false);
  const [rollLog, setRollLog] = useState([]);

  useEffect(() => {
    localStorage.setItem("charArr", JSON.stringify(charArr));
    localStorage.setItem("currChar", JSON.stringify(currChar));
  }, [charArr, currChar]);

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

  const handleNewChar = () => {
    const newId = charArr.length > 0 ? charArr[charArr.length - 1].id + 1 : 0;
    const newChar = {
      id: newId,
      name: "Name",
      race: "Race",
      class: "Class",
      subclass: "Subclass",
      skills: [],
      abilities: [],
      stats: {
        hits: 0,
        health: 5,
        injuries: 0,
        armour: 0,
        cast: 0,
      },
      desc: "Add character's description here!.",
      inventory: [],
      img: null,
    };
    setCharArr([...charArr, newChar]);
    setCurrChar(newId);
  };
  const handleCharEdit = (newCharDetails, id) => {
    setCharArr(
      charArr.map((char) => {
        if (char.id === id) return newCharDetails;
        else return char;
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
              <Dropdown value="Choose Character">
                {charArr.map((char) => {
                  return (
                    <li onClick={() => setCurrChar(char.id)}>{char.name}</li>
                  );
                })}
                <li onClick={handleNewChar}>+ New Character</li>
              </Dropdown>
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
