var UploadView = Backbone.View.extend({
  el: '#workspace',
  fileInput: "#fileInput",
  fileUpload: "#fileUpload",
  messageLabel: "#message",
  fileMaxSize: 3545850, //bytes
  initialize: function(){
    this.model = new Photo();
  },
  events: {
    "click #fileSelect": "fileSelect",
    "click #fileUpload": "fileUpload",
  },
  //eventos table de permisos
  render: function(event){
    $(this.el).html(uploadTemplate({}));
  },
  fileSelect: function(event){
    $(this.fileInput).click();
  },
  fileUpload: function(event){
    var formData = new FormData();
    var file = $(this.fileInput)[0].files[0];
    formData.append("file",file);
    if(file.size < this.fileMaxSize){
      var _this = this;
      $.ajax({
	      type: "POST",
        cache: false,
        contentType: false,
        processData: false,
				url: BASE_URL + "competition/employee/photo_upload",
				headers: {
					[CSRF_KEY]: CSRF,
				},
	      data: formData,
	      //use contentType, processData for sure.
	      contentType: false,
	      processData: false,
	      beforeSend: function() {
	        // $(_this.fileUpload).attr("disabled", "true");
					// $(_this.messageLabel).html("Subiendo");
				},
	      success: function(data) {
          _this.model.set("file_name", data);
          console.log(_this.model);
	      },
        error: function(xhr, status, error){
          console.error(error);
  				var m = JSON.parse(xhr.responseText);
  				console.log(m);
          $(_this.messageLabel).html("Ocurrió un error subiendo el archivo");
          $(_this.messageLabel).removeClass("text-sucess");
          $(_this.messageLabel).addClass("text-danger");
        }
	    });
    }else{
      alert("Tamaño de archivos supera el máximo permitido( " + file.size + "mb)")
    }
  },
});
