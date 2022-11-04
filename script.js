function calcularTotal() {
    valor = document.getElementById('cantInput').value;
    valor = parseInt(valor);
    total = valor * 200;
    porcentaje = 0;
    categoria = document.getElementById('categ').value;
    if (categoria == 1) {
        porcentaje = total * 80 / 100;
        total = total - porcentaje;
    }


    if (categoria == 2) {
        porcentaje = total * 50 / 100;
        total = total - porcentaje;
    }


    if (categoria == 3) {
        porcentaje = total * 15 / 100;
        total = total - porcentaje;
    }


    document.getElementById('cantTotal').innerHTML = "Total a pagar : " + " $" + total;
}
function borra() {
    document.getElementById('myForm').reset();
    document.getElementById('cantTotal').innerHTML = "Total a Pagar: $";
}
