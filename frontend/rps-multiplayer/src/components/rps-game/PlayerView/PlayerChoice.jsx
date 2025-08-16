import { useState } from "react";
import ChoiceModal from "../ChoiceModal/ChoiceModal";

function PlayerChoice() {
  // This will be the a button that shows the player the item that they chose, clicking on this button opens the modal from ChoiceModal.jsx

  const [displayModal, setDisplayModal] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState("✊"); // We can use this variable for other logics, and we can easily change it too. It will be the textContent of the button that opens the modal

  function openModal() {
    setDisplayModal(true);
  }

  return (
    <>
      {/* the default item will be a rock*/}
      <button onClick={openModal}>{chosenEmoji}</button>

      <ChoiceModal
        displayValue={displayModal}
        setDisplayFunction={setDisplayModal}
        setEmojiFunction={setChosenEmoji}
      />
    </>
  );
}

export default PlayerChoice;
