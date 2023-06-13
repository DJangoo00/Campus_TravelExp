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

// instanciar listas para guardar informacion
var listaClientes = [];
var listaRutas = [];
////////////////////////////////////////////////////////////////
// implementacion de recursos para seccion cleintes
document.getElementById("btnAgregarCliente").addEventListener("click",agregarCliente);
document.getElementById("btnDeleteCliente").addEventListener("click",eliminarClienteCliente);

function agregarCliente (){
    const clientenIDeValue = document.getElementById("formNumIde").value;
    const clienteNameValue = document.getElementById("formNombres").value;
    const clienteApellidoValue = document.getElementById("formApellidos").value;
    const clienteTelValue = document.getElementById("formTel").value;
    const clienteEmailValue = document.getElementById("formCorreo").value;
    const clienteBirthdayValue = document.getElementById("formBirthday").value.toString();
    const clienteNacionalidadValue = document.getElementById("formNacionalidad").value;
    const cliente = {
        clienteIDe: clientenIDeValue,
        clienteName: clienteNameValue,
        clienteApellido: clienteApellidoValue,
        clienteTel: clienteTelValue,
        clienteEmail: clienteEmailValue,
        clienteBirthday: clienteBirthdayValue,
        clienteNacionalidad: clienteNacionalidadValue,
        clientePuntos: 0,
    };
    alert(`Se guardara el cliente ${clienteNameValue} ${clienteApellidoValue} en el registro`);
    listaClientes.push(cliente);
    console.log("consoleAgregarCliente",listaClientes)
    guardarLocalStorage();
    mostrarClientes();
    llenarCampos();
};
function eliminarClienteCliente (){
    const eliminarCliente = document.getElementById("inputIdCliente").value;
    alert(`Se eliminarClientea al cliente ${listaClientes[eliminarCliente].clienteName} ${listaClientes[eliminarCliente].clienteApellido} del registro`);
    listaClientes.splice(eliminarCliente,1);
    console.log("consoleeliminarClienteCliente",listaClientes);
    mostrarClientes();
    
};
function crearRowCliente (nID, numIden, name, apellido, tel, email, birthday, nacionalidad){
    //crear contenedores y etiquetas
    const contenedorCliente = document.getElementById("listadoClientes");
    const trow = document.createElement("tr");
    const thID = document.createElement("th");
    const tdNumIden = document.createElement("td");
    const tdName = document.createElement("td");
    const tdApellido = document.createElement("td");
    const tdTel = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdBirthday = document.createElement("td");
    const tdNacionalidad = document.createElement("td");
    
    // crear nodes
    const nodeID = document.createTextNode(nID);
    const nodeNumIden = document.createTextNode(numIden);
    const nodeName = document.createTextNode(name);
    const nodeApellido = document.createTextNode(apellido);
    const nodeTel = document.createTextNode(tel);
    const nodeEmail = document.createTextNode(email);
    const nodeBirthday = document.createTextNode(birthday);
    const nodeNacionalidad = document.createTextNode(nacionalidad);

    //agregar node a la etiqueta
    thID.appendChild(nodeID);
    tdNumIden.appendChild(nodeNumIden);
    tdName.appendChild(nodeName);
    tdApellido.appendChild(nodeApellido);
    tdTel.appendChild(nodeTel);
    tdEmail.appendChild(nodeEmail);
    tdBirthday.appendChild(nodeBirthday);
    tdNacionalidad.appendChild(nodeNacionalidad);

    //crear atributos para cada node
    thID.setAttribute("scope", "row");
    
    //agregar etiquetas al trow
    trow.appendChild(thID);
    trow.appendChild(tdNumIden);
    trow.appendChild(tdName);
    trow.appendChild(tdApellido);
    trow.appendChild(tdTel);
    trow.appendChild(tdEmail);
    trow.appendChild(tdBirthday);
    trow.appendChild(tdNacionalidad);

    //agregar row al contenedor
    contenedorCliente.appendChild(trow);
};
function mostrarClientes (){
    document.getElementById("listadoClientes").innerHTML="";
    console.log("consolMostrarClientes",listaClientes)
    listaClientes.forEach(element => {
        const nIDe = listaClientes.indexOf(element);
        const numIden = element.clienteIDe;
        const name = element.clienteName;
        const apellido = element.clienteApellido;
        const tel = element.clienteTel;
        const email = element.clienteEmail;
        const birthday = element.clienteBirthday;
        const nacionalidad = element.clienteNacionalidad;
        console.log(element)
        //llamar funcion para crear cada row
        crearRowCliente(nIDe, numIden, name, apellido, tel, email, birthday, nacionalidad);
    });
};
////////////////////////////////////////////////////////////////

