var signInTemplate = _.template(`
  <div class="col-md-12">
    <h1 class="text-uppercase text-md-center font-weight-bold color-primary">Ficha de Inscripción</h1>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="txtDni">DNI</label>
          <input type="text" class="form-control" id="txtDni" aria-describedby="emailHelp" placeholder="Ingrese su DNI">
          <small id="txtDniHelp" class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="txtName">Nombre Completo</label>
          <input type="text" class="form-control" id="txtName" aria-describedby="emailHelp" placeholder="" disabled>
          <small id="txtNameHelp" class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="txtDni">Sede</label>
          <select class="custom-select" id="slcBranch" disabled>
            <option selected>Seleccione una sede...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <small id="txtBranchHelp" class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="txtAddress">Dirección</label>
          <textarea class="form-control" rows="2" id="txtAddress" placeholder="Ingrese su dirección" disabled></textarea>
          <small id="txtAddressHelp" class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="txtPhone">Teléfono</label>
          <input type="text" class="form-control" id="txtPhone" aria-describedby="emailHelp" placeholder="Ingrese su teléfono" disabled>
          <small id="txtPhoneHelp" class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="txtEmail">Email</label>
          <input type="email" class="form-control" id="txtEmail" aria-describedby="emailHelp" placeholder="Ingrese su correo" disabled>
          <small id="txtEmailHelp" class="form-text text-muted"></small>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-12 text-md-center links">
    <a href="<%= BASE_URL %>competition/#/" class="link">INICIO</a>
    <a href="<%= BASE_URL %>competition/#/upload" class="link">SIGUIENTE</a>
  </div>
`);
