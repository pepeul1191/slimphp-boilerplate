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
          'bower_components/swp-backbone/assets/css/constants',
          'bower_components/swp-backbone/assets/css/dashboard',
          'bower_components/swp-backbone/assets/css/table',
          'competition/assets/css/constants',
          'competition/assets/css/styles',
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
          'bower_components/swp-backbone/views/table',
          'bower_components/swp-backbone/views/modal',
          'competition/models/branch',
          'competition/models/branch_type',
          'competition/collections/branch_collection',
          'competition/collections/branch_type_collection',
          'competition/data/table_branch_data',
          'competition/templates/branch_template',
          'competition/views/branch_view',
          'competition/routes/admin_route',
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
