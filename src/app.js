var dato;

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function datos(array) {
  let largo = array.length;
  // random el valor maximo esta excluido
  let indice = Math.floor(Math.random() * largo);
  let retorna = array[indice];
  return retorna;
}

let var1 = datos(who);
let var2 = datos(action);
let var3 = datos(what);
let var4 = datos(when);

dato = var1 + " " + var2 + " " + var3 + " " + var4;

document.getElementById("excuse").innerHTML = dato;
