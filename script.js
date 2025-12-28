const usernameInput = document.getElementById("username");
const resolutionInput = document.getElementById("resolution");

const cardUser = document.getElementById("cardUser");
const cardText = document.getElementById("cardText");
const card = document.getElementById("card");

// Live update
usernameInput.addEventListener("input", () => {
  cardUser.textContent = usernameInput.value
    ? "@" + usernameInput.value
    : "@username";
});

resolutionInput.addEventListener("input", () => {
  cardText.textContent = resolutionInput.value
    ? resolutionInput.value
    : "My New Year Resolution is...";
});

// Click OR long-press
card.addEventListener("click", saveCard);

function saveCard() {
  html2canvas(card, {
    scale: 2,
    backgroundColor: null,
    useCORS: true
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "RE_2026_Resolution.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}


