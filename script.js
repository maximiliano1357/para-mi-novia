// script.js
document.getElementById("loveButton").addEventListener("click", function() {
    const message = `
        Hola mi amor, te quería hacer esta página para decirte lo mucho que te amo y lo orgulloso que estoy de vos y esta relación hermosa que tenemos. 
        Adoro cada momento a tu lado y cada sentimiento encontrado que tenemos, desde estar felices hasta estar tristes, porque yo a tu lado no estoy por comodidad ni por interés ni ningún sentimiento de los que manejan las relaciones de esta época. 
        Yo estoy con vos por tu forma de ser, de amar, de querer, porque me haces ser mejor persona. A tu lado no siento tristeza, no siento nada negativo, con tan solo sentir tu calor y tu amor me siento feliz y en casa. 
        Adoro estar a tu lado y adoro los más de 2 años que estoy aquí a tu lado. Amo todo de vos, todo lo que me das y me brindas de cariño. Gracias por todo, mi hermosa mujer.
    `;

    // Mostrar el mensaje
    const loveMessage = document.getElementById("loveMessage");
    loveMessage.textContent = message;
    loveMessage.classList.remove("hidden");
});
