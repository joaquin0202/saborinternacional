/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var ruta= window.location.href;
var posicion= ruta.substring(ruta.indexOf("=")+1);

$(document).ready(inicio);

function inicio()
{
    cargarReceta();
}

function cargarReceta()
{  
    $("#titulo2").append("<h2>"+recetas[posicion]['pais']+"</h2><h1>"+recetas[posicion]['titulo']+"</h1><p>"+recetas[posicion]['subtitulo']+"</p>"); 
    $(".col-md-7").append("<img src='img/" + recetas[posicion]['imagen'] + "'><h2>Instrucciones</h2>")
    
    for(var i=0; i<=recetas[posicion]["preparacion"].length-1;i++)
    {
      $(".col-md-7").append("  <ul><li>"+recetas[posicion]['preparacion'][i]+"</li></ul>")
    }
    
    $(".col-md-5").append("<h2>Ingredientes</h2>")
    
    for(var i=0; i<=recetas[posicion]["preparacion"].length-1;i++)
    {
      $(".col-md-5").append("<ul><li>"+recetas[posicion]['ingredientes'][i]+"</li></ul>")
    }
    
      
}