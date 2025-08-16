// itemEmoji parameter will be one of these three emojis: ✊ (rock) 🖐️ (paper) ✌️ (scissor)
function ButtonOption({ itemEmoji, itemName }) {
  // This will take some props depending if the button will is a rock, paper, or scissor button. The textContent of the button will be an emoji. This will be inside the modal from ChoiceModal.jsx
  // We take props because we don't want three seperate components for each rock, paper, and scissor choice, the prop allows us to dynammically modify the textContent of one button
  return (
    <button className="btn">
      {itemEmoji} ({itemName})
    </button>
  );
}

export default ButtonOption;
