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
    if(router.signInView == null || router.signInView.model.get("id") == "E"){
      $(this.messageLabel).html("Debe de llenar el formulario anterior");
      $(this.messageLabel).removeClass("text-success");
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
          $("#message").removeClass("text-success");
          $("#message").removeClass("text-danger");
          $("#message").addClass("text-warning");
				},
	      success: function(data) {
          _this.model.set("file_name", data);
          $("#submitSignIn").prop("disabled", false);
          $("#message").html("Se subió el archivo al servidor");
          $("#message").removeClass("text-danger");
          $("#message").removeClass("text-warning");
          $("#message").addClass("text-success");
	      },
        error: function(xhr, status, error){
          console.error(error);
  				var m = JSON.parse(xhr.responseText);
  				console.log(m);
          $("#message").html("Ocurrió un error subiendo el archivo");
          $("#message").removeClass("text-success");
          $("#message").removeClass("text-warning");
          $("#message").addClass("text-danger");
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
          $("#message").html("Se ha registrado su participation en el concurso");
          $("#message").removeClass("text-danger");
          $("#message").removeClass("text-warning");
          $("#message").addClass("text-success");
          router.signInView.model.clear().set(router.signInView.model.defaults);
          _this.model.clear().set(_this.model.defaults);
          window.setTimeout(function(){
            window.location.href = BASE_URL + "competition/#/";
          }, 3000);
	      },
        error: function(xhr, status, error){
          console.error(error);
  				var m = JSON.parse(xhr.responseText);
  				console.log(m);
          $("#message").html("Ocurrió un error registrar su participación en el concurso");
          $("#message").removeClass("text-success");
          $("#message").removeClass("text-warning");
          $("#message").addClass("text-danger");
        }
	    });
    }else{
      return false;
    }
  },
});
