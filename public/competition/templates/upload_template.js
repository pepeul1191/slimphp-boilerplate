var uploadTemplate = _.template(`
  <div class="col-md-12">
    <h1 class="text-uppercase text-md-center font-weight-bold color-primary">Ficha de Inscripción</h1>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="txtTitle">Título de la Obra</label>
          <input type="text" class="form-control" id="txtTitle" aria-describedby="emailHelp" placeholder="Ingrese el titulo de la obra" disabled>
          <small id="txtTitleHelp" class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label for="txtDescription">Breve Descripción de la Obra</label>
          <textarea class="form-control" rows="5" id="txtDescription" placeholder="Descripción de la foto a subir" disabled></textarea>
          <small id="txtDescriptionHelp" class="form-text text-muted"></small>
        </div>
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-link btn-large">
          <i class="fa fa-search" aria-hidden="true"></i>
          Seleccionar Archivo
        </button>
      </div>
      <div class="col-md-6">
        <button type="button" class="btn btn-link btn-large">
          <i class="fa fa-cloud-upload" aria-hidden="true"></i>
          Subir Archivo
        </button>
      </div>
      <div class="col-md-12">
        <button type="button" class="btn btn-large btn-primary">
          <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
          Enviar Inscripción
        </button>
      </div>
    </div>
  </div>
  <div class="col-md-12 text-md-center links">
    <a href="<%= BASE_URL %>competition/#/sign_in" class="link">ATRAS</a>
  </div>
`);
