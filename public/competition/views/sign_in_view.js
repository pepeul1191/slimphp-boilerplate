var SignInView = Backbone.View.extend({
  el: '#workspace',
  branches: null,
  initialize: function(){
    this.branches = new BranchCollection();
    this.branches.fillModels();
  },
  events: {
    "focusout #txtDni":"searchEmployee",
  },
  //eventos table de permisos
  render: function(event){
    $(this.el).html(signInTemplate({
      branches: this.branches,
      branch_id: 123213,
    }));
  },
  searchEmployee: function(event){
    console.log(event.target.value);
  },
});
