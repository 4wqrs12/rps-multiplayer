import { useState } from "react";
import ButtonOption from "./ButtonOption";

function ChoiceModal({ displayValue, setDisplayFunction, setEmojiFunction }) {
  // This will be a modal where the player can change between the rock, paper, or scissor option
  // For the "Choose" button, do: "Choose: Rock", or "Choose: Scissors" depending on the player's choice

  const [playerChoice, setPlayerChoice] = useState({
    name: "rock",
    emoji: "✊",
  });

  function closeModal() {
    setDisplayFunction(false);
    setEmojiFunction(playerChoice.emoji);
  }

  function handleOptionClick(emojiInfo) {
    setPlayerChoice({
      ...playerChoice,
      name: emojiInfo.name,
      emoji: emojiInfo.emoji,
    });
  }

  return (
    <div
      className="choice-modal"
      style={{ display: displayValue ? "block" : "none" }}
    >
      <h1>Choose an item</h1>
      <ButtonOption
        itemEmoji={"✊"}
        itemName={"rock"}
        onClickFunction={handleOptionClick}
      />
      <ButtonOption
        itemEmoji={"🖐️"}
        itemName={"paper"}
        onClickFunction={handleOptionClick}
      />
      <ButtonOption
        itemEmoji={"✌️"}
        itemName={"scissor"}
        onClickFunction={handleOptionClick}
      />
      <button onClick={closeModal}>Choose: "{playerChoice.name}"</button>
    </div>
  );
}

export default ChoiceModal;
