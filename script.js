function checkAnswer() {
  const answer = document.getElementById('answer').value.trim().toLowerCase();
  const correctAnswer = "riderkif"; 

  if (answer === correctAnswer) {
    window.location.href = "rakhi.html";
  } else {
    document.getElementById('error').textContent = "Hatt 💀";
    document.getElementById('errorSound').play();
  }
}