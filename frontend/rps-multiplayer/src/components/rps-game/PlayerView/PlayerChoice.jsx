import { useState } from "react";
import ChoiceModal from "../ChoiceModal/ChoiceModal";

function PlayerChoice() {
  // This will be the a button that shows the player the item that they chose, clicking on this button opens the modal from ChoiceModal.jsx

  const [displayModal, setDisplayModal] = useState(false);

  function openModal() {
    setDisplayModal(true);
  }

  return (
    <>
      <button onClick={openModal}>✊</button>
      <ChoiceModal
        displayValue={displayModal}
        setDisplayFunction={setDisplayModal}
      />
    </>
  );
}

export default PlayerChoice;
