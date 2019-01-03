<?php

namespace Competition\Controller;

class BranchController extends \Configs\Controller
{
  public function listVW($request, $response, $args) {
    $rpta = '';
    $status = 200;
    try {
      $rs = \Model::factory('\Models\Competition\VWBranchType', 'competition')
        ->order_by_asc('id')
        ->find_array();
      $rpta = json_encode($rs);
    }catch (\Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
            'No se ha podido listar las sedes',
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
          $branch = \Model::factory('\Models\Competition\Branch', 'competition')->create();
          $branch->name = $nuevo->{'name'};
          $branch->branch_type_id = $nuevo->{'branch_type_id'};
          $branch->save();
          $temp = [];
          $temp['temporal'] = $nuevo->{'id'};
          $temp['nuevo_id'] = $branch->id;
          array_push( $array_nuevos, $temp );
        }
      }
      if(count($editados) > 0){
        foreach ($editados as &$editado) {
          $branch = \Model::factory('\Models\Competition\Branch', 'competition')->find_one($editado->{'id'});
          var_dump($editado->{'branch_type_id'});
          $branch->name = $editado->{'name'};
          $branch->branch_type_id = $editado->{'branch_type_id'};
          $branch->save();
        }
      }
      if(count($eliminados) > 0){
        foreach ($eliminados as &$eliminado) {
          $branch = \Model::factory('\Models\Competition\Branch', 'competition')->find_one($eliminado);
          $branch->delete();
        }
      }
      $rpta['tipo_mensaje'] = 'success';
      $rpta['mensaje'] = [
        'Se ha registrado los cambios en las sedes',
        $array_nuevos
      ];
      \ORM::get_db('competition')->commit();
    }catch (\Exception $e) {
      $status = 500;
      $rpta['tipo_mensaje'] = 'error';
      $rpta['mensaje'] = [
        'Se ha producido un error en guardar la tabla de las sedes',
        $e->getMessage()
      ];
      \ORM::get_db('competition')->rollBack();
    }
    return $response->withStatus($status)->write(json_encode($rpta));
  }
}
