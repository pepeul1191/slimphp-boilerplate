var branchTypeCollection = new BranchTypeCollection();
branchTypeCollection.fillModels();

var tableBranchData = {
  el: "#formTableBranch",
  idTable: "tableBranch",
  targetMensaje: "mensajeRptaBranch",
  mensajes: {
    errorListarAjax: "Error en listar los datos del servidor",
    errorGuardarAjax: "Error en guardar los datos en el servidor",
    success: "Se cargado guardo los cambios en las sedes",
  },
  //urlListar: BASE_URL + "distrito/listar/" + provinciaId,
  urlGuardar: BASE_URL + "competition/branch/save",
  urlListar: BASE_URL + "competition/branch/list",
  fila: {
    id: { // llave de REST
      tipo: "td_id",
      estilos: "color: blue; display:none",
      edicion: false,
    },
    name: { // llave de REST
      tipo: "text",
      estilos: "width: 200px;",
      edicion: true,
    },
    branch_type_id: { // llave de REST
      tipo: "select",
      estilos: "width: 125px;",
      edicion: true,
      collection: branchTypeCollection,
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
  tableKeys: ['id', 'name', 'branch_type_id'],
  collection: new BranchCollection(),
  model: "Branch",
};
