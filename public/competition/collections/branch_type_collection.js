var BranchTypeCollection = Backbone.Collection.extend({
  model: BranchType,
  fillModels: function(){
    var _this = this;
    $.ajax({
      type: "GET",
      url: BASE_URL + "competition/branch_type/list",
      data: {},
      headers: {
        [CSRF_KEY]: CSRF,
      },
      async: false,
      success: function(data){
        data = JSON.parse(data);
        if(data.length > 0){
          for(var i = 0; i < data.length; i++){
            var model = new Branch();
            model.set("id", data[i].id);
            model.set("nombre", data[i].name.toUpperCase());
            _this.models.push(model);
          }
        }
      },
      error: function(xhr, status, error){
        console.error(error);
        var m = JSON.parse(xhr.responseText);
        console.log(m);
      }
    });
  },
  obtenerModels: function(){
    return this.models;
  },
});
