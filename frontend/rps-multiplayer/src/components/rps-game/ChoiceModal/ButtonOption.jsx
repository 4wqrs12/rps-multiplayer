// itemEmoji parameter will be one of these three emojis: ✊ (rock) 🖐️ (paper) ✌️ (scissor)
function ButtonOption({ itemEmoji, itemName, onClickFunction }) {
  // This will take some props depending if the button will is a rock, paper, or scissor button. The textContent of the button will be an emoji. This will be inside the modal from ChoiceModal.jsx
  // We take props because we don't want three seperate components for each rock, paper, and scissor choice, the prop allows us to dynammically modify the textContent of one button
  return (
    // Get the value of the "key" attribute on the button click (onClick)
    <button
      onClick={() => onClickFunction({ name: itemName, emoji: itemEmoji })}
      className="btn"
      key={itemName}
    >
      {itemEmoji}
    </button>
  );
}

export default ButtonOption;