// implementacion de recursos para seccion rutas

document.getElementById("btnAgregarRuta").addEventListener("click",agregarRuta);
document.getElementById("btnDeleteRuta").addEventListener("click",eliminarRuta);

function agregarRuta (){
    const rutaNombreValue = document.getElementById("formNombreRuta").value;
    const rutaValorValue = document.getElementById("formValorTiquete").value;
    const rutaOrigenValue = document.getElementById("formCityOrigen").value;
    const rutaDestinoValue = document.getElementById("formCityDestino").value;
    const rutaPuntosValue = document.getElementById("formPuntosFideli").value;
    const ruta = {
        rutaNombre: rutaNombreValue,
        rutaValor: rutaValorValue,
        rutaOrigen: rutaOrigenValue,
        rutaDestino: rutaDestinoValue,
        rutaPuntos: rutaPuntosValue
    };
    alert(`Se guardara la ruta ${rutaNombreValue} en el registro`);
    listaRutas.push(ruta);
    console.log("consoleAgregarRuta",listaRutas);
    guardarLocalStorage();
    mostrarRutas();
    llenarCampos();
};

function eliminarRuta (){
    const eliminarRuta = document.getElementById("inputIdCliente").value;
    alert(`Se eliminara la ruta ${listaRutas[eliminarRuta].rutaName} del registro`);
    listaRutas.splice(eliminarRuta,1);
    console.log("consoleeliminarClienteCliente",listaRutas);
    mostrarRutas();
};

function crearRowRuta (nIdRuta, nameRuta, valueRuta, originRuta, destinoRuta, puntosRuta){
    const rutaId = listaRutas.length;
     //crear contenedores y etiquetas
    const contenedorRuta = document.getElementById("listadoRutas");
    const trRutaRow = document.createElement("tr");
    const thRutaId = document.createElement("th");
    const tdRutaName = document.createElement("td");
    const tdRutaOrigen = document.createElement("td");
    const tdRutaDestino = document.createElement("td");
    const tdRutaPuntos = document.createElement("td");
    
    // crear nodes
    const nodeRutaRow = document.createTextNode(nIdRuta);
    const nodeRutaId = document.createTextNode(nameRuta);
    const nodeRutaName = document.createTextNode(valueRuta);
    const nodeRutaOrigen = document.createTextNode(originRuta);
    const nodeRutaDestino = document.createTextNode(destinoRuta);
    const nodeRutaPuntos = document.createTextNode(puntosRuta);

    //agregar node a la etiqueta
    trRutaRow.appendChild(nodeRutaRow);
    thRutaId.appendChild(nodeRutaId);
    tdRutaName.appendChild(nodeRutaName);
    tdRutaOrigen.appendChild(nodeRutaOrigen);
    tdRutaDestino.appendChild(nodeRutaDestino);
    tdRutaPuntos.appendChild(nodeRutaPuntos);

    //crear atributos para cada node
    trRutaRow.setAttribute("scope", "row");
    
    //agregar etiquetas al trow
    trRutaRow.appendChild(thRutaId);
    trRutaRow.appendChild(tdRutaName);
    trRutaRow.appendChild(tdRutaOrigen);
    trRutaRow.appendChild(tdRutaDestino);
    trRutaRow.appendChild(tdRutaPuntos);

    //agregar row al contenedor
    contenedorRuta.appendChild(trRutaRow);
};

