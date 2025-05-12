import { useState } from "react";

export default function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={(e) => handleOpen(e)}>Dropdown</button>
      {isOpen && <ul onClick={() => setIsOpen(false)}>{children}</ul>}
    </div>
  );
}
