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

  public function dni($request, $response, $args) {
    $rpta = '';
    $status = 200;
    $dni = $request->getQueryParam('dni');
    try {
      $rs = \Model::factory('\Models\Competition\Employee', 'competition')
        ->where('dni', $dni)
        ->find_one();
      if($rs == false){
        throw new \Exception('No existe empleado registrado con dicho DNI');
      }else{
        $temp = [];
        $temp["id"] = $rs->id;
        $temp["name"] = utf8_encode($rs->name);
        $temp["dni"] = $rs->dni;
        $temp["address"] = $rs->address;
        $temp["phone"] = $rs->phone;
        $temp["email"] = $rs->email;
        $temp["branch_id"] = $rs->branch_id;
        $rpta = json_encode($temp);
      }
    }catch (\Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
            'No se ha podido buscar al empleado. ',
            $e->getMessage()
          ]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }
}