function mostrarRutas (){
    document.getElementById("listadoRutas").innerHTML="";
    console.log("consoleMostrarRutas",listaRutas);
    listaRutas.forEach(element => {
        const nIdRuta = listaRutas.indexOf(element);
        const nameRuta = element.rutaNombre;
        const valueRuta = element.rutaValor;
        const originRuta = element.rutaOrigen;
        const destinoRuta = element.rutaDestino;
        const puntosRuta = element.rutaPuntos;
        console.log(element)
        //llamar funcion para crear cada row
        crearRowRuta(nIdRuta, nameRuta, valueRuta, originRuta, destinoRuta, puntosRuta);
    });
};
////////////////////////////////////////////////////////////////

// implementacion de recursos para seccion ventas
document.getElementById("btnComprarTiquete").addEventListener("click", generarFactura)
function llenarCampos(){
    //select para clientes
    const ventasSelectCLiente  = document.getElementById("ventasInCLiente");
    ventasSelectCLiente.innerHTML = "<option selected>Seleccione el Cliente</option>";
    listaClientes.forEach(element => {
        const conteOpCliente = document.createElement("option");
        const nodeOpCliente = document.createTextNode((element.clienteName));
        const valuOpCliente = listaClientes.indexOf(element);

        conteOpCliente.appendChild(nodeOpCliente);

        conteOpCliente.setAttribute("value", valuOpCliente);

        ventasSelectCLiente.appendChild(conteOpCliente)
    });
    //select para rutas
    const ventasSelectRuta = document.getElementById("ventasInRuta");
    ventasSelectRuta.innerHTML = "<option selected>Seleccione la ruta</option>";
    listaRutas.forEach(element => {
        const conteOpRuta = document.createElement("option");
        const nodeOpRuta = document.createTextNode(element.rutaNombre);
        const valuOpRuta = listaRutas.indexOf(element);

        conteOpRuta.appendChild(nodeOpRuta);

        conteOpRuta.setAttribute("value", valuOpRuta);

        ventasSelectRuta.appendChild(conteOpRuta)
    });

};
const mostrarFactura = {
    mTdUserName : document.getElementById("mTdUserName"),
    mTdUserIDe : document.getElementById("mTdUserIDe"),
    mTdRuteName : document.getElementById("mTdRuteName"),
    mTdRuteValu : document.getElementById("mTdRuteValu"),
    mTdRuteTA : document.getElementById("mTdRuteTA"),
    mTdRuteIva : document.getElementById("mTdRuteIva"),
    mTRuteValuTotal : document.getElementById("mTRuteValuTotal"),
    mTRutePuntos : document.getElementById("mTRutePuntos"),
    limpiarCampos : function (){
        this.mTdUserName.innerHTML="";
        this.mTdUserIDe.innerHTML="";
        this.mTdRuteName.innerHTML="";
        this.mTdRuteValu.innerHTML="";
        this.mTdRuteTA.innerHTML="";
        this.mTdRuteIva.innerHTML="";
        this.mTRuteValuTotal.innerHTML="";
        this.mTRutePuntos.innerHTML="";
    },
    llenarCampos: function(userNAme, userId, rutaName, rutaValu, rutaTA, rutaIva, rutaValuTotal, rutaPuntos){
        this.mTdUserName.innerHTML=(userNAme);
        this.mTdUserIDe.innerHTML=(userId);
        this.mTdRuteName.innerHTML=(rutaName);
        this.mTdRuteValu.innerHTML=(rutaValu);
        this.mTdRuteTA.innerHTML=(rutaTA);
        this.mTdRuteIva.innerHTML=(rutaIva);
        this.mTRuteValuTotal.innerHTML=(rutaValuTotal);
        this.mTRutePuntos.innerHTML=(rutaPuntos);
    },
};

