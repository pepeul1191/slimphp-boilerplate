var SignInView = Backbone.View.extend({
  el: '#workspace',
  branches: null,
  initialize: function(){
    this.branches = new BranchCollection();
    this.branches.fillModels();
  },
  events: {
    "click .close": "modalClose",
  },
  //eventos table de permisos
  render: function(event){
    var _this = this;
    console.log(_this.branches.get(1));
    $(this.el).html(signInTemplate({
      branches: _this.branches,
      branch_id: 123213,
    }));
  },
});
