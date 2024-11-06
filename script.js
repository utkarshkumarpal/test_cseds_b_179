const jokeDisplay = document.getElementById('joke-display');
const characterCounter = document.getElementById('character-counter');

function loadJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            const jokeContent = data.joke || `${data.setup} ${data.delivery}`;
            jokeDisplay.textContent = jokeContent;
            characterCounter.textContent = `Character count: ${jokeContent.length}`;
        })
        .catch(() => {
            jokeDisplay.textContent = 'Failed to fetch a joke!';
            characterCounter.textContent = 'Character count: 0';
        });
}

document.getElementById('fetch-joke-btn').onclick = loadJoke;
document.getElementById('reset-joke-btn').onclick = () => {
    jokeDisplay.textContent = 'Click the button to see a joke!';
    characterCounter.textContent = 'Character count: 0';
};
