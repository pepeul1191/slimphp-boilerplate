<?php

namespace Competition\Controller;

class AdminController extends \Configs\Controller
{
  public function index($request, $response, $args) {
    # data
    $rpta = '';
    $status = 200;
    $language = 'sp';
    # helpers
    $this->load_helper('competition/admin');
    $csss = $this->load_css(index_css($this->constants));
    $jss = $this->load_js(index_js($this->constants));
    # view
    $locals = [
      'constants' => $this->constants,
      'title' => $this->load_titles()['sp']['competition_admin'],
      'csss' => $csss,
      'jss'=> $jss,
      'modules' => $modules,
      'items' => $items,
      'mensaje' => '',
      'data' => json_encode(array(
        'mensaje' => false,
        'titulo_pagina' => 'Gestión de Ubicaciones',
        'modulo' => 'Ubicaciones'
      )),
    ];
    $view = $this->container->view;
    return $view($response, 'blank', 'competition/admin.phtml', $locals);
  }
}
