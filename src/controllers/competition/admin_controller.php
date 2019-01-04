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
    $modules = $this->menu_modules($language, 'competition', 'compeition/admin/');
    $items = $this->menu_items($language, 'competition', 'compeition/admin/');
    # view
    $locals = [
      'constants' => $this->constants,
      'title' => $this->load_titles()['sp']['competition_admin'],
      'csss' => $csss,
      'jss'=> $jss,
      'modules' => $modules,
      'items' => $items,
      'mensaje' => '',
      'upload' => $this->constants['static_url'] . 'competition/uploads/',
      'data' => json_encode(array(
        'mensaje' => false,
        'titulo_pagina' => 'Gestión de Ubicaciones',
        'modulo' => 'Ubicaciones'
      )),
    ];
    $view = $this->container->view;
    return $view($response, 'app', 'access/index.phtml', $locals);
  }
}
