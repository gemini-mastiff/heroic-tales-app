import styled from "styled-components";
import { useState } from "react";
import Button from "./Button.jsx";
import noImgSvg from "../assets/account.svg";
import healthSvg from "../assets/health.svg";
import hitsSvg from "../assets/hit.svg";
import injurySvg from "../assets/injury.svg";
import shieldSvg from "../assets/shield.svg";
import magicSvg from "../assets/magic.svg";

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default function EditCharForm({ char, onSubmit }) {
  const [charDetails, setCharDetails] = useState({ ...char });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(charDetails, charDetails.id);
  };

  const handleNewImg = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const base64 = await toBase64(file);
      setCharDetails({
        ...charDetails,
        img: base64,
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
      <LineBreak />
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
                <RatingButton
                  $small
                  disabled={skill.rating <= 1}
                  onClick={(e) =>
                    handleSkillRating(e, skill.rating - 1, skill.id)
                  }
                >
                  -
                </RatingButton>
                <p>{skill.rating}</p>
                <RatingButton
                  $small
                  disabled={skill.rating >= 3}
                  onClick={(e) =>
                    handleSkillRating(e, skill.rating + 1, skill.id)
                  }
                >
                  +
                </RatingButton>
              </RatingContainer>
              <Button $small onClick={(e) => handelSkillDel(e, skill.id)}>
                Del
              </Button>
            </SkillItem>
          );
        })}
      </div>
      <LineBreak />
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
      <LineBreak />
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
      <LineBreak />
      <div>
        <HeaderContainer>
          <Header htmlFor="description">Description:</Header>
        </HeaderContainer>
        <TextBox
          id="description"
          value={charDetails.desc}
          onChange={(e) =>
            setCharDetails({ ...charDetails, desc: e.target.value })
          }
        ></TextBox>
      </div>
      <LineBreak />
      <div>
        <HeaderContainer>
          <Header>Inventory:</Header>
          <Button $small onClick={(e) => handleNewInvItem(e)}>
            + New Item
          </Button>
        </HeaderContainer>
        <InventoryList>
          {charDetails.inventory.map((item, index) => {
            return (
              <InventoryItem key={index}>
                <StyledInput
                  value={item}
                  onChange={(e) => handleInvChange(e.target.value, index)}
                />
                <Button $small onClick={(e) => handleInvDel(e, index)}>
                  Del
                </Button>
              </InventoryItem>
            );
          })}
        </InventoryList>
      </div>
      <LineBreak />
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
    <AbilityItemStyled>
      <AbilityHeader>
        {isEdit ? (
          <StyledInput
            type="text"
            value={ability.name}
            onChange={(e) => onNameChange(e.target.value, ability.id)}
          />
        ) : (
          <AbilityName>{ability.name}</AbilityName>
        )}
        <Button $small onClick={(e) => handleEdit(e)}>
          {isEdit ? "Save" : "Edit"}
        </Button>
        <Button $small onClick={(e) => onDel(e, ability.id)}>
          Del
        </Button>
      </AbilityHeader>
      {isEdit ? (
        <TextBox
          value={ability.desc}
          onChange={(e) => onDescChange(e.target.value, ability.id)}
        ></TextBox>
      ) : (
        <p>{ability.desc}</p>
      )}
    </AbilityItemStyled>
  );
}

const FormStyled = styled.form`
  max-height: 80vh;
  overflow-y: auto;
  padding: 1em;
`;
const LineBreak = styled.hr`
  margin: 1em 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75em;
`;
const Header = styled.label`
  font-family: "Spectral SC", serif;
  font-size: 1.5rem;
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
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
  grid-template-columns: 1fr auto auto;
  gap: 1em;
  margin: 0.5em 0;
`;
const RatingContainer = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
`;
const RatingButton = styled(Button)`
  height: 25px;
  width: 25px;
  padding: 0;
`;

const AbilityItemStyled = styled.div`
  margin-bottom: 0.5em;
`;
const AbilityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin-bottom: 0.5em;
`;
const AbilityName = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: underline;
`;

const StatBlock = styled.div`
  display: grid;
  grid-template-columns: 30px 80px 50px;
  gap: 0.5em;
  margin: 0.25em 0;
`;
const StatIcon = styled.img`
  width: 30px;
`;

const TextBox = styled.textarea`
  background-color: #fff;
  color: var(--BG-COLOUR);
  font-family: "DM Sans", sans-serif;
  font-size: 1rem;
  width: 93.5%;
  field-sizing: content;
  border: none;
  border-radius: 1em;
  padding: 0.5em 0.75em;
  resize: none;
`;

const InventoryList = styled.ul`
  list-style: none;
`;
const InventoryItem = styled.li`
  width: 100%;
  display: flex;
  gap: 0.5em;
  margin: 0.5em 0;
`;
