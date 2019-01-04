<?php

namespace Competition\Controller;

class PhotoController extends \Configs\Controller
{
  public function list($request, $response, $args) {
    $rpta = '';
    $status = 200;
    try {
      $rs = \Model::factory('\Models\Competition\VWPhotoEmployee', 'competition')
        ->find_array();
      $rpta = json_encode($rs);
    }catch (\Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
            'Se produjo un error en listar los archivos',
            $e->getMessage()
          ]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }
}
