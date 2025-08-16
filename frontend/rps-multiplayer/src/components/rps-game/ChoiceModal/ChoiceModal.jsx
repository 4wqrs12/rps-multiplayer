import ButtonOption from "./ButtonOption";

function ChoiceModal({ displayValue, setDisplayFunction }) {
  // This will be a modal where the player can change between the rock, paper, or scissor option
  // For the "Choose" button, do: "Choose: Rock", or "Choose: Scissors" depending on the player's choice

  function closeModal() {
    setDisplayFunction(false);
  }

  return (
    <div
      className="choice-modal"
      style={{ display: displayValue ? "block" : "none" }}
    >
      <h1>Choose an item</h1>
      <ButtonOption itemEmoji={"✊"} itemName={"rock"} />
      <ButtonOption itemEmoji={"🖐️"} itemName={"paper"} />
      <ButtonOption itemEmoji={"✌️"} itemName={"scissor"} />
      <button onClick={closeModal}>Choose</button>
    </div>
  );
}

export default ChoiceModal;
