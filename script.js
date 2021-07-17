function getAllCards() {
  const cards = [];
  const numArr = ['first', 'second', 'third', 'final'];

  for (const num of numArr) {
    const value = document.getElementById(`${num}-value`).value;
    const type = document.getElementById(`${num}-type`).value;

    cards.push({value, type});
  };

  return cards;
}

function createResult(value, type) {
  const span = document.createElement('span');
  span.id = 'hidden-card';
  span.textContent = `the ${value} of ${type}!`;

  return span;
};

const readMindBtn = document.getElementById('read-mind');
const result = document.getElementById('result');

readMindBtn.addEventListener('click', (e) => { 
  e.preventDefault();
  console.dir(e);

  const cards = getAllCards();
  const hiddenCard = createResult('4', 'clubs');

  readMindBtn.remove();
  document.getElementById('result').append(hiddenCard);
});
