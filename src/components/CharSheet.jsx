import styled from "styled-components";
import noImgSvg from "../assets/account.svg";
import healthSvg from "../assets/health.svg";
import hitsSvg from "../assets/hit.svg";
import injurySvg from "../assets/injury.svg";
import shieldSvg from "../assets/shield.svg";
import magicSvg from "../assets/magic.svg";

export default function CharSheet({ char }) {
  return (
    <div>
      <CharHeader>
        <div>
          <CharName>{char.name}</CharName>
          <CharRole>{`${char.race} ${char.class} (${char.subclass})`}</CharRole>
        </div>
        <CharImg src={char.img ? char.img : noImgSvg} alt="" />
      </CharHeader>
      <CharStats>
        <CharSkills>
          <CharHeading>Skills</CharHeading>
          <SkillList>
            {char.skills.map((skill) => (
              <SkillItem key={skill.name}>
                <button>+</button>
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
                <li>{ability}</li>
              ))}
            </ul>
          ) : (
            <p>Add some abilities!</p>
          )}
        </CharAbilities>
        <CharNums>
          <CharNumRow>
            <NumIcon src={healthSvg} alt="Health" />
            <p>{char.stats.health}</p>
          </CharNumRow>
          <CharNumRow>
            <NumIcon src={hitsSvg} alt="Hits" />
            <p>{char.stats.hits}</p>
          </CharNumRow>
          <CharNumRow>
            <NumIcon src={injurySvg} alt="Injuries" />
            <p>{char.stats.injuries}</p>
          </CharNumRow>
          <CharNumRow>
            <NumIcon src={shieldSvg} alt="Armour" />
            <p>{char.stats.armour}</p>
          </CharNumRow>
          <CharNumRow>
            <NumIcon src={magicSvg} alt="Armour" />
            <p>{char.stats.cast}</p>
          </CharNumRow>
        </CharNums>
      </CharStats>
    </div>
  );
}

const CharHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CharName = styled.h2`
  font-family: "Spectral SC", serif;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: underline;
`;

const CharRole = styled.p`
  font-family: "Spectral SC", serif;
  font-size: 1.5rem;
`;

const CharImg = styled.img`
  height: 120px;
  border: 4px solid var(--BG-COLOUR);
`;

const CharStats = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 1em;
`;

const CharHeading = styled.h3`
  font-family: "Spectral SC", serif;
`;

const CharSkills = styled.div``;

const SkillList = styled.ul`
  list-style: none;
`;

const SkillItem = styled.li`
  display: grid;
  grid-template-columns: 20px 1fr 20px;
`;

const CharAbilities = styled.div``;

const CharNums = styled.div``;

const CharNumRow = styled.div`
  display: flex;
`;
const NumIcon = styled.img`
  width: 30px;
`;
