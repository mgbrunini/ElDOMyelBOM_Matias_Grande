/*Botón registro*/
function registro(){
  var code = document.getElementById("codigo").value;
  var name = document.getElementById("nombre").value;
  var note = document.getElementById("nota").value;

  var estudiante = {codigo: "", nombre: "", nota: ""};
  estudiante.codigo = code;
  estudiante.nombre = name;
  estudiante.nota = note;

  json.estudiante.push(estudiante);
  console.log(json);
  agregarFila();
  reset();
}

var json = {estudiante: []};

/*Borrar formulario*/
function reset(){
  document.getElementById("codigo").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("nota").value = "";
}

function agregarFila(){
  var code = document.getElementById("codigo").value;
  var name = document.getElementById("nombre").value;
  var note = document.getElementById("nota").value;
  document.getElementById("tabla").insertRow(-1).innerHTML = '<td>'+code+'</td><td>'+name+'</td><td>'+note+'</td>';
}

/*Botón mostrar promedio*/
function promedio(){
  var contador = 0;
  var num = 0;
  var prom = 0;
  for (var i = 0; i < json.estudiante.length; i++) {
    num = parseInt(json.estudiante[i].nota);
    contador = num + contador;
  }
  prom = contador / i;
  alert("El promedio es " + prom);
}

/*Botón mayor nota*/
function mayor(){
  var Nmayor = 0;
  var pos = 0;
  var aux = "";
  var i;
  for (i = 0; i < json.estudiante.length; i++) {
      if (json.estudiante[i].nota >= Nmayor) {
          Nmayor = parseInt(json.estudiante[i].nota);
      }
  }
  for (i = 0; i < json.estudiante.length; i++) {
      if (json.estudiante[i].nota >= Nmayor) {
          pos = i;
          aux= aux + json.estudiante[i].nombre + " ";
      }
  }
  alert("La nota mayor pertenece a " + aux + " con " + json.estudiante[pos].nota);
}

/*Botón menor nota*/
function menor(){
  var Nmenor = 11;
  var pos1 = 0;
  var aux1 = "";
  var j;
  for (j = 0; j < json.estudiante.length; j++) {
      if (json.estudiante[j].nota <= Nmenor) {
          Nmenor = parseInt(json.estudiante[j].nota);
      }
  }
  for (j = 0; j < json.estudiante.length; j++) {
      if (json.estudiante[j].nota <= Nmenor) {
          pos1 = j;
          aux1=aux1 + json.estudiante[j].nombre + " ";
      }
  }
  alert("La nota menor pertenece a " + aux1 + " con " + json.estudiante[pos1].nota);
}
