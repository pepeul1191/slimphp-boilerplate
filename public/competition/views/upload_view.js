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
    "click #submitSignIn": "submitSignIn",
  },
  //eventos table de permisos
  render: function(event){
    $(this.el).html(uploadTemplate({}));
    if(router.signInView == null){
      $(this.messageLabel).html("Debe de llenar el formulario anterior");
      $(this.messageLabel).removeClass("text-sucess");
      $(this.messageLabel).addClass("text-danger");
    }else{
      $("#txtTitle").prop("disabled", false);
      $("#txtDescription").prop("disabled", false);
      $("#fileSelect").prop("disabled", false);
    }
  },
  fileSelect: function(event){
    $(this.fileInput).click();
    $("#fileUpload").prop("disabled", false);
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
					$("#message").html("Subiendo");
          $("#message").addClass("text-warning");
				},
	      success: function(data) {
          _this.model.set("file_name", data);
          $("#submitSignIn").prop("disabled", false);
          $("#message").html("");
	      },
        error: function(xhr, status, error){
          console.error(error);
  				var m = JSON.parse(xhr.responseText);
  				console.log(m);
          $(_this.messageLabel).html("Ocurrió un error subiendo el archivo");
          $(_this.messageLabel).removeClass("text-sucess");
          $(_this.messageLabel).addClass("text-danger");
          $("#submitSignIn").prop("disabled", true);
        }
	    });
    }else{
      alert("Tamaño de archivos supera el máximo permitido( " + file.size + "mb)")
    }
  },
  submitSignIn: function(){
    var _continue = true;
    if ($("#txtTitle").val() == ""){
      $("#txtTitleHelp").html("Debe ingresar el título de foto");
      $("#txtTitle").addClass("input-error");
      _continue = false;
    }else{
      $("#txtTitleHelp").html("");
      $("#txtTitle").removeClass("input-error");
    }
    if ($("#txtDescription").val() == ""){
      $("#txtDescriptionHelp").html("Debe ingresar la descripción de su foto");
      $("#txtDescription").addClass("input-error");
      _continue = false;
    }else{
      $("#txtDescriptionHelp").html("");
      $("#txtDescription").removeClass("input-error");
    }
    if(_continue == true){
      this.model.set("title", $("#txtTitle").val());
      this.model.set("description", $("#txtDescription").val());
      var participation = {};
      participation.employee = router.signInView.model.toJSON();
      participation.upload = this.model.toJSON();
      var _this = this;
      $.ajax({
	      type: "POST",
				url: BASE_URL + "competition/employee/participate",
				headers: {
					[CSRF_KEY]: CSRF,
				},
	      data: "data=" + JSON.stringify(participation),
	      async: false,
	      success: function(data) {
          console.log(data);
	      },
        error: function(xhr, status, error){
          console.error(error);
  				var m = JSON.parse(xhr.responseText);
  				console.log(m);
        }
	    });
    }else{
      return false;
    }
  },
});
