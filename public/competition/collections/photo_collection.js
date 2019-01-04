var PhotoCollection = Backbone.Collection.extend({
  model: Photo,
  fillModels: function(){
    var _this = this;
    $.ajax({
      type: "GET",
      url: BASE_URL + "competition/photo/list",
      data: {},
      headers: {
        [CSRF_KEY]: CSRF,
      },
      async: false,
      success: function(data){
        data = JSON.parse(data);
        if(data.length > 0){
          for(var i = 0; i < data.length; i++){
            var model = new Photo();
            model.set("address", data[i].address);
            model.set("branch_id", data[i].branch_id);
            model.set("branch_name", data[i].branch_name);
            model.set("branch_type_id", data[i].branch_type_id);
            model.set("branch_type_name", data[i].branch_type_name);
            model.set("created", data[i].created);
            model.set("description", data[i].description);
            model.set("dni", data[i].dni);
            model.set("email", data[i].email);
            model.set("file_name", data[i].file_name);
            model.set("id", data[i].id);
            model.set("name", data[i].name);
            model.set("phone", data[i].phone);
            model.set("title", data[i].title);
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
