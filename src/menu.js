export function Menu() {

  const content = document.querySelector("#content");


  const heading = document.createElement("h1");
  heading.innerHTML = `Menu`;
  const heading2 = document.createElement("h1");
  heading2.innerHTML = `Beverages`;
  const beverages = document.createElement("div");
  beverages.innerHTML = `   
    <h3>Honey Tea</h3>
    <p> A warm, sweat tea made with the highest quality honey and <br>
    a bit of lemon to start your day off right!! </p>
    <span>$2</span>

    <h3>Beary Tea</h3>
    <p> A comforting, almost filling, tea that is infused with the <br>
    flavours of several kinds of berries. <br>
    Best served cold, but can be served hot on request </p>
    <span>$3</span>
    `;

  content.appendChild(heading);
  content.appendChild(heading2);
  content.appendChild(beverages);
}
