var branchTemplate = _.template(`
  <div class="row">
    <div class="col-md-6" id="formTableBranch">
      <h4>Gestión de Sedes</h4>
      <label class="texto-der" id="mensajeRptaBranch"></label>
      <table class="table table-striped" style="" id="tableBranch">
        <thead>
          <tr>
            <th style="width: 10px; display:none;">id</th>
            <th style="width: 200px;">Nombre</th>
            <th style="width: 100px;">Tipo de Sede</th>
            <th style="width: 60px; padding-left: 7px !important;">Botones</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colspan="1000" style="text-align:right">
              <button class="btn btn-default agregar-fila"> <i class="fa fa-plus" style="margin-right:5px"></i>Agregar Registro</button>
              <button class="btn btn-default guardar-tabla"> <i class="fa fa-check" style="margin-right:5px"></i>Guardar Cambios</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
`);
