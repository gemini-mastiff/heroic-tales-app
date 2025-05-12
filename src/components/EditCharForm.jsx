import styled from "styled-components";
import { useState } from "react";
import TextInput from "./TextInput.jsx";
import FormArr from "./FormArr.jsx";
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
    onSubmit(charDetails);
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
      } else return skill;
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
    const newStats = charDetails.stats;
    const number = Math.floor(value);
    newStats[stat] = number;
    setCharDetails({ ...charDetails, stats: newStats });
  };

  const handleInvChange = (value, index) => {
    const newInventory = charDetails.inventory.map((item, i) => {
      if (i === index) return value;
      else return item;
    });
    setCharDetails({ ...charDetails, inventory: newInventory });
  };

  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
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
          setCharDetails({ ...charDetails, sublass: e.target.value })
        }
      />
      <FormArr name="Skills">
        <button onClick={(e) => handleNewSkill(e)}>+ New Skill</button>
        {charDetails.skills.map((skill) => {
          return (
            <SkillItem key={skill.id}>
              <EditableText
                value={skill.name}
                onChange={(value) => handleSkillName(value, skill.id)}
              />
              <RatingContainer>
                <button
                  disabled={skill.rating <= 1}
                  onClick={(e) =>
                    handleSkillRating(e, skill.rating - 1, skill.id)
                  }
                >
                  -
                </button>
                <p>{skill.rating}</p>
                <button
                  disabled={skill.rating >= 3}
                  onClick={(e) =>
                    handleSkillRating(e, skill.rating + 1, skill.id)
                  }
                >
                  +
                </button>
              </RatingContainer>
              <button onClick={(e) => handelSkillDel(e, skill.id)}>Del</button>
            </SkillItem>
          );
        })}
      </FormArr>
      <FormArr name="Abilities">
        <button onClick={(e) => handleNewAbility(e)}>+ New Ability</button>
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
      </FormArr>
      <div>
        <label>Stats:</label>
        <StatBlock>
          <StatIcon src={healthSvg} alt="Health" />
          <p>Health: </p>
          <EditableText
            value={charDetails.stats.health}
            onChange={(value) => handleStatChange(value, "health")}
          />
        </StatBlock>
        <StatBlock>
          <StatIcon src={hitsSvg} alt="Hits" />
          <p>Hits: </p>
          <EditableText
            value={charDetails.stats.hits}
            onChange={(value) => handleStatChange(value, "hits")}
          />
        </StatBlock>
        <StatBlock>
          <StatIcon src={injurySvg} alt="Injuries" />
          <p>Injuries:</p>
          <EditableText
            value={charDetails.stats.injuries}
            onChange={(value) => handleStatChange(value, "injuries")}
          />
        </StatBlock>
        <StatBlock>
          <StatIcon src={shieldSvg} alt="Armour" />
          <p>Armour: </p>
          <EditableText
            value={charDetails.stats.armour}
            onChange={(value) => handleStatChange(value, "armour")}
          />
        </StatBlock>
        <StatBlock>
          <StatIcon src={magicSvg} alt="Cast" />
          <p>Cast:</p>
          <EditableText
            value={charDetails.stats.cast}
            onChange={(value) => handleStatChange(value, "cast")}
          />
        </StatBlock>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={charDetails.desc}
          onChange={(e) =>
            setCharDetails({ ...charDetails, desc: e.target.value })
          }
        ></textarea>
      </div>
      <FormArr name="Inventory">
        <ul>
          {charDetails.inventory.map((item, index) => {
            return (
              <li key={crypto.randomUUID()}>
                <EditableText
                  value={item}
                  onChange={(value) => handleInvChange(value, index)}
                />
                <button>Del</button>
              </li>
            );
          })}
        </ul>
      </FormArr>
      <input type="submit" />
    </form>
  );
}

function EditableText({ value, onChange }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsEdit(false);
    }
  };

  return (
    <>
      {isEdit ? (
        <input
          autoFocus
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setIsEdit(false)}
          onKeyDown={(e) => handleKeyPress(e)}
        />
      ) : (
        <p onClick={() => setIsEdit(true)}>{value}</p>
      )}
    </>
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
          <input
            type="text"
            value={ability.name}
            onChange={(e) => onNameChange(e.target.value, ability.id)}
          />
        ) : (
          <p>{ability.name}</p>
        )}
        <button onClick={(e) => handleEdit(e)}>
          {isEdit ? "Save" : "Edit"}
        </button>
        <button onClick={(e) => onDel(e, ability.id)}>Del</button>
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
