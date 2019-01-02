var UploadView = Backbone.View.extend({
  el: '#workspace',
  initialize: function(){
  },
  events: {

  },
  //eventos table de permisos
  render: function(event){
    $(this.el).html(uploadTemplate({}));
  },
});
