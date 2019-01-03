var adminRouter = Backbone.Router.extend({
  branchView: null,
  employeeView: null,
  participantView: null,
  initialize: function() {

  },
  routes: {
    "": "branch",
    "branch": "branch",
    "employee": "employee",
    "participant": "participant",
    "*actions" : "default",
  },
  default: function() {
    window.location.href = BASE_URL + "competition/admin/#/";
  },
  branch: function(){
    if(this.branchView == null){
      this.branchView = new BranchView();
    }
    this.branchView.render();
    this.branchView.table.listar();
  },
  employee: function(){
    if(this.employeeView == null){
      this.employeeView = new EmployeeView();
    }
    this.employeeView.render();
  },
  participant: function(){
    if(this.participantView == null){
      this.participantView = new ParticipantView();
    }
    this.participantView.render();
  },
});

$(document).ready(function(){
  router = new adminRouter();
  Backbone.history.start();
});
