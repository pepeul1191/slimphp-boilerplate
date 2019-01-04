var photoTemplate = _.template(`
  <div class="row">
    <div class="col-md-12" id="formTablePhoto">
      <h4>Fotos del Concurso</h4>
      <label class="texto-der" id="mensajeRptaPhoto"></label>
      <table class="table table-striped" style="" id="tablePhoto">
        <thead>
          <tr>
            <th style="width: 10px; display:none;">id</th>
            <th style="width: 150px;">Nombre</th>
            <th style="width: 70px;">DNI</th>
            <th style="width: 200px;">Dirección</th>
            <th style="width: 100px;">Teléfono</th>
            <th style="width: 120px;">Correo</th>
            <th style="width: 100px;">Sede</th>
            <th style="width: 60px; padding-left: 7px !important;">Botones</th>
          </tr>
        </thead>
        <tfoot>
        </tfoot>
      </table>
    </div>
  </div>
`);
