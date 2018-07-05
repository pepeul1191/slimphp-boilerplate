<?php

require_once 'src/models/departamento.php';

class DepartamentoController extends Controller
{
  public function listar($request, $response, $args) {
    $rpta = '';
    $status = 200;
    try {
      $rs = Model::factory('Departamentos', 'ubicaciones')
      	->select('id')
      	->select('nombre')
      	->find_array();
      $rpta = json_encode($rs);
    }catch (Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
  					'No se ha podido listar los departamentos',
  					$e->getMessage()
  				]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }
}
