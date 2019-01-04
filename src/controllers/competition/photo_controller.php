<?php

namespace Competition\Controller;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;

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

  public function download($request, $response, $args){
    $rpta = '';
    $status = 200;
    $this->load_helper('competition/employee');
    try {
      $randito = randito(10);
      $folder = '/tmp/'. $randito;
      $fileSystem = new Filesystem();
      $fileSystem->mkdir($folder, 0700);
      $rs = \Model::factory('\Models\Competition\VWPhotoEmployee', 'competition')
        ->find_array();
      foreach ($rs as &$photo) {
        if($fileSystem->exists(PATH . '/public/competition/uploads/' . $photo['file_name'])){
          $file_name = $photo['name'] . ', ' . $photo['dni'];
          $file_extension = end(explode(".", $photo['file_name']));
          $fileSystem->copy(
            PATH . '/public/competition/uploads/' . $photo['file_name'],
            $folder . '/' . $file_name . '.' . $file_extension
          );
        }
      }
      $zipper = new \Chumper\Zipper\Zipper;
      $files = glob($folder . '/*');
      $zipper->make(PATH . '/public/competition/uploads/' . $randito . '.zip');
      $zipper->add($files);
      $zipper->close();
      $rpta = $this->constants['static_url'] . 'competition/uploads/' . $randito . '.zip';
    }catch (\IOExceptionInterface $exception) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
            'Se produjo un error en manipular los archivos',
            $e->getMessage()
          ]
        ]
      );
    }catch (\Exception $e) {
      $status = 500;
      $rpta = json_encode(
        [
          'tipo_mensaje' => 'error',
          'mensaje' => [
            'Se produjo un error no esperado en manipular los archivos',
            $e->getMessage()
          ]
        ]
      );
    }
    return $response->withStatus($status)->write($rpta);
  }
}
