import styled from "styled-components";
import { useState } from "react";
import Button from "./Button.jsx";
import noImgSvg from "../assets/account.svg";
import healthSvg from "../assets/health.svg";
import hitsSvg from "../assets/hit.svg";
import injurySvg from "../assets/injury.svg";
import shieldSvg from "../assets/shield.svg";
import magicSvg from "../assets/magic.svg";

export default function EditCharForm({ char, onSubmit }) {
  const [charDetails, setCharDetails] = useState({ ...char });

  console.log(charDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(charDetails, charDetails.id);
  };

  const handleNewImg = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCharDetails({
        ...charDetails,
        img: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleNewSkill = (e) => {
    e.preventDefault();
    const newSkills = charDetails.skills;
    const newId =
      newSkills.length > 0 ? newSkills[newSkills.length - 1].id + 1 : 0;
    newSkills.push({ id: newId, name: "New Skill", rating: 1, active: false });
    setCharDetails({ ...charDetails, skills: newSkills });
  };
  const handleSkillName = (value, id) => {
    const newSkills = charDetails.skills.map((skill) => {
      if (id === skill.id) {
        skill.name = value;
        return skill;
      } else {
        return skill;
      }
    });
    setCharDetails({ ...charDetails, skills: newSkills });
  };
  const handleSkillRating = (e, newRating, id) => {
    e.preventDefault();
    const newSkills = charDetails.skills.map((skill) => {
      if (skill.id === id) {
        skill.rating = newRating;
        return skill;
      } else return skill;
    });
    setCharDetails({ ...charDetails, skills: newSkills });
  };
  const handelSkillDel = (e, id) => {
    e.preventDefault();
    const newSkills = charDetails.skills.filter((skill) => skill.id !== id);
    setCharDetails({ ...charDetails, skills: newSkills });
  };

  const handleNewAbility = (e) => {
    e.preventDefault();
    const newAbilities = charDetails.abilities;
    const newId =
      newAbilities.length > 0
        ? newAbilities[newAbilities.length - 1].id + 1
        : 0;
    newAbilities.push({
      id: newId,
      name: "New Ability",
      desc: "Enter a description here!",
    });
    setCharDetails({ ...charDetails, abilities: newAbilities });
  };
  const handleAbilityName = (value, id) => {
    const newAbilities = charDetails.abilities.map((ability) => {
      if (ability.id === id) {
        ability.name = value;
        return ability;
      }
    });
    setCharDetails({ ...charDetails, abilities: newAbilities });
  };
  const handleAbilityDesc = (value, id) => {
    const newAbilities = charDetails.abilities.map((ability) => {
      if (ability.id === id) {
        ability.desc = value;
        return ability;
      }
    });
    setCharDetails({ ...charDetails, abilities: newAbilities });
  };
  const handleAbilityDel = (e, id) => {
    e.preventDefault();
    const newAbilities = charDetails.abilities.filter(
      (ability) => ability.id !== id
    );
    setCharDetails({ ...charDetails, abilities: newAbilities });
  };

  const handleStatChange = (value, stat) => {
    let newStats = charDetails.stats;
    const number = Math.floor(value);
    newStats[stat] = number;
    setCharDetails({ ...charDetails, stats: newStats });
  };

  const handleNewInvItem = (e) => {
    e.preventDefault();
    setCharDetails({
      ...charDetails,
      inventory: [...charDetails.inventory, "New Item"],
    });
  };
  const handleInvChange = (value, index) => {
    const newInventory = charDetails.inventory.map((item, i) => {
      if (i === index) return value;
      else return item;
    });
    setCharDetails({ ...charDetails, inventory: newInventory });
  };
  const handleInvDel = (e, index) => {
    e.preventDefault();
    const newInv = charDetails.inventory;
    newInv.splice(index, 1);
    setCharDetails({
      ...charDetails,
      inventory: newInv,
    });
  };

  return (
    <FormStyled action="" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <HeaderContainer>
          <Header>Info:</Header>
        </HeaderContainer>
        <InfoSection>
          <div>
            <TextInput
              name="Name"
              value={charDetails.name}
              onChange={(e) =>
                setCharDetails({ ...charDetails, name: e.target.value })
              }
            />
            <TextInput
              name="Race"
              value={charDetails.race}
              onChange={(e) =>
                setCharDetails({ ...charDetails, race: e.target.value })
              }
            />
            <TextInput
              name="Class"
              value={charDetails.class}
              onChange={(e) =>
                setCharDetails({ ...charDetails, class: e.target.value })
              }
            />
            <TextInput
              name="Subclass"
              value={charDetails.subclass}
              onChange={(e) =>
                setCharDetails({ ...charDetails, subclass: e.target.value })
              }
            />
          </div>
          <ImgSection>
            <CharImg
              src={charDetails.img ? charDetails.img : noImgSvg}
              alt=""
            />
            <ImgInput
              id="img"
              type="file"
              accept="image/*"
              onChange={handleNewImg}
            />
            <ImgInputLabel htmlFor="img">Choose File</ImgInputLabel>
          </ImgSection>
        </InfoSection>
      </div>
      <div>
        <HeaderContainer>
          <Header>Skills:</Header>
          <Button $small onClick={(e) => handleNewSkill(e)}>
            + New Skill
          </Button>
        </HeaderContainer>
        {charDetails.skills.map((skill) => {
          return (
            <SkillItem key={skill.id}>
              <StyledInput
                value={skill.name}
                onChange={(e) => handleSkillName(e.target.value, skill.id)}
              />
              <RatingContainer>
                <Button
                  $small
                  disabled={skill.rating <= 1}
                  onClick={(e) =>
                    handleSkillRating(e, skill.rating - 1, skill.id)
                  }
                >
                  -
                </Button>
                <p>{skill.rating}</p>
                <Button
                  $small
                  disabled={skill.rating >= 3}
                  onClick={(e) =>
                    handleSkillRating(e, skill.rating + 1, skill.id)
                  }
                >
                  +
                </Button>
              </RatingContainer>
              <Button $small onClick={(e) => handelSkillDel(e, skill.id)}>
                Del
              </Button>
            </SkillItem>
          );
        })}
      </div>
      <div>
        <HeaderContainer>
          <Header>Abilities:</Header>
          <Button $small onClick={(e) => handleNewAbility(e)}>
            + New Ability
          </Button>
        </HeaderContainer>
        {charDetails.abilities.map((ability) => {
          return (
            <AbilityItem
              key={ability.id}
              ability={ability}
              onNameChange={handleAbilityName}
              onDescChange={handleAbilityDesc}
              onDel={handleAbilityDel}
            />
          );
        })}
      </div>
      <div>
        <HeaderContainer>
          <Header>Stats:</Header>
        </HeaderContainer>
        <StatBlock>
          <StatIcon src={healthSvg} alt="Health" />
          <p>Health: </p>
          <StyledInput
            type="number"
            value={charDetails.stats.health}
            onChange={(e) => handleStatChange(e.target.value, "health")}
          />
        </StatBlock>
        <StatBlock>
          <StatIcon src={hitsSvg} alt="Hits" />
          <p>Hits: </p>
          <StyledInput
            type="number"
            value={charDetails.stats.hits}
            onChange={(e) => handleStatChange(e.target.value, "hits")}
          />
        </StatBlock>
        <StatBlock>
          <StatIcon src={injurySvg} alt="Injuries" />
          <p>Injuries:</p>
          <StyledInput
            type="number"
            value={charDetails.stats.injuries}
            onChange={(e) => handleStatChange(e.target.value, "injuries")}
          />
        </StatBlock>
        <StatBlock>
          <StatIcon src={shieldSvg} alt="Armour" />
          <p>Armour: </p>
          <StyledInput
            type="number"
            value={charDetails.stats.armour}
            onChange={(e) => handleStatChange(e.target.value, "armour")}
          />
        </StatBlock>
        <StatBlock>
          <StatIcon src={magicSvg} alt="Cast" />
          <p>Cast:</p>
          <StyledInput
            type="number"
            value={charDetails.stats.cast}
            onChange={(e) => handleStatChange(e.target.value, "cast")}
          />
        </StatBlock>
      </div>
      <div>
        <HeaderContainer>
          <Header htmlFor="description">Description:</Header>
        </HeaderContainer>
        <textarea
          id="description"
          value={charDetails.desc}
          onChange={(e) =>
            setCharDetails({ ...charDetails, desc: e.target.value })
          }
        ></textarea>
      </div>
      <div>
        <HeaderContainer>
          <Header>Inventory:</Header>
          <Button $small onClick={(e) => handleNewInvItem(e)}>
            + New Item
          </Button>
        </HeaderContainer>
        <ul>
          {charDetails.inventory.map((item, index) => {
            return (
              <li key={index}>
                <StyledInput
                  value={item}
                  onChange={(e) => handleInvChange(e.target.value, index)}
                />
                <Button $small onClick={(e) => handleInvDel(e, index)}>
                  Del
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
      <Button $small type="submit">
        Submit
      </Button>
    </FormStyled>
  );
}

function TextInput({ name, value, onChange }) {
  return (
    <InputDiv>
      <InputLabel htmlFor={name}>{name}:</InputLabel>
      <StyledInput type="text" id={name} value={value} onChange={onChange} />
    </InputDiv>
  );
}

function AbilityItem({ ability, onNameChange, onDescChange, onDel }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  return (
    <div key={ability.id}>
      <AbilityHeader>
        {isEdit ? (
          <StyledInput
            type="text"
            value={ability.name}
            onChange={(e) => onNameChange(e.target.value, ability.id)}
          />
        ) : (
          <p>{ability.name}</p>
        )}
        <Button $small onClick={(e) => handleEdit(e)}>
          {isEdit ? "Save" : "Edit"}
        </Button>
        <Button $small onClick={(e) => onDel(e, ability.id)}>
          Del
        </Button>
      </AbilityHeader>
      {isEdit ? (
        <textarea
          value={ability.desc}
          onChange={(e) => onDescChange(e.target.value, ability.id)}
        ></textarea>
      ) : (
        <p>{ability.desc}</p>
      )}
    </div>
  );
}

const FormStyled = styled.form`
  max-height: 80vh;
  overflow-y: auto;
  padding: 1em;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em 0;
`;
const Header = styled.label`
  font-family: "Spectral SC", serif;
  font-size: 1.5rem;
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputLabel = styled.label`
  font-size: 0.9rem;
  margin-left: 0.6em;
`;
const StyledInput = styled.input`
  background-color: #fff;
  color: var(--BG-COLOUR);
  font-family: "DM Sans", sans-serif;
  font-size: 1rem;
  border: none;
  border-radius: 100px;
  padding: 0.25em 0.5em;
`;

const ImgSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8em;
`;
const CharImg = styled.img`
  height: 120px;
  width: 120px;
  object-fit: cover;
  border: 4px solid var(--BG-COLOUR);
`;
const ImgInput = styled.input`
  display: none;
`;
const ImgInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7f5af0;
  color: var(--PRIMARY-TEXT);
  font-family: inherit;
  font-size: 0.8em;
  border: none;
  padding: 0.5em 1em;
  border-radius: 100px;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const SkillItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 40px;
`;

const RatingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const AbilityHeader = styled.div`
  display: flex;
  gap: 1em;
`;

const StatBlock = styled.div`
  display: flex;
  gap: 0.5em;
`;

const StatIcon = styled.img`
  width: 30px;
`;
