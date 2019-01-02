var UploadView = Backbone.View.extend({
  el: '#workspace',
  fileInput: "#fileInput",
  fileMaxSize: 3545850, //bytes
  initialize: function(){

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
    if(file.size < this.fileMaxSize){
      var _this = this;
      $.ajax({
	      type: "POST",
				url: BASE_URL + "competition/photo/upload",
				headers: {
					[CSRF_KEY]: CSRF,
				},
	      data: formData,
	      //use contentType, processData for sure.
	      contentType: false,
	      processData: false,
	      beforeSend: function() {
	        $("#" + viewInstance.subirBtnId).attr("disabled", "true");
					$("#" + viewInstance.lblMensaje).html("Subiendo");
				},

	      success: function(data) {
	        var data = JSON.parse(data);
					$("#" + viewInstance.lblMensaje).html(viewInstance.mensajes["success"]);
	        $("#" + viewInstance.subirBtnId).removeAttr("disabled");
					$("#" + viewInstance.verBtnId).attr("href", data["mensaje"][2]);
					$("#" + viewInstance.lblMensaje).removeClass("color-danger");
					$("#" + viewInstance.lblMensaje).removeClass("color-warning");
					$("#" + viewInstance.lblMensaje).addClass("color-success");
					$("#" + viewInstance.verBtnId).attr("disabled", false);
					// setear modelo
					//viewInstance.model.set("id", data["mensaje"][1]);
		      			viewInstance.model.set("file_id", data["mensaje"]["file_id"]);
					viewInstance.model.set("file_url", data["mensaje"]["file_url"])
					for(var i = 0; i < viewInstance.extraData.length; i++){
						var extra_data = viewInstance.model.get("extra_data");
						extra_data[viewInstance.extraData[i]["llave"]] = $("#" + viewInstance.extraData[i]["domId"]).val();
			      viewInstance.model.set("extra_data", extra_data);
			    }
	      },
	      error: function(error) {
	        console.log(error);
	        $("#" + viewInstance.subirBtnId).removeAttr("disabled");
	      }
	    });
    }else{
      alert("Tamaño de archivos supera el máximo permitido( " + file.size + "mb)")
    }
  },
});
