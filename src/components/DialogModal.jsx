import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import styled from "styled-components";

export default function DialogModal({ isOpen, onClose, children }) {
  return (
    <Dialog open={isOpen} onClose={() => onClose(false)}>
      <DialogBg />
      <DialogPositioned>{children}</DialogPositioned>
    </Dialog>
  );
}

const DialogBg = styled(DialogBackdrop)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.3;
  z-index: 1000;
`;

const DialogPositioned = styled(DialogPanel)`
  width: 60%;
  max-width: 800px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--MAIN-COLOUR);
  padding: 0.5em;
  z-index: 1000;
`;
