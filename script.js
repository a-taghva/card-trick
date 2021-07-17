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

const readMindBtn = document.getElementById('read-mind');
readMindBtn.addEventListener('click', (e) => { 
  e.preventDefault();
  const cards = getAllCards();

  readMindBtn.remove();
});
