<?php

namespace Competition\Controller;

class LoginController extends \Configs\Controller
{
  public function index($request, $response, $args) {
    $this->load_helper('/competition/login');
    $rpta = '';
    $status = 200;
    $locals = [
      'constants' => $this->constants,
      'title' => 'Login',
      'csss' => $this->load_css(index_css($this->constants)),
      'jss'=> $this->load_js(index_js($this->constants)),
      'message' => '',
    ];
    $view = $this->container->view;
    return $view($response, 'blank', 'competition/login.phtml', $locals);
  }

  public function access($request, $response, $args) {
    $rpta = '';
    $status = 200;
    $mensaje = '';
    $continue = true;
    $csrf_request = $request->getParam($this->constants['csrf']['key']);
    $csrf_app = $this->constants['csrf']['secret'];
    if($csrf_app != $csrf_request){
      $mensaje = 'Token CSRF no es el correcto';
      $continue = false;
    }
    if($continue == true){
      $user = $request->getParam('user');
      $password = $request->getParam('password');
      if($user != 'admin' or $password != 'sistema123'){
        $continue = false;
        $mensaje = 'Usuario y/o contraenia no coinciden';
      }
    }
    if($continue == true){
      $_SESSION['user'] = $user;
      $_SESSION['status'] = 'active';
      $_SESSION['tiempo'] = date('Y-m-d H:i:s');
      $response = $response->withRedirect($this->constants['base_url'] . 'competition/admin/');
      return $response;
    }else{
      $status = 500;
      $this->load_helper('competition/login');
      $locals = [
        'constants' => $this->constants,
        'title' => 'Login',
        'csss' => $this->load_css(index_css($this->constants)),
        'jss'=> $this->load_js(index_js($this->constants)),
        'mensaje' => $mensaje,
      ];
      $view = $this->container->view;
      return $view($response, 'blank', 'competition/login.phtml', $locals);
    }
  }
}
