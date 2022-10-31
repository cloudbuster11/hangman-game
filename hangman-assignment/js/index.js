// För att toggla SVG:en
document.querySelector('figure').classList.add('scaffold');
document.querySelector('figure').classList.add('head');
document.querySelector('figure').classList.add('body');
document.querySelector('figure').classList.add('arms');
document.querySelector('figure').classList.add('legs');

// Dom
const wrongLetters = document.querySelector('.word__wrong');
const wordResult = document.querySelector('.word__result');
const wordContainer = document.querySelector('.word__container');

let wrongGuessLetters = '';
const word = 'halloween';

// Loopar över Word(halloween) och lägger till en P-tag(-) och class="bokstaven".
function displayWord(word) {
  for (let i = 0; i < word.length; i++) {
    const paragraph = document.createElement('p');

    // Nytt
    paragraph.classList.add(word[i]);

    const node = document.createTextNode(' _ ');
    paragraph.appendChild(node);
    wordResult.appendChild(paragraph);
  }
}

displayWord(word);

// Eventlistner som lyssnar efter knapptryck.
addEventListener('keypress', (event) => {
  compare(event.key);
});

// Jämför bokstaven med ordet.
function compare(key) {
  console.log(`Du tryckte på tangenten ${key}`);
  if (word.includes(key)) {
    console.log(`Bokstaven ${key} finns i ordet.`);
    // Nytt
    displayCorrectLetter(key);
  } else if (wrongGuessLetters.includes(key)) {
    console.log('du har redan gissat denna bokstav');
  } else {
    console.log(`Bokstaven ${key} finns inte ordet`);
    wrongGuessLetters += ` ${key}`;
    console.log(
      `De här bokstäverna har du gissat på: ${wrongGuessLetters}`
    );

    // Visar gissningar som var fel i html.
    wrongLetters.textContent = wrongGuessLetters;
  }
}

// Kolla om man har gissat på den bokstaven tidigare

// Rätt gissning
// Nytt
function displayCorrectLetter(correctKey) {
  const correctLetterParagraph = document.querySelectorAll('p');
  console.log(correctKey);
  for (let i = 0; i < correctLetterParagraph.length; i++) {
    if (correctLetterParagraph[i].classList.contains(correctKey)) {
      console.log('Körs den här');
      correctLetterParagraph[i].textContent = correctKey;
    }
  }
}
// Du vann

// Du förlorade

// Starta om spelet

//
