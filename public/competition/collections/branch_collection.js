var BranchCollection = Backbone.Collection.extend({
  model: Branch,
  fillModels: function(){
    var _this = this;
    $.ajax({
      type: "GET",
      url: BASE_URL + "competition/branch/list",
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
            model.set("name", data[i].name + ", " + data[i].branch_type_name.toUpperCase());
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
  fillModelsTable: function(){
    var _this = this;
    $.ajax({
      type: "GET",
      url: BASE_URL + "competition/branch/list",
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
            model.set("nombre", data[i].name + ", " + data[i].branch_type_name.toUpperCase());
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
});
