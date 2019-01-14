<?php

namespace Competition\Controller;

class EmployeeController extends \Configs\Controller
{
  public function listWithBranch($request, $response, $args) {
    $rpta = '';
    $status = 200;
    try {
      $rs = \Model::factory('\Models\Competition\VWEmployeeBranch', 'competition')
        ->find_array();
      $rpta = json_encode($rs);
    }catch (\Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
            'No se ha podido los empleados',
            $e->getMessage()
          ]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }

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
        $rpta = json_encode([]);
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
      if ($participation->{'employee'}->{'id'} == 'E' || $participation->{'employee'}->{'id'} == null){
        // create employee
        $employee = \Model::factory('\Models\Competition\Employee', 'competition')->create();
        $employee->name = $participation->{'employee'}->{'name'};
        $employee->dni = $participation->{'employee'}->{'dni'};
        $employee->address = $participation->{'employee'}->{'address'};
        $employee->phone = $participation->{'employee'}->{'phone'};
        $employee->email = $participation->{'employee'}->{'email'};
        $employee->branch_id = $participation->{'employee'}->{'branch_id'};
        $employee->save();
        // create photo
        $photo = \Model::factory('\Models\Competition\Photo', 'competition')
          ->create();
        $photo->title = $participation->{'upload'}->{'title'};
        $photo->description = $participation->{'upload'}->{'description'};
        $photo->employee_id = $employee->id;
        $photo->file_name = $participation->{'upload'}->{'file_name'};
        $photo->created = date('Y/m/d H:i:s');
        $photo->save();
      }else{
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
          $new_photo->created = date('Y/m/d H:i:s');
          $new_photo->save();
        }else{
          # update photo
          $photo->title = $participation->{'upload'}->{'title'};
          $photo->description = $participation->{'upload'}->{'description'};
          $photo->file_name = $participation->{'upload'}->{'file_name'};
          $photo->created = date('Y/m/d H:i:s');
          $photo->save();
        }
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
      echo $e->getTraceAsString();
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

  public function save($request, $response, $args) {
    $data = json_decode($request->getParam('data'));
    $nuevos = $data->{'nuevos'};
    $editados = $data->{'editados'};
    $eliminados = $data->{'eliminados'};
    $rpta = []; $array_nuevos = [];
    $status = 200;
    \ORM::get_db('competition')->beginTransaction();
    try {
      if(count($nuevos) > 0){
        foreach ($nuevos as &$nuevo) {
          $employee = \Model::factory('\Models\Competition\Employee', 'competition')->create();
          $employee->name = $nuevo->{'name'};
          $employee->dni = $nuevo->{'dni'};
          $employee->address = $nuevo->{'address'};
          $employee->phone = $nuevo->{'phone'};
          $employee->email = $nuevo->{'email'};
          $employee->branch_id = $nuevo->{'branch_id'};
          $employee->save();
          $temp = [];
          $temp['temporal'] = $nuevo->{'id'};
          $temp['nuevo_id'] = $employee->id;
          array_push( $array_nuevos, $temp );
        }
      }
      if(count($editados) > 0){
        foreach ($editados as &$editado) {
          $employee = \Model::factory('\Models\Competition\Employee', 'competition')->find_one($editado->{'id'});
          $employee->name = $editado->{'name'};
          $employee->dni = $editado->{'dni'};
          $employee->address = $editado->{'address'};
          $employee->phone = $editado->{'phone'};
          $employee->email = $editado->{'email'};
          $employee->branch_id = $editado->{'branch_id'};
          $employee->save();
        }
      }
      if(count($eliminados) > 0){
        foreach ($eliminados as &$eliminado) {
          $employee = \Model::factory('\Models\Competition\Employee', 'competition')->find_one($eliminado);
          $employee->delete();
        }
      }
      $rpta['tipo_mensaje'] = 'success';
      $rpta['mensaje'] = [
        'Se ha registrado los cambios en los empleados',
        $array_nuevos
      ];
      \ORM::get_db('competition')->commit();
    }catch (\Exception $e) {
      $status = 500;
      $rpta['tipo_mensaje'] = 'error';
      $rpta['mensaje'] = [
        'Se ha producido un error en guardar la tabla de las empleados',
        $e->getMessage()
      ];
      \ORM::get_db('competition')->rollBack();
    }
    return $response->withStatus($status)->write(json_encode($rpta));
  }
}
