//funcion para cambiar entre secciones activas, con div que se vuelven visibles o no(display:none)
function cambiarSeccion() {
    var seccion1 = document.getElementById("divSeccionHome");
    var seccion2 = document.getElementById("divSeccionClientes");
    var seccion3 = document.getElementById("divSeccionRutas");
    var seccion4 = document.getElementById("divSeccionVentas");
    var seccion5 = document.getElementById("divSeccionFidelizacion");
    //continuar con la funcionalidad de cambiar de seccion activa
};
////////////////////////////////////////////////////////////////
// implementacion de recursos para seccion home
////////////////////////////////////////////////////////////////

// implementacion de recursos para seccion cleintes
const listaClientes = [];
document.getElementById("btnAgregarCliente").addEventListener("click",agregarCliente);
document.getElementById("btnDeleteCliente").addEventListener("click",eliminarCliente);
function agregarCliente (){
    const clienteNumIde = document.getElementById("formNumIde").value;
    const clienteName = document.getElementById("formNombres").value;
    const clienteApellido = document.getElementById("formApellidos").value;
    const clienteTel = document.getElementById("formTel").value;
    const clienteEmail = document.getElementById("formCorreo").value;
    const clienteBirthday = document.getElementById("formBirthday").value;
    const clienteNacionalidad = document.getElementById("formNacionalidad").value;
    const cliente = new Map ([
        ["clienteNumIde", clienteNumIde],
        ["clienteName", clienteName],
        ["clienteApellido", clienteApellido],
        ["clienteTel", clienteTel],
        ["clienteEmail", clienteEmail],
        ["clienteBirthday", clienteBirthday],
        ["clienteNacionalidad", clienteNacionalidad],
    ]);
    alert(`Se guardara el cliente ${clienteName, clienteApellido} al registro`);
    listaClientes.push(cliente);
    console.log(listaClientes)
};
function eliminarCliente (){
    const eliminar = document.getElementById("inputIdCliente").value;
    alert(`Se eliminara al cliente ${listaClientes[eliminar].get("clienteName")} ${listaClientes[eliminar].get("clienteApellido")} del registro`);
    listaClientes.splice(eliminar,1);
    console.log(listaClientes)
    
};
function crearRowCliente (numIde, name, apellido, tel, email, birthday, nacionalidad){
    const contenedorCliente = document.getElementById("listadoClientes");
    const row = document.createElement("tr");
    const thead = document.createElement("th");
    const tdName = document.createElement("td");

};
function mostrarCliente (lista){};
////////////////////////////////////////////////////////////////

// implementacion de recursos para seccion rutas

////////////////////////////////////////////////////////////////

// implementacion de recursos para seccion ventas

////////////////////////////////////////////////////////////////

// implementacion de recursos para seccion fidelizacion
