const pagar=document.querySelector("#pagar");
pagar.addEventListener("click", (e) => {
    if(productosCarrito.length!=0 ){
        setTimeout(() => {
            window.location = "index.html";
        }, 6000);
        Swal.fire(
            'Muchas gracias por tu compra!',
            'Nos contactaremos contigo para realizar el pago',
            'success'
        );
    }

})