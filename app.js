// Simulación de la base de datos
let empleados = [];

// Conexión a la base de datos
const conectarBD = document.getElementById("conectarBD");
conectarBD.addEventListener("click", () => {
  alert("Base de datos conectada correctamente.");
});

// Eliminar base de datos
const eliminarBD = document.getElementById("eliminarBD");
eliminarBD.addEventListener("click", () => {
  if (
    confirm(
      "¿Desea eliminar la base de datos? Los datos serán eliminados permanentemente."
    )
  ) {
    empleados = [];
    mostrarEmpleados();
    alert("Base de datos eliminada.");
  }
});

// Salir de la aplicación
const salir = document.getElementById("salir");
salir.addEventListener("click", () => {
  if (confirm("¿Desea salir de la aplicación?")) {
    window.close();
  }
});

// Resetear campos
const resetearCampos = document.getElementById("resetearCampos");
resetearCampos.addEventListener("click", () => {
  limpiarCampos();
});

// Acerca de
const acercaDe = document.getElementById("acercaDe");
acercaDe.addEventListener("click", () => {
  alert(`Aplicación CRUD con base de datos
Versión 0.1
Tecnología: HTML, CSS, JavaScript
Creadores: Gonzalo, Milagros, Rodrigo, Elizabeth
INSTITUTO SUPERIOR 240 V.DEL PINO`);
});

// Crear registro
const crear = document.getElementById("crear");
crear.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const puesto = document.getElementById("puesto").value;
  const salario = document.getElementById("salario").value;

  if (nombre && puesto && salario) {
    const nuevoEmpleado = {
      id: empleados.length + 1,
      nombre,
      puesto,
      salario,
    };

    empleados.push(nuevoEmpleado);
    mostrarEmpleados();
    limpiarCampos();
  } else {
    alert("Por favor, complete todos los campos.");
  }
});

// Mostrar lista
function mostrarEmpleados() {
  const tablaBody = document.querySelector("tbody");
  tablaBody.innerHTML = "";

  empleados.forEach((empleado) => {
    const fila = document.createElement("tr");

    const celdaId = document.createElement("td");
    celdaId.textContent = empleado.id;
    fila.appendChild(celdaId);

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = empleado.nombre;
    fila.appendChild(celdaNombre);

    const celdaPuesto = document.createElement("td");
    celdaPuesto.textContent = empleado.puesto;
    fila.appendChild(celdaPuesto);

    const celdaSalario = document.createElement("td");
    celdaSalario.textContent = empleado.salario;
    fila.appendChild(celdaSalario);

    tablaBody.appendChild(fila);
  });
}

// Actualizar registro
const actualizar = document.getElementById("actualizar");
actualizar.addEventListener("click", () => {
  const id = prompt("Ingrese el ID del registro a actualizar:");
  const empleado = empleados.find((emp) => emp.id === parseInt(id));

  if (empleado) {
    const nombre = prompt("Ingrese el nuevo nombre:", empleado.nombre);
    const puesto = prompt("Ingrese el nuevo cargo:", empleado.puesto);
    const salario = prompt("Ingrese el nuevo salario:", empleado.salario);

    if (nombre && puesto && salario) {
      empleado.nombre = nombre;
      empleado.puesto = puesto;
      empleado.salario = salario;
      mostrarEmpleados();
      alert("Registro actualizado correctamente.");
    } else {
      alert("Por favor, complete todos los campos.");
    }
  } else {
    alert("No se encontró ningún registro con ese ID.");
  }
});

// Eliminar registro
const eliminar = document.getElementById("eliminar");
eliminar.addEventListener("click", () => {
  const id = prompt("Ingrese el ID del registro a eliminar:");
  const indiceEmpleado = empleados.findIndex((emp) => emp.id === parseInt(id));

  if (indiceEmpleado !== -1) {
    if (confirm(`¿Desea eliminar el registro con ID ${id}?`)) {
      empleados.splice(indiceEmpleado, 1);
      mostrarEmpleados();
      alert("Registro eliminado correctamente.");
    }
  } else {
    alert("No se encontró ningún registro con ese ID.");
  }
});

// Limpiar campos
function limpiarCampos() {
  document.getElementById("nombre").value = "";
  document.getElementById("puesto").value = "";
  document.getElementById("salario").value = "";
}
