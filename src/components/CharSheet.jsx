import styled from "styled-components";
import noImgSvg from "../assets/account.svg";
import healthSvg from "../assets/health.svg";
import hitsSvg from "../assets/hit.svg";
import injurySvg from "../assets/injury.svg";
import shieldSvg from "../assets/shield.svg";
import magicSvg from "../assets/magic.svg";

export default function CharSheet({
  char,
  handleSkill,
  skillTotal,
  setEditChar,
}) {
  const disableSkills = skillTotal >= 6;

  return (
    <CharSheetStyled>
      <CharHeader>
        <div>
          <CharName>{char.name}</CharName>
          <CharRole>{`${char.race} ${char.class} (${char.subclass})`}</CharRole>
          <button onClick={() => setEditChar(true)}>Edit</button>
        </div>
        <CharImg src={char.img ? char.img : noImgSvg} alt="" />
      </CharHeader>
      <CharStats>
        <CharSkills>
          <CharHeading>Skills</CharHeading>
          <SkillList>
            {char.skills.map((skill) => (
              <SkillItem key={crypto.randomUUID()}>
                <button
                  onClick={() => handleSkill(skill)}
                  disabled={
                    (disableSkills && !skill.active) ||
                    (skillTotal + skill.rating > 6 && !skill.active)
                  }
                >
                  {skill.active ? "-" : "+"}
                </button>
                <p>{skill.name}</p>
                <p>{skill.rating}</p>
              </SkillItem>
            ))}
          </SkillList>
        </CharSkills>
        <CharAbilities>
          <CharHeading>Abilities</CharHeading>
          {char.abilities.length > 0 ? (
            <ul>
              {char.abilities.map((ability) => (
                <li key={crypto.randomUUID()}>{ability}</li>
              ))}
            </ul>
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

const CharRole = styled.p`
  font-family: "Spectral SC", serif;
  font-size: 1.25rem;
`;

const CharImg = styled.img`
  height: 120px;
  border: 4px solid var(--BG-COLOUR);
`;

const CharStats = styled.div`
  margin-top: 1em;
  display: flex;
  gap: 1em;
`;

const CharHeading = styled.h3`
  font-family: "Spectral SC", serif;
`;

const CharSkills = styled.div`
  flex: 2;
  background-color: var(--MAIN-COLOUR);
`;

const SkillList = styled.ul`
  list-style: none;
`;

const SkillItem = styled.li`
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  gap: 0.5em;
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
