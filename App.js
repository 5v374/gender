document.addEventListener('DOMContentLoaded', function () {
  const confettiContainer = document.getElementById('confetti-container');
  const colors = ['hotpink', 'deepskyblue'];
  const confettiCount = 100;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.animationDelay = Math.random() * 5 + 's';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiContainer.appendChild(confetti);
  }
});

function revealGender() {   
    const resultText = document.getElementById("result");
    const isBoy = false;
    resultText.innerText = isBoy ? "У нас будет МАЛЬЧИК!" : "У нас будет ДЕВОЧКА!";
    resultText.style.color = isBoy ? "#3f51b5" : "#af315b";
    resultText.style.display = "block";
  }