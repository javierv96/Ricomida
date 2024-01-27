/* Tooltips */
var tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
var tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$("#enviarCorreo").click(function (e) {
	e.preventDefault();
	alert("El correo fue enviado correctamente...");
});

$("#titulo-recetas").dblclick(function(){
    $(this).css("color", "red");
});

$("#titulo-recetas1").dblclick(function(){
    $(this).css("color", "red");
});

$(".titulo").click(function () {
	$(".contenido").toggle(1000);
	$(".contenido").show(1000);
});
