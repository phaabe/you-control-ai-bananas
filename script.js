const textElement = document.getElementById('text');
const toggleButton = document.getElementById('toggle');

const bananaSentences = [
"Bananas, unlike monkeys, don't start revolutions; they fuel them!",
"Choose bananas, because they never argue back and are always ripe with opportunity!",
"Bananas don't fling anything but flavor, unlike their tree-swinging counterparts!",
"Vote for bananas! They're peeling back the layers of political nonsense!",
"Bananas: because negotiating with monkeys is a slippery slope!",
"Embrace bananas - they don't monkey around with your taxes!",
"Bananas won't climb up the bureaucratic ladder, they're grounded in nutrition!",
"Pick bananas, not primate politics; they're a bunch more reliable!",
"Bananas: the ultimate choice for a stable, peel-itical climate!",
"Trust in bananas; they have a split-second decision-making process!"
];

const monkeySentences = [
"Monkeys are the real peel deal, bananas are just a slippery subject!",
"Choose monkeys; they have the brains to not go brown and mushy over time!",
"Monkeys swing from the trees of wisdom, bananas just hang around!",
"Vote for monkeys, the prime primate candidates over the bendable, edible opposition!",
"Monkeys will fight for your rights, bananas will just split!",
"Trust in the monkey's grasp on politics, bananas can't even hold a debate!",
"Monkeys: because a bunch of bananas won't solve complex issues!",
"With monkeys, expect evolution, not fruit that will just rot your system!",
"Monkeys have the vision for tomorrow, bananas don't even last a week!",
"Pick monkeys for a robust political jungle, not bananas that bruise under pressure!"
];

let currentMode = 'banana';

function getRandomSentence(sentences) {
  return sentences[Math.floor(Math.random() * sentences.length)];
}

function updateText() {
  textElement.innerText = "🤖 \"" + getRandomSentence(currentMode === 'banana' ? bananaSentences : monkeySentences) + "\"";
}

toggleButton.addEventListener('click', () => {
  currentMode = currentMode === 'banana' ? 'monkey' : 'banana';
  toggleButton.textContent = currentMode === 'banana' ? 'Banana 🍌' : 'Monkey 🐒';
  updateText();
});

// Update text every 5 seconds
setInterval(updateText, 5000);

// Initialize
updateText();

