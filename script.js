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
var listaClientes = [];
document.getElementById("btnAgregarCliente").addEventListener("click",agregarCliente);
document.getElementById("btnDeleteCliente").addEventListener("click",eliminarClienteCliente);

function agregarCliente (){
    const clientenIDe = document.getElementById("formNumIde").value;
    const clienteName = document.getElementById("formNombres").value;
    const clienteApellido = document.getElementById("formApellidos").value;
    const clienteTel = document.getElementById("formTel").value;
    const clienteEmail = document.getElementById("formCorreo").value;
    const clienteBirthday = document.getElementById("formBirthday").value;
    const clienteNacionalidad = document.getElementById("formNacionalidad").value;
    const cliente = new Map ([
        ["clientenIDe", clientenIDe],
        ["clienteName", clienteName],
        ["clienteApellido", clienteApellido],
        ["clienteTel", clienteTel],
        ["clienteEmail", clienteEmail],
        ["clienteBirthday", clienteBirthday],
        ["clienteNacionalidad", clienteNacionalidad],
        ["clientePuntos", 0],
    ]);
    alert(`Se guardara el cliente ${clienteName} ${clienteApellido} en el registro`);
    listaClientes.push(cliente);
    console.log("consoleAgregarCliente",listaClientes)
    guardarLocalStorage();
    mostrarClientes();
    llenarCampos();
};
function eliminarClienteCliente (){
    const eliminarCliente = document.getElementById("inputIdCliente").value;
    alert(`Se eliminarClientea al cliente ${listaClientes[eliminarCliente].get("clienteName")} ${listaClientes[eliminarCliente].get("clienteApellido")} del registro`);
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
        const numIden = element.get("clientenIDe");
        const name = element.get("clienteName");
        const apellido = element.get("clienteApellido");
        const tel = element.get("clienteTel");
        const email = element.get("clienteEmail");
        const birthday = element.get("clienteBirthday");
        const nacionalidad = element.get("clienteNacionalidad");
        console.log(element)
        //llamar funcion para crear cada row
        crearRowCliente(nIDe, numIden, name, apellido, tel, email, birthday, nacionalidad);
    });
};
////////////////////////////////////////////////////////////////

// implementacion de recursos para seccion rutas
const listaRutas = [];
document.getElementById("btnAgregarRuta").addEventListener("click",agregarRuta);
document.getElementById("btnDeleteRuta").addEventListener("click",eliminarRuta);

function agregarRuta (){
    const rutaNombre = document.getElementById("formNombreRuta").value;
    const rutaValor = document.getElementById("formValorTiquete").value;
    const rutaOrigen = document.getElementById("formCityOrigen").value;
    const rutaDestino = document.getElementById("formCityDestino").value;
    const rutaPuntos = document.getElementById("formPuntosFideli").value;
    const ruta = new Map ([
        ["rutaNombre", rutaNombre],
        ["rutaValor", rutaValor],
        ["rutaOrigen", rutaOrigen],
        ["rutaDestino", rutaDestino],
        ["rutaPuntos", rutaPuntos],
    ]);
    alert(`Se guardara la ruta ${rutaNombre} en el registro`);
    listaRutas.push(ruta);
    console.log("consoleAgregarRuta",listaRutas)
    mostrarRutas();
    llenarCampos();
};

function eliminarRuta (){
    const eliminarRuta = document.getElementById("inputIdCliente").value;
    alert(`Se eliminarClientea al cliente ${listaClientes[eliminarRuta].get("clienteName")} ${listaClientes[eliminarCliente].get("clienteApellido")} del registro`);
    listaClientes.splice(eliminarRuta,1);
    console.log("consoleeliminarClienteCliente",listaClientes);
    mostrarClientes();
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
        const nameRuta = element.get("rutaNombre");
        const valueRuta = element.get("rutaValor");
        const originRuta = element.get("rutaOrigen");
        const destinoRuta = element.get("rutaDestino");
        const puntosRuta = element.get("rutaPuntos");
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
        const nodeOpCliente = document.createTextNode((element.get("clienteName")));
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
        const nodeOpRuta = document.createTextNode((element.get("rutaNombre")));
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
    let rutaValor = ruta.get("rutaValor");
    let tasaAero = (rutaValor)*0.04
    let tasaIva = (rutaValor)*0.16
    let valutotal = (tasaAero + tasaIva) + Number(rutaValor);
    let user = cliente.get("clienteName") + " " + cliente.get("clienteApellido");
    let userId = cliente.get("clientenIDe");
    let rutaName = ruta.get("rutaNombre");
    let rutaPuntos = ruta.get("rutaPuntos");
    mostrarFactura.llenarCampos(user, userId, rutaName, rutaValor, tasaAero, tasaIva, valutotal, rutaPuntos);
    let clientePuntos = Number(cliente.get("clientePuntos")) + Number(rutaPuntos)
    listaClientes[ventasCLiente].set("clientePuntos", clientePuntos);
    console.log(clientePuntos);
};
////////////////////////////////////////////////////////////////
function llenarCliFidelizacion (){
    const fidelizacionSelectCLiente  = document.getElementById("selectClientePuntos");
    fidelizacionSelectCLiente.innerHTML = "<option selected>Seleccione el Cliente</option>";
    listaClientes.forEach(element => {
        const conteOpCliente = document.createElement("option");
        const nodeOpCliente = document.createTextNode((element.get("clienteName")));
        const valuOpCliente = listaClientes.indexOf(element);

        conteOpCliente.appendChild(nodeOpCliente);

        conteOpCliente.setAttribute("value", valuOpCliente);

        fidelizacionSelectCLiente.appendChild(conteOpCliente)
    });
};
function mostrarPuntos(){
    const cliente  = document.getElementById("selectClientePuntos").value;
    let puntos = listaClientes[cliente].get("clientePuntos");
    console.log("puntos",puntos);
    document.getElementById("mostrarPuntos").innerHTML = `${puntos} Puntos`;
};
document.getElementById("selectClientePuntos").addEventListener("mouseover", llenarCliFidelizacion);
document.getElementById("inPuntosMostrar").addEventListener("click", mostrarPuntos);

// implementacion de recursos para seccion fidelizacion
//llamado de funciones al iniciar
mostrarClientes();
mostrarRutas();
//funciones para localstorage
function guardarLocalStorage () {
    console.log("guardarlocal",JSON.stringify(listaClientes));
    localStorage.setItem("clientes", JSON.stringify(listaClientes));
    console.log("storageCliente",JSON.parse(localStorage.getItem("clientes")));
    localStorage.setItem("rutas",JSON.stringify(listaRutas));
    console.log("storageRutas",JSON.parse(localStorage.getItem("rutas")));
};
function leerLocalStorage () {
    listaClientes = JSON.parse(localStorage.getItem("clientes"));
    listaRutas = JSON.parse(localStorage.getItem("rutas"));
};

