let items = [];

function addItem() {
  const input = document.getElementById("input");
  const value = input.value.trim();

  if (value !== "") {
    items.push(value);
    const li = document.createElement("li");
    li.textContent = value;
    document.getElementById("list").appendChild(li);
    input.value = "";
  }
}

function pickRandom() {
  if (items.length === 0) {
    document.getElementById("result").textContent = "Adj hozzá legalább egy címet!";
    return;
  }

  const randomIndex = Math.floor(Math.random() * items.length);
  const selected = items[randomIndex];
  document.getElementById("result").textContent = `Nézd meg ezt: 🎬 ${selected}`;
}

function pickMovie() {
  const movies = [
    "Verdák",
    "Angry Birds",
    "Szörny Rt",
    "Jégkorszak",
    "Így neveld a sárkányodat",
    "Minions",
    "Paddington",
    "Shrek",
    "Oroszlánkirály",
    "Nagyon vadon",
    "Zootopia",
    "Star Wars",
    "Pókember",
    "Harry Potter"
  ];

  const randomIndex = Math.floor(Math.random() * movies.length);
  const chosenMovie = movies[randomIndex];
  document.getElementById("result").textContent = `Filmajánló: 🍿 ${chosenMovie}`;
}
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  const r = Math.floor(30 + x * 40);  // 30–70
  const g = Math.floor(60 + y * 60);  // 60–120
  const b = 180; // fix kékes árnyalat

  document.body.style.background = `rgb(${r}, ${g}, ${b})`;
});
