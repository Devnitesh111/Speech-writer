const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');

const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.lang = 'en-US';

startBtn.addEventListener('click', () => {
  recognition.start();
});

stopBtn.addEventListener('click', () => {
  recognition.stop();
});

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  inputText.value += transcript + ' ';
};

recognition.onerror = (event) => {
  outputText.textContent = 'Error occurred: ' + event.error;
};
