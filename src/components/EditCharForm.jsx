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

  const handleSkillName = (value, id) => {
    const newSkills = charDetails.skills.map((skill) => {
      if (id === skill.id) {
        skill.name = value;
        return skill;
      } else return skill;
    });
    setCharDetails({ ...charDetails, skills: newSkills });
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
        name="Sublass"
        value={charDetails.subclass}
        onChange={(e) =>
          setCharDetails({ ...charDetails, sublass: e.target.value })
        }
      />
      <FormArr name="Skills">
        {char.skills.map((skill) => {
          return (
            <SkillItem key={skill.id}>
              <EditableText
                value={skill.name}
                onChange={(value) => handleSkillName(value, skill.id)}
              />
              <RatingContainer>
                <button>-</button>
                <p>{skill.rating}</p>
                <button>+</button>
              </RatingContainer>
              <button>Del</button>
            </SkillItem>
          );
        })}
      </FormArr>
      <input type="submit" />
    </form>
  );
}

function EditableText({ value, onChange }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit ? (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setIsEdit(false)}
        />
      ) : (
        <p onClick={() => setIsEdit(true)}>{value}</p>
      )}
    </>
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
