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
});

$(document).ready(function(){
  router = new adminRouter();
  Backbone.history.start();
});
