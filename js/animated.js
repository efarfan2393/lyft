var nombrePerfil = localStorage.getItem("nombrePerfil");
	$(".nombre").append(nombrePerfil);

$(".botonPerfil").on("click", function(){
    /*Esto se va a ejecutar cuando alguien
        haga clic sobre el icono del menu
        addClass para añadir una clase
        removeClass para remover una clase
        toggleClass para alternar una clase
    */
    $(".zonaMenu").toggleClass("mostrarMenu"); 
});

// $("#mapa").on("click",function(){
// 	$(".zonaMenu").removeClass("mostrarMenu");
// })