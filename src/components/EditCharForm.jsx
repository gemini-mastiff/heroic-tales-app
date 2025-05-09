import styled from "styled-components";
import TextInput from "./TextInput.jsx";
import { useState } from "react";

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
      <input type="submit" />
    </form>
  );
}
