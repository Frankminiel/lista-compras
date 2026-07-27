const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const shoppingList = document.getElementById("shoppingList");

addBtn.addEventListener("click", addProduct);

function addProduct() {

    const product = productInput.value.trim();

    if (product === "") {
        alert("Escribe un producto.");
        return;
    }

    const li = document.createElement("li");
    li.className = "item";

    li.innerHTML = `
        <span>${product}</span>

        <div class="actions">
            <button class="check">✔</button>
            <button class="edit">Editar</button>
            <button class="delete">Eliminar</button>
        </div>
    `;

    shoppingList.appendChild(li);

    const checkBtn = li.querySelector(".check");
    const editBtn = li.querySelector(".edit");
    const deleteBtn = li.querySelector(".delete");
    const text = li.querySelector("span");

    // Marcar como comprado
    checkBtn.addEventListener("click", () => {
        text.classList.toggle("completed");
    });

    // Editar
    editBtn.addEventListener("click", () => {

        const newProduct = prompt("Editar producto:", text.textContent);

        if (newProduct !== null && newProduct.trim() !== "") {
            text.textContent = newProduct.trim();
        }

    });

    // Eliminar
    deleteBtn.addEventListener("click", () => {

        if (confirm("¿Deseas eliminar este producto?")) {
            li.remove();
        }

    });

    productInput.value = "";
    productInput.focus();
}