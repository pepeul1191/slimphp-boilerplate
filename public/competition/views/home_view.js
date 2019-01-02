var HomeView = Backbone.View.extend({
  el: '#workspace',
  initialize: function(){
  },
  events: {
    "click .close": "modalClose",
  },
  //eventos table de permisos
  render: function(event){
    $(this.el).html(homeTemplate({}));
  },
});
