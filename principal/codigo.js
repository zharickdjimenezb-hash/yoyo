

let total = 0;

const lista = document.getElementById("lista-carrito");
const totalHTML = document.getElementById("total");
const contador = document.getElementById("contador");

document.querySelectorAll(".comprar").forEach(btn => {

    btn.addEventListener("click", () => {

        let producto = btn.dataset.producto;
        let precio = Number(btn.dataset.precio);

        total += precio;

        let li = document.createElement("li");

        li.innerHTML = `
            ${producto} - $${precio.toLocaleString()}
            <button onclick="eliminarProducto(this,${precio})">❌</button>
        `;

        lista.appendChild(li);

        totalHTML.textContent = total.toLocaleString();
        contador.textContent = lista.children.length;
    });

});

function eliminarProducto(btn, precio){

    btn.parentElement.remove();

    total -= precio;

    totalHTML.textContent = total.toLocaleString();
    contador.textContent = lista.children.length;
}

function vaciarCarrito(){

    lista.innerHTML = "";
    total = 0;

    totalHTML.textContent = "0";
    contador.textContent = "0";
}

document.getElementById("carritoBtn").addEventListener("click", () => {

    let carrito = document.getElementById("carrito");

    carrito.style.display =
    carrito.style.display === "block"
    ? "none"
    : "block";

});

document.getElementById("modoBtn").addEventListener("click", () => {

    document.body.classList.toggle("modo-noche");

});