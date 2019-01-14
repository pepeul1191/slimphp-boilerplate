var SignInView = Backbone.View.extend({
  el: '#workspace',
  branches: null,
  messageLabel: "#message",
  initialize: function(){
    this.branches = new BranchCollection();
    this.branches.fillModels();
    this.model = new Employee();
  },
  events: {
    "focusout #txtDni":"searchEmployee",
    "click #btnNext":"goUpload",
  },
  //eventos table de permisos
  render: function(event){
    var employee = this.model;
    $(this.el).html(signInTemplate({
      branches: this.branches,
      branch_id: 123213,
      employee: employee,
    }));
    if(employee.get("id") != "E"){
      $("#txtDni").prop("disabled", false);
      $("#slcBranch").prop("disabled", false);
      $("#txtAddress").prop("disabled", false);
      $("#txtPhone").prop("disabled", false);
      $("#txtEmail").prop("disabled", false);
      $("#txtName").prop("disabled", false);
      $("#txtName").focus();
    }
  },
  searchEmployee: function(event){
    var dni = event.target.value;
    var _this = this;
    $.ajax({
      type: "GET",
      url: BASE_URL + "competition/employee/dni?dni=" + dni,
      data: {},
      headers: {
        [CSRF_KEY]: CSRF,
      },
      async: false,
      success: function(data){
        $(_this.messageLabel).html("");
        $(_this.messageLabel).removeClass("text-danger");
        $(_this.messageLabel).addClass("text-success");
        $("#txtDni").prop("disabled", false);
        $("#slcBranch").prop("disabled", false);
        $("#txtAddress").prop("disabled", false);
        $("#txtPhone").prop("disabled", false);
        $("#txtEmail").prop("disabled", false);
        $("#txtName").prop("disabled", false);
        $("#txtName").focus();
        data = JSON.parse(data);
        if (data != []){
          _this.model.set("id", data.id);
          _this.model.set("name", data.name);
          _this.model.set("dni", data.dni);
          _this.model.set("address", data.address);
          _this.model.set("phone", data.phone);
          _this.model.set("email", data.email);
          _this.model.set("branch_id", data.branch_id);
          $("#slcBranch").val(data.branch_id);
          $("#txtDni").val(data.dni);
          $("#txtName").val(data.name);
          $("#txtAddress").val(data.address);
          $("#txtPhone").val(data.phone);
          $("#txtEmail").val(data.email);
        }else{
          _this.model.set("id", "E");
        }
      },
      error: function(xhr, status, error){
        console.error(error);
        var m = JSON.parse(xhr.responseText);
        console.log(m);
        $(_this.messageLabel).html(m["mensaje"][0] + m["mensaje"][1]);
        $(_this.messageLabel).removeClass("text-sucess");
        $(_this.messageLabel).addClass("text-danger");
        $('html, body').animate({
          scrollTop: ($("h1").offset().top)
        },500);
        $("#txtDni").focus();
      }
    });
    $("#txtDni").val(dni);
  },
  goUpload: function(event){
    var _continue = true;
    if ($("#txtDni").val() == ""){
      $("#txtDniHelp").html("Debe ingresar su DNI");
      $("#txtDni").addClass("input-error");
      _continue = false;
    }else{
      $("#txtDniHelp").html("");
      $("#txtDni").removeClass("input-error");
    }
    if ($("#txtName").val() == ""){
      $("#txtNameHelp").html("Debe ingresar su nombre");
      $("#txtName").addClass("input-error");
      _continue = false;
    }else{
      $("#txtNameHelp").html("");
      $("#txtName").removeClass("input-error");
    }
    if ($("#txtAddress").val() == ""){
      $("#txtAddressHelp").html("Debe ingresar su dirección");
      $("#txtAddress").addClass("input-error");
      _continue = false;
    }else{
      $("#txtAddressHelp").html("");
      $("#txtAddress").removeClass("input-error");
    }
    if ($("#txtPhone").val() == ""){
      $("#txtPhoneHelp").html("Debe ingresar su teléfono");
      $("#txtPhone").addClass("input-error");
      _continue = false;
    }else{
      $("#txtPhoneHelp").html("");
      $("#txtPhone").removeClass("input-error");
    }
    if ($("#txtEmail").val() == ""){
      $("#txtEmailHelp").html("Debe ingresar su correo");
      $("#txtEmail").addClass("input-error");
      _continue = false;
    }else{
      $("#txtEmailHelp").html("");
      $("#txtEmail").removeClass("input-error");
    }
    if ($("#slcBranch").val() == "E"){
      $("#txtBranchHelp").html("Debe la sede dónde trabaja");
      $("#slcBranch").addClass("input-error");
      _continue = false;
    }else{
      $("#txtBranchHelp").html("");
      $("#slcBranch").removeClass("input-error");
    }
    if(_continue == true){
      this.model.set("name", $("#txtName").val());
      this.model.set("dni", $("#txtDni").val());
      this.model.set("address", $("#txtAddress").val());
      this.model.set("phone", $("#txtPhone").val());
      this.model.set("email", $("#txtEmail").val());
      this.model.set("branch_id", $("#slcBranch").val());
    }else{
      return false;
    }
  },
});