function generarFactura(){
    mostrarFactura.limpiarCampos
    const ventasCLiente  = document.getElementById("ventasInCLiente").value;
    const ventasRuta = document.getElementById("ventasInRuta").value;
    let cliente = listaClientes[ventasCLiente];
    let ruta = listaRutas[ventasRuta];
    console.log("cliente",cliente);
    console.log("ruta",ruta);
    let rutaValor = ruta.rutaValor;
    let tasaAero = (rutaValor)*0.04
    let tasaIva = (rutaValor)*0.16
    let valutotal = (tasaAero + tasaIva) + Number(rutaValor);
    let user = cliente.clienteName + " " + cliente.clienteApellido;
    let userId = cliente.clientenIDe;
    let rutaName = ruta.rutaNombre;
    let rutaPuntos = ruta.rutaPuntos;
    mostrarFactura.llenarCampos(user, userId, rutaName, rutaValor, tasaAero, tasaIva, valutotal, rutaPuntos);
    let clientePuntos = Number(cliente.clientePuntos) + Number(rutaPuntos)
    listaClientes[ventasCLiente].clientePuntos = clientePuntos;
    console.log(clientePuntos);
};
////////////////////////////////////////////////////////////////
// implementacion de recursos para seccion fidelizacion
function llenarCliFidelizacion (){
    const fidelizacionSelectCLiente  = document.getElementById("selectClientePuntos");
    fidelizacionSelectCLiente.innerHTML = "<option selected>Seleccione el Cliente</option>";
    listaClientes.forEach(element => {
        const conteOpCliente = document.createElement("option");
        const nodeOpCliente = document.createTextNode((element.clienteName));
        const valuOpCliente = listaClientes.indexOf(element);

        conteOpCliente.appendChild(nodeOpCliente);

        conteOpCliente.setAttribute("value", valuOpCliente);

        fidelizacionSelectCLiente.appendChild(conteOpCliente)
    });
};
function mostrarPuntos(){
    const cliente  = document.getElementById("selectClientePuntos").value;
    let puntos = listaClientes[cliente].clientePuntos;
    console.log("puntos",puntos);
    document.getElementById("mostrarPuntos").innerHTML = `${puntos} Puntos`;
};
document.getElementById("selectClientePuntos").addEventListener("mouseover", llenarCliFidelizacion);
document.getElementById("inPuntosMostrar").addEventListener("click", mostrarPuntos);



//funciones para localstorage
function guardarLocalStorage () {
    console.log("guardarlocal",JSON.stringify(listaClientes));
    localStorage.setItem("clientes", JSON.stringify(listaClientes));
    console.log("storageCliente",JSON.parse(localStorage.getItem("clientes")));
    localStorage.setItem("rutas",JSON.stringify(listaRutas));
    console.log("storageRutas",JSON.parse(localStorage.getItem("rutas")));
};
const leerLocalStorage = {
    localListaClientes: JSON.parse(localStorage.getItem("clientes")),
    localListaRutas: JSON.parse(localStorage.getItem("rutas"))
};
////////////////////////////////////////////////////////////////////////
//traeer informacion existente
function cargarInfo() {
    if (leerLocalStorage.localListaClientes != null) {
        console.log("lectura de local",leerLocalStorage.localListaClientes);
        leerLocalStorage.localListaClientes.forEach(element => {
            listaClientes.push(element)});
        };
    if (leerLocalStorage.localListaRutas != null) {
        leerLocalStorage.localListaRutas.forEach(element => {
            listaRutas.push(element)});
        }
};
////////////////////////////////////////////////////////////////
//llamado de funciones al iniciar
// carga de informacion
cargarInfo();
//carga de informacion en campos
mostrarClientes();
mostrarRutas();