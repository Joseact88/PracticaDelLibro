//Validafecha


//Calcular la edad desde una fecha
function edad(fechaNacStr)
{
    //Creamos las fechas
    var fechaActu= new Date();
    var fechaNac= new Date(fechaNacStr);
    //Calculamos los milisegundos
    var milisegundosVivo=fechaActu-fechaNac;
    //Calculamos los años
    var anyo= Math.trunc(milisegundosVivo/1000/60/60/24/365);
    return anyo;
}

window.addEventListener("load", function()
{
    var boton = this.document.getElementById("calcular");
    boton.onclick= function(ev)
    {
        ev.preventDefault();
        var fecha=document.getElementById("calcularEdad").value;

        var p=document.getElementById("insertar");

        p.innerHTML="Tienes "+edad(fecha)+" años";
    }
})


//Dias y horas Vivo desde una fecha
function diasVivo(fechaNacStr)
{
    //Creamos las fechas
    var fechaActu= new Date();
    var fechaNac= new Date(fechaNacStr);
    //Calculamos los milisegundos
    var milisegundosVivo=fechaActu-fechaNac;
    //Calculamos las horas
    var horas= Math.trunc(milisegundosVivo/1000/60/60);
    //Calculamos los días
    var dias=Math.trunc(horas/24);
    return "Llevas vivo "+dias+" días, que son "+horas+"horas."
}
window.addEventListener("load", function()
{
    var boton = this.document.getElementById("Dias-Horas");
    boton.onclick= function(ev)
    {
        ev.preventDefault();
        var fecha=document.getElementById("calcularTiempo").value;

        var p=document.getElementById("insertar");

        p.innerHTML=diasVivo(fecha);
    }
})
//Dos fechas (Calcular) Cuanto tiempo ha pasado desde una hasta la otra años, meses, dias
function DiferenciaEntreFechas(fecha1Str,fecha2Str)
{
    //Creamos las fechas
    var fecha1=new Date(fecha1Str);
    var fecha2=new Date(fecha2Str);
    var anyos;
    var meses;
    var dias;
    var milisegundos=fecha1-fecha2;
    if(milisegundos<0)
    {
        milisegundos=milisegundos*(-0.1);
    }
    var nuevaFecha= new Date(milisegundos);
    anyos=nuevaFecha.getFullYear()-1970;
    meses=nuevaFecha.getMonth();
    dias=nuevaFecha.getDate();
    return anyos+" años, "+meses+" meses y "+dias+" días";
}

window.addEventListener("load", function()
{
    var boton = this.document.getElementById("Diferencia");
    boton.onclick= function(ev)
    {
        ev.preventDefault();
        var fecha1=document.getElementById("calcularEntreFechas1").value;
        var fecha2=document.getElementById("calcularEntreFechas2").value;

        var p=document.getElementById("insertar");

        p.innerHTML=DiferenciaEntreFechas(fecha1,fecha2);
    }
})

//Calcular cuanto falta para la jubilacion (65) años, meses, dias
window.addEventListener("load", function()
{
    var boton = this.document.getElementById("Jubilacion");
    boton.onclick= function(ev)
    {
        ev.preventDefault();
        var fecha=document.getElementById("calcularTiempoJubilacion").value;
        

        var p=document.getElementById("insertar");

        p.innerHTML=DiferenciaEntreFechas(new Date().setFullYear(new Date().getFullYear()+65),fecha);
    }
})
