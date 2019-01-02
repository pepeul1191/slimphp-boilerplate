var signInTemplate = _.template(`
  <div class="col-md-12">
    <h1 class="text-uppercase text-md-center font-weight-bold color-primary">Ficha de Inscripción</h1>
    <div class="row">
      <div class="col-md-12">
        <label id="message"></label>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="txtDni">DNI</label>
          <input type="text" class="form-control" id="txtDni" aria-describedby="txtDniHelp" placeholder="Ingrese su DNI">
          <small id="txtDniHelp" class="form-text text-danger text-muted"></small>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="txtName">Nombre Completo</label>
          <input type="text" class="form-control" id="txtName" aria-describedby="txtNameHelp" placeholder="" disabled>
          <small id="txtNameHelp" class="form-text text-danger text-muted"></small>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="slcBranch">Sede</label>
          <select class="custom-select" id="slcBranch" disabled>
            <option value="E" selected>Seleccione una sede...</option>
            <% branches.each(function(model){ %>
              <% //if (model.get('id') == branch_id) { %>
              <option value="<%= model.get('id') %>"><%= model.get('name') %></option>
              <% //} else { %>
                <option value="<%= model.get('id') %>"><%= model.get('name') %></option>
              <% //} %>
            <% }) %>
          </select>
          <small id="txtBranchHelp" class="form-text text-danger text-muted"></small>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="txtAddress">Dirección</label>
          <textarea class="form-control" rows="2" id="txtAddress" placeholder="Ingrese su dirección" disabled></textarea>
          <small id="txtAddressHelp" class="form-text text-danger text-muted"></small>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="txtPhone">Teléfono</label>
          <input type="text" class="form-control" id="txtPhone" aria-describedby="txtPhoneHelp" placeholder="Ingrese su teléfono" disabled>
          <small id="txtPhoneHelp" class="form-text text-danger text-muted"></small>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="txtEmail">Email</label>
          <input type="email" class="form-control" id="txtEmail" aria-describedby="txtEmailHelp" placeholder="Ingrese su correo" disabled>
          <small id="txtEmailHelp" class="form-text text-danger text-muted"></small>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-12 text-md-center links">
    <a href="<%= BASE_URL %>competition/#/" class="link" id="btnHome">INICIO</a>
    <a href="<%= BASE_URL %>competition/#/upload" class="link" id="btnNext">SIGUIENTE</a>
  </div>
`);
