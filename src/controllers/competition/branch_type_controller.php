<?php

namespace Competition\Controller;

class BranchTypeController extends \Configs\Controller
{
  public function list($request, $response, $args) {
    $rpta = '';
    $status = 200;
    try {
      $rs = \Model::factory('\Models\Competition\BranchType', 'competition')
        ->find_array();
      $rpta = json_encode($rs);
    }catch (\Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
            'No se ha podido los tipos de sedes',
            $e->getMessage()
          ]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }
}
