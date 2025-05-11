import styled from "styled-components";
import { useState } from "react";
import TextInput from "./TextInput.jsx";
import FormArr from "./FormArr.jsx";

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
    const newId = newSkills[newSkills.length - 1].id + 1;
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
        {charDetails.abilities.map((ability) => {
          return (
            <AbilityItem
              key={ability.id}
              ability={ability}
              onNameChange={handleAbilityName}
              onDescChange={handleAbilityDesc}
            />
          );
        })}
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

function AbilityItem({ ability, onNameChange, onDescChange }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  if (isEdit) {
    return (
      <div>
        <AbilityHeader>
          <input
            type="text"
            value={ability.name}
            onChange={(e) => onNameChange(e.target.value, ability.id)}
          />
          <button onClick={(e) => handleEdit(e)}>Save</button>
          <button>Del</button>
        </AbilityHeader>
        <textarea
          value={ability.desc}
          onChange={(e) => onDescChange(e.target.value, ability.id)}
        ></textarea>
      </div>
    );
  }

  return (
    <div key={ability.id}>
      <AbilityHeader>
        <p>{ability.name}</p>
        <button onClick={(e) => handleEdit(e)}>Edit</button>
        <button>Del</button>
      </AbilityHeader>
      <p>{ability.desc}</p>
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
