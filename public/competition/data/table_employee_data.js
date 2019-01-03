var branchCollection = new BranchCollection();

var tableEmployeeData = {
  el: "#formTableEmployee",
  idTable: "tableEmployee",
  targetMensaje: "mensajeRptaEmployee",
  mensajes: {
    errorListarAjax: "Error en listar los datos del servidor",
    errorGuardarAjax: "Error en guardar los datos en el servidor",
    success: "Se cargado guardo los cambios en las sedes",
  },
  //urlListar: BASE_URL + "distrito/listar/" + provinciaId,
  urlGuardar: BASE_URL + "competition/employee/save",
  urlListar: BASE_URL + "competition/employee/list",
  fila: {
    id: { // llave de REST
      tipo: "td_id",
      estilos: "color: blue; display:none",
      edicion: false,
    },
    name: { // llave de REST
      tipo: "text",
      estilos: "width: 150px;",
      edicion: true,
    },
    dni: { // llave de REST
      tipo: "text",
      estilos: "width: 70px;",
      edicion: true,
    },
    address: { // llave de REST
      tipo: "text",
      estilos: "width: 200px;",
      edicion: true,
    },
    phone: { // llave de REST
      tipo: "text",
      estilos: "width: 100px;",
      edicion: true,
    },
    email: { // llave de REST
      tipo: "text",
      estilos: "width: 120px;",
      edicion: true,
    },
    branch_id: { // llave de REST
      tipo: "select",
      estilos: "width: 200px;",
      edicion: true,
      collection: branchCollection,
    },
    filaBotones: {
      estilos: "width: 80px"
    },
  },
  filaBotones: [
    {
      tipo: "i",
      claseOperacion: "quitar-fila",
      clase: "fa-times",
      estilos: "padding-left: 23px;",
    },
  ],
  tableKeys: ['id', 'name', 'dni', 'address', 'phone', 'email', 'branch_id'],
  collection: new EmployeeCollection(),
  model: "Employee",
};
