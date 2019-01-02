<?php

if ( ! function_exists('index_css'))
{
  function index_css($constants){
    $rpta = null;
    switch($constants['env_static']){
      case 'desarrollo':
        $rpta = [
          'bower_components/bootstrap/dist/css/bootstrap.min',
          'bower_components/font-awesome/css/font-awesome.min',
          'competition/assets/css/constants',
          'competition/assets/css/styles',
          'competition/assets/css/competition',
        ];
        break;
      case 'produccion':
        $rpta = [
          'dist/login.min',
        ];
        break;
    }
    return $rpta;
  }
}

if ( ! function_exists('index_js'))
{
  function index_js($constants){
    $rpta = null;
    switch($constants['env_static']){
      case 'desarrollo':
        $rpta = [
          'bower_components/jquery/dist/jquery.min',
          'bower_components/bootstrap/dist/js/bootstrap.min',
          'bower_components/underscore/underscore-min',
          'bower_components/backbone/backbone-min',
          'competition/models/branch',
          'competition/models/photo',
          'competition/collections/branch_collection',
          'competition/templates/home_template',
          'competition/templates/sign_in_template',
          'competition/templates/upload_template',
          'competition/views/sign_in_view',
          'competition/views/home_view',
          'competition/views/upload_view',
          'competition/routes/competition_route',
        ];
        break;
      case 'produccion':
        $rpta = [
        ];
        break;
    }
    return $rpta;
  }
}
