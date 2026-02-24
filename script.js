function calcular() {
    const input = document.getElementById("monto");
    let monto = parseFloat(input.value);

    if (isNaN(monto) || monto < 0) {
        alert("Por favor ingrese un número válido.");
        return;
    }

    // Cálculos
    let precioBase = monto * 2;
    let precioDebito = precioBase * 1.12;
    let precioCredito = precioDebito * 1.25;

    // Redondear a enteros
    precioBase = Math.round(precioBase);
    precioDebito = Math.round(precioDebito);
    precioCredito = Math.round(precioCredito);

    // Mostrar resultados con formato $
    document.getElementById("precioBase").textContent = "$" + precioBase;
    document.getElementById("precioDebito").textContent = "$" + precioDebito;
    document.getElementById("precioCredito").textContent = "$" + precioCredito;
}