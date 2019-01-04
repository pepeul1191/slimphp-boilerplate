var tablePhotoData = {
  el: "#formTablePhoto",
  idTable: "tablePhoto",
  targetMensaje: "mensajeRptaPhoto",
  mensajes: {
    errorListarAjax: "Error en listar los datos del servidor",
    errorGuardarAjax: "Error en guardar los datos en el servidor",
    success: "Se cargado guardo los cambios en las sedes",
  },
  //urlListar: BASE_URL + "distrito/listar/" + provinciaId,
  urlGuardar: "",//BASE_URL + "competition/employee/save",
  urlListar: BASE_URL + "competition/photo/list",
  fila: {
    photo_id: { // llave de REST
      tipo: "td_id",
      estilos: "color: blue; display:none",
      edicion: false,
    },
    name: { // llave de REST
      tipo: "label",
      estilos: "width: 150px;",
      edicion: true,
    },
    dni: { // llave de REST
      tipo: "label",
      estilos: "width: 70px;",
      edicion: true,
    },
    address: { // llave de REST
      tipo: "label",
      estilos: "width: 200px;",
      edicion: true,
    },
    phone: { // llave de REST
      tipo: "label",
      estilos: "width: 100px;",
      edicion: true,
    },
    email: { // llave de REST
      tipo: "label",
      estilos: "width: 120px;",
      edicion: true,
    },
    branch_name: { // llave de REST
      tipo: "label",
      estilos: "width: 200px;",
      edicion: true,
    },
    filaBotones: {
      estilos: "width: 80px"
    },
  },
  filaBotones: [
    {
      tipo: "i",
      claseOperacion: "photo",
      clase: "fa-picture-o",
      estilos: "padding-left: 23px;",
    },
  ],
  tableKeys: ['photo_id', 'name', 'dni', 'address', 'phone', 'email', 'branch_name'],
  collection: new PhotoCollection(),
  model: "Photo",
};
