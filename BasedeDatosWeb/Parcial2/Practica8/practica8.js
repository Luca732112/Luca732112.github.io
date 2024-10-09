$(document).ready(function(){

    $('#boton').on("click", function(){
        var nombre = $('#nombre').val();

        alert(nombre);
    });

    $('#botton').click(function(){
        $('#texto').fadeToggle("slow");
    });

})