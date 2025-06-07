let titles = [];

function addTitle() {
  const input = document.getElementById("titleInput");
  const title = input.value.trim();

  if (title) {
    titles.push(title);
    updateList();
    input.value = "";
  }
}

function updateList() {
  const ul = document.getElementById("titleList");
  ul.innerHTML = "";

  titles.forEach((title, index) => {
    const li = document.createElement("li");
    li.textContent = title;
    ul.appendChild(li);
  });
}

function pickRandom() {
  if (titles.length === 0) {
    document.getElementById("result").textContent = "A lista üres!";
    return;
  }

  const randomIndex = Math.floor(Math.random() * titles.length);
  const chosen = titles[randomIndex];
  document.getElementById("result").textContent = `Ma nézd meg: 🎥 ${chosen}`;
}
