let osszesBevitt = 0;
let elegetett = 0;
const celKaloria = 2000; // napi kalóriacél

// Frissíti a lépésszámot és az elégetett kalóriát
function frissitLepesek() {
  const lepes = parseInt(document.getElementById("lepesInput").value) || 0;
  document.getElementById("lepesKiiras").innerText = `Ma: ${lepes} / 10000 lépés`;
  elegetett = Math.round(lepes * 0.04); // kb. 0.04 kcal / lépés
  document.getElementById("elegetett").innerText = `Elégetett kalória: ${elegetett} kcal`;
  frissitTracker();
}

// Hozzáad egy ételt és kalóriát a listához
function hozzaadEtel() {
  const etel = document.getElementById("etel").value.trim();
  const kal = parseInt(document.getElementById("kaloria").value) || 0;

  if (etel === "") {
    alert("Kérlek, add meg az étel nevét!");
    return;
  }
  if (kal <= 0) {
    alert("Kérlek, adj meg egy 0-nál nagyobb kalóriaértéket!");
    return;
  }

  osszesBevitt += kal;

  const uj = document.createElement("div");
  uj.className = "food-item";
  uj.innerText = `${etel} – ${kal} kcal`;
  document.getElementById("etelLista").appendChild(uj);

  document.getElementById("bevitt").innerText = `Bevitt kalória: ${osszesBevitt} kcal`;

  // Alaphelyzetbe állítja a mezőket
  document.getElementById("etel").value = "";
  document.getElementById("kaloria").value = "";

  frissitTracker();
}

// Frissíti a még ehető kalóriák számát
function frissitTracker() {
  const megmaradt = celKaloria - osszesBevitt + elegetett;
  document.getElementById("megEhetsz").innerText = `Még ehetsz ma: ${megmaradt} kcal`;
}
