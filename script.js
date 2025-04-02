const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// Exibe as notas salvas no localStorage
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

// Salva as notas localStorage (.innerHTML para salvar o conteudo também)
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Logica para criar notas
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p"); // Cria um elemento p
  let img = document.createElement("img"); // Cria um elemento img
  inputBox.className = "input-box"; // Coloca a class = input-box
  inputBox.setAttribute("contenteditable", "true"); // Coloca atributo contenteditable e define como true para que o usuario edite
  img.src = "src/images/delete.png"; // Coloca o caminho da imagem na img
  notesContainer.appendChild(inputBox).appendChild(img);
});

// Logica para deletar notas
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove(); // Ao clicar na tag img remove o parentElement
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      // Atualiza o localStorage quando digitar
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

// Adiciona quebra de linha quando o usuario apertar enter
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
