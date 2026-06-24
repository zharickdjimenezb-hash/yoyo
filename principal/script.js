const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    if(correo === "" || password === ""){
        alert("Complete todos los campos");
        return;
    }

    alert("Inicio de sesión exitoso");
});

document.getElementById("googleBtn").addEventListener("click", () => {
    alert("Inicio de sesión con Google");
});

document.getElementById("facebookBtn").addEventListener("click", () => {
    alert("Inicio de sesión con Facebook");
});

document.getElementById("whatsappBtn").addEventListener("click", () => {
    alert("Inicio de sesión con WhatsApp");
});