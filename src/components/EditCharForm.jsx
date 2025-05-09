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
          return <SkillItem skill={skill} />;
        })}
      </FormArr>
      <input type="submit" />
    </form>
  );
}

function SkillItem({ skill, onChange }) {
  return <div className="char_skill">{skill.name}</div>;
}
