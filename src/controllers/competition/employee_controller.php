<?php

namespace Competition\Controller;

class EmployeeController extends \Configs\Controller
{
  public function photoUpload($request, $response, $args) {
    $rpta = '';
    $status = 200;
    $this->load_helper('competition/employee');
    try {
      $files = $request->getUploadedFiles();
      $file = $files['file'];
      $directory = $this->constants['path'] . '/public/competition/uploads/';
      $extension = pathinfo($file->getClientFilename(), PATHINFO_EXTENSION);
      $base_name = randito(30);
      $file_name = sprintf('%s.%0.8s', $base_name, $extension);
      $file->moveTo($directory . $file_name);
      $rpta = $file_name;
    }catch (\Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
            'Se produjo un error en subir el archivo',
            $e->getMessage()
          ]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }
}
