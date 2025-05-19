import styled from "styled-components";
import { useState } from "react";
import noImgSvg from "../assets/account.svg";
import healthSvg from "../assets/health.svg";
import hitsSvg from "../assets/hit.svg";
import injurySvg from "../assets/injury.svg";
import shieldSvg from "../assets/shield.svg";
import magicSvg from "../assets/magic.svg";
import Button from "./Button.jsx";

export default function CharSheet({
  char,
  handleSkill,
  skillTotal,
  setEditChar,
  setDelChar,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const disableSkills = skillTotal >= 6;

  const handleAccordion = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <CharSheetStyled>
      <CharHeader>
        <div>
          <CharName>{char.name}</CharName>
          <CharHeading>{`${char.race} ${char.class} (${char.subclass})`}</CharHeading>
          <HeaderButtons>
            <Button $small onClick={() => setEditChar(true)}>
              Edit
            </Button>
            <Button $small onClick={() => setDelChar(true)}>
              Del
            </Button>
          </HeaderButtons>
        </div>
        <CharImg src={char.img ? char.img : noImgSvg} alt="" />
      </CharHeader>
      <CharStats>
        <CharSkills>
          <CharHeading>Skills</CharHeading>
          {char.skills.length > 0 ? (
            <List>
              {char.skills.map((skill) => (
                <SkillItem key={crypto.randomUUID()}>
                  <SkillButton
                    onClick={() => handleSkill(skill)}
                    disabled={
                      (disableSkills && !skill.active) ||
                      (skillTotal + skill.rating > 6 && !skill.active)
                    }
                  >
                    {skill.active ? "-" : "+"}
                  </SkillButton>
                  <p>{skill.name}</p>
                  <p>{skill.rating}</p>
                </SkillItem>
              ))}
            </List>
          ) : (
            "Add some skills!"
          )}
        </CharSkills>
        <CharAbilities>
          <CharHeading>Abilities</CharHeading>
          {char.abilities.length > 0 ? (
            <List>
              {char.abilities.map((ability) => (
                <li key={crypto.randomUUID()}>{ability.name}</li>
              ))}
            </List>
          ) : (
            <p>Add some abilities!</p>
          )}
        </CharAbilities>
        <CharNums>
          <CharNumRow>
            <p>{char.stats.health}</p>
            <NumIcon src={healthSvg} alt="Health" />
          </CharNumRow>
          <CharNumRow>
            <p>{char.stats.hits}</p>
            <NumIcon src={hitsSvg} alt="Hits" />
          </CharNumRow>
          <CharNumRow>
            <p>{char.stats.injuries}</p>
            <NumIcon src={injurySvg} alt="Injuries" />
          </CharNumRow>
          <CharNumRow>
            <p>{char.stats.armour}</p>
            <NumIcon src={shieldSvg} alt="Armour" />
          </CharNumRow>
          <CharNumRow>
            <p>{char.stats.cast}</p>
            <NumIcon src={magicSvg} alt="Cast" />
          </CharNumRow>
        </CharNums>
      </CharStats>
      {isOpen && (
        <CharInfo>
          {char.desc && (
            <CharDesc>
              <CharHeading>Description</CharHeading>
              <p>{char.desc}</p>
            </CharDesc>
          )}
          {char.inventory.length > 0 && (
            <CharInv>
              <CharHeading>Inventory</CharHeading>
              <InvList>
                {char.inventory.map((item) => {
                  return <InvItem key={crypto.randomUUID()}>{item}</InvItem>;
                })}
              </InvList>
            </CharInv>
          )}
        </CharInfo>
      )}
      <Button $small onClick={(e) => handleAccordion(e)}>
        {isOpen ? "Show Less" : "Show More"}
      </Button>
    </CharSheetStyled>
  );
}

const CharSheetStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const CharHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const CharName = styled.h2`
  font-family: "Spectral SC", serif;
  font-size: 1.75rem;
  font-weight: bold;
  text-decoration: underline;
`;
const HeaderButtons = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 0.25em;
`;
const CharImg = styled.img`
  height: 120px;
  width: 120px;
  object-fit: cover;
  border: 4px solid var(--BG-COLOUR);
`;

const CharHeading = styled.h3`
  font-family: "Spectral SC", serif;
  font-size: 1.4rem;
`;

const CharStats = styled.div`
  margin-top: 1em;
  display: flex;
  gap: 1em;
`;
const CharSkills = styled.div`
  flex: 2;
  background-color: var(--MAIN-COLOUR);
`;

const List = styled.ul`
  list-style: none;
`;
const SkillItem = styled.li`
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  align-items: center;
  gap: 0.75em;
`;
const SkillButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  background-color: #7f5af0;
  color: var(--PRIMARY-TEXT);
  font-family: inherit;
  font-size: 1.2rem;
  border: none;
  border-radius: 100px;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
const CharAbilities = styled.div`
  flex: 2;
  background-color: var(--MAIN-COLOUR);
`;

const CharNums = styled.div``;
const CharNumRow = styled.div`
  display: flex;
  gap: 0.5em;
`;
const NumIcon = styled.img`
  width: 30px;
`;

const CharInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const CharDesc = styled.div``;
const CharInv = styled.div``;
const InvList = styled.ul`
  list-style: inside square;
  margin: 0;
`;
const InvItem = styled.li``;
