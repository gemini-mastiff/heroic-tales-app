import styled from "styled-components";

export default function RollLog({ results }) {
  return (
    <RollLogContainer>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi unde
      consequuntur a, doloremque voluptates excepturi hic natus? Ad reiciendis
      soluta perferendis pariatur fuga at aspernatur, praesentium quaerat, rerum
      culpa aliquam.
    </RollLogContainer>
  );
}

const RollLogContainer = styled.div`
  grid-row: 1/3;
  background-color: var(--MAIN-COLOUR);
  padding: 0.5em;
`;
