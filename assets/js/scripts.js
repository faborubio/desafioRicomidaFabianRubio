$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {
  $("#enviarCorreo").click(function() {
    alert("El correo fue enviado correctamente...");
  });
});

$(document).ready(function() {
  $("p").on("dblclick", function() {
    if ($(this).text() === "INGREDIENTES" || $(this).text() === "PREPARACIÓN") {
      $(this).css("color", "red");
    }
  });
});

$(document).ready(function(){
  $("#panqueque").click(function () {
    $('#texto-panqueque').toggle("swing");
  });
  $("#tiramisu").click(function () {
    $('#texto-tiramisu').toggle("swing");
  });
  $("#plateada").click(function () {
    $('#texto-plateada').toggle("swing");
  });
});
