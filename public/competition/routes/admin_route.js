var adminRouter = Backbone.Router.extend({
  branchView: null,
  employeeView: null,
  photoView: null,
  initialize: function() {

  },
  routes: {
    "": "branch",
    "branch": "branch",
    "employee": "employee",
    "photo": "photo",
    "download": "download",
    "*actions" : "default",
  },
  default: function() {
    // window.location.href = BASE_URL + "competition/admin/#/";
  },
  branch: function(){
    if(this.branchView == null){
      this.branchView = new BranchView();
    }
    this.branchView.render();
    branchTypeCollection.fillModels();
    this.branchView.table.listar();
  },
  employee: function(){
    if(this.employeeView == null){
      this.employeeView = new EmployeeView();
    }
    this.employeeView.render();
    branchCollection.fillModelsTable();
    this.employeeView.table.listar();
  },
  photo: function(){
    if(this.photoView == null){
      this.photoView = new PhotoView();
    }
    //this.photoView.getPhotos();
    this.photoView.render();
    this.photoView.table.listar();
  },
  download: function(){
    $.ajax({
      type: "GET",
      url: BASE_URL + "competition/photo/download",
      data: {},
      headers: {
        [CSRF_KEY]: CSRF,
      },
      async: false,
      success: function(data){
        var url = data;
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = "blob";
        req.onload = function (event) {
          var blob = req.response;
          var link=document.createElement('a');
          link.href=window.URL.createObjectURL(blob);
          link.download="fotos.zip";
          link.click();
        };
        req.send();
      },
      error: function(xhr, status, error){
        console.error(error);
        var m = JSON.parse(xhr.responseText);
        console.log(m);
        alert("Ups, ocurrió un error en descargar las fotos del concurso");
      }
    });
    window.location.href = BASE_URL + "competition/admin/#/";
  },
});

$(document).ready(function(){
  router = new adminRouter();
  Backbone.history.start();
});
