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

  public function participate($request, $response, $args) {
    $rpta = '';
    $status = 200;
    try {
      $participation = json_decode($request->getParam('data'));
      // update employee
      $employee = \Model::factory('\Models\Competition\Employee', 'competition')
        ->where('id', $participation->{'employee'}->{'id'})
        ->find_one();
      $employee->dni = $participation->{'employee'}->{'dni'};
      $employee->address = $participation->{'employee'}->{'address'};
      $employee->phone = $participation->{'employee'}->{'phone'};
      $employee->email = $participation->{'employee'}->{'email'};
      $employee->branch_id = $participation->{'employee'}->{'branch_id'};
      $employee->save();
      // update photo
      $photo = \Model::factory('\Models\Competition\Photo', 'competition')
        ->where('employee_id', $participation->{'employee'}->{'id'})
        ->find_one();
      if($photo == false){
        # create photo
        $new_photo = \Model::factory('\Models\Competition\Photo', 'competition')
          ->create();
        $new_photo->title = $participation->{'upload'}->{'title'};
        $new_photo->description = $participation->{'upload'}->{'description'};
        $new_photo->employee_id = $participation->{'employee'}->{'id'};
        $new_photo->file_name = $participation->{'upload'}->{'file_name'};
        $new_photo->save();
      }else{
        # update photo
        $photo->title = $participation->{'upload'}->{'title'};
        $photo->description = $participation->{'upload'}->{'description'};
        $photo->file_name = $participation->{'upload'}->{'file_name'};
        $photo->save();
      }
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'success',
          'mensaje' => [
            'Se ha registrado su participación',
          ]
        ]
      );
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
