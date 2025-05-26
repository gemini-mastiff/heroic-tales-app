import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { getCharArr, getCharId } from "../js/storageMethods.js";
import rollCalc from "../js/rollCalc.js";
import WidthContainer from "./WidthContainer.jsx";
import RollLog from "./RollLog.jsx";
import CharSheet from "./CharSheet.jsx";
import Dropdown from "./Dropdown.jsx";
import DiceBox from "./DiceBox.jsx";
import DialogModal from "./DialogModal.jsx";
import EditCharForm from "./EditCharForm.jsx";
import DelCharModal from "./DelCharModal.jsx";

export default function Main() {
  const [charArr, setCharArr] = useState(getCharArr());
  const [charId, setCharId] = useState(getCharId());
  const [charAccordion, setCharAccordion] = useState(false);
  const [editChar, setEditChar] = useState(false);
  const [delChar, setDelChar] = useState(false);
  const [results, setResults] = useState(false);
  const [rollLog, setRollLog] = useState([]);

  const heightRef = useRef(null);
  const [gridHeight, setGridHeight] = useState(null);

  useEffect(() => {
    setGridHeight(heightRef.current.clientHeight);
  }, [charAccordion]);

  useEffect(() => {
    localStorage.setItem("charArr", JSON.stringify(charArr));
    localStorage.setItem("charId", JSON.stringify(charId));
  }, [charArr, charId]);

  const currChar = charArr.find((char) => char.id === charId);

  const skillTotal = currChar
    ? currChar.skills
        .filter((skill) => skill.active)
        .reduce((acc, skill) => acc + skill.rating, 0)
    : 0;

  const handleSkill = (skill) => {
    setResults(false);
    setCharArr(
      charArr.map((char) => {
        if (char.id === charId) {
          char.skills.map((skillItem) => {
            if (skillItem.name === skill.name) {
              skill.active = !skill.active;
              return skill;
            }
          });
          return char;
        } else return char;
      })
    );
  };
  const resetSkills = () => {
    setResults(false);
    setCharArr(
      charArr.map((char) => {
        char.skills.map((skill) => {
          skill.active = false;
          return skill;
        });
        return char;
      })
    );
  };

  const handleResults = (checkNum) => {
    const newResults = rollCalc(checkNum + 1, skillTotal);
    newResults["char"] = currChar.name;
    let newRollLog;
    if (rollLog.length >= 10) {
      newRollLog = rollLog.slice(1);
    } else newRollLog = rollLog;
    setResults(newResults);
    setRollLog([...newRollLog, newResults]);
  };

  const handleNewChar = () => {
    const newId = charArr.length > 0 ? charArr[charArr.length - 1].id + 1 : 0;
    const newChar = {
      id: newId,
      name: "New Character",
      race: "Race",
      class: "Class",
      subclass: "Subclass",
      skills: [
        { id: 0, name: "New Skill", rating: 2, active: false },
        { id: 1, name: "New Skill", rating: 1, active: false },
        { id: 2, name: "New Skill", rating: 1, active: false },
        { id: 3, name: "New Skill", rating: 1, active: false },
      ],
      abilities: [
        {
          id: 0,
          name: "New Ability",
          desc: "Enter a description here!",
        },
      ],
      stats: {
        hits: 0,
        health: 5,
        injuries: 0,
        armour: 0,
        cast: 0,
      },
      desc: "",
      inventory: [],
      img: null,
    };
    setCharArr([...charArr, newChar]);
    setCharId(newId);
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
  const handleCharAccordion = (e) => {
    e.preventDefault();
    setCharAccordion(!charAccordion);
  };
  const handleCharChange = (id) => {
    setCharId(id);
    resetSkills();
  };
  const handleCharDel = (e, id) => {
    e.preventDefault();
    setDelChar(false);
    setCharArr(charArr.filter((char) => char.id !== id));
    setCharId(charArr.length > 0 ? charArr[0].id : 0);
  };

  return (
    <MainStyled>
      <WidthContainer>
        <GameGrid>
          <RollLog rollLog={rollLog} height={`${gridHeight}px`} />
          <CharDiceContainer>
            <InnerCharDiceContainer ref={heightRef}>
              <CharSheetContainer>
                <Dropdown value="Choose Character">
                  {charArr.map((char) => {
                    return (
                      <DropdownItem
                        key={char.id}
                        onClick={() => handleCharChange(char.id)}
                      >
                        {char.name}
                      </DropdownItem>
                    );
                  })}
                  <DropdownItem onClick={handleNewChar}>
                    + New Character
                  </DropdownItem>
                </Dropdown>
                {currChar ? (
                  <CharSheet
                    char={currChar}
                    handleSkill={handleSkill}
                    skillTotal={skillTotal}
                    setEditChar={setEditChar}
                    setDelChar={setDelChar}
                    handleCharAccordion={handleCharAccordion}
                    isOpen={charAccordion}
                  />
                ) : (
                  "Add a character!"
                )}
              </CharSheetContainer>
              <DiceBox
                skillTotal={skillTotal}
                results={results}
                resetSkills={resetSkills}
                handleResults={handleResults}
                setResults={setResults}
              />
            </InnerCharDiceContainer>
          </CharDiceContainer>
        </GameGrid>
        <DialogModal isOpen={editChar} onClose={setEditChar}>
          <EditCharForm char={currChar} onSubmit={handleCharEdit} />
        </DialogModal>
        {currChar && (
          <DialogModal isOpen={delChar} onClose={setDelChar}>
            <DelCharModal
              char={currChar}
              setDelChar={setDelChar}
              handleCharDel={handleCharDel}
            />
          </DialogModal>
        )}
      </WidthContainer>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  background-color: var(--BG-COLOUR);
`;

const GameGrid = styled.div`
  display: flex;
  align-items: stretch;
  padding: 1em 0;
  gap: 1em;
  margin: auto;
`;

const CharDiceContainer = styled.div`
  flex: 2;
`;

const InnerCharDiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const CharSheetContainer = styled.div`
  background-color: var(--MAIN-COLOUR);
  padding: 0.5em;
`;

const DropdownItem = styled.li`
  margin: 0.2em;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
