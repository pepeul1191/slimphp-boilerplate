<?php

use Slim\Http\Request;
use Slim\Http\Response;
use Controller\DepartamentoController;
use Controller\DistritoController;
use Controller\ErrorController;
use Controller\HomeController;
use Controller\LoginController;
use Controller\ProvinciaController;

// Routes
$app->get('/demo/[{name}]', function (Request $request, Response $response, array $args) {
  // Sample log message
  $this->logger->info("Slim-Skeleton '/' route");
  // Render index view
  return $this->renderer->render($response, 'index.phtml', $args);
});
//login
$app->get('/login', LoginController::class . ':view')->add($mw_session_false);
$app->post('/login', LoginController::class . ':access');
$app->get('/login/ver', LoginController::class . ':ver');
$app->get('/login/cerrar', LoginController::class . ':cerrar');
//error
$app->get('/error/access/{numero}', ErrorController::class . ':access');
//home
$app->get('/', HomeController::class . ':view')->add($mw_session_true);
//servicios REST
$app->get('/departamento/listar', DepartamentoController::class . ':listar')->add($mw_ambiente_csrf);
$app->post('/departamento/guardar', DepartamentoController::class . ':guardar')->add($mw_ambiente_csrf);
$app->get('/provincia/listar/{departamento_id}', ProvinciaController::class . ':listar')->add($mw_ambiente_csrf);
$app->post('/provincia/guardar', ProvinciaController::class . ':guardar')->add($mw_ambiente_csrf);
$app->get('/distrito/listar/{provincia_id}', DistritoController::class . ':listar')->add($mw_ambiente_csrf);
$app->post('/distrito/guardar', DistritoController::class . ':guardar')->add($mw_ambiente_csrf);
$app->get('/distrito/buscar', DistritoController::class . ':buscar')->add($mw_ambiente_csrf);
$app->get('/distrito/nombre/{distrito_id}', DistritoController::class . ':nombre')->add($mw_ambiente_csrf);
// access
$app->get('/access/', \Access\Controller\ViewController::class . ':index');
// system
$app->get('/access/system/list', \Access\Controller\SystemController::class . ':list');
$app->post('/access/system/save', \Access\Controller\SystemController::class . ':save');
// permission
$app->get('/access/permission/list/{system_id}', \Access\Controller\PermissionController::class . ':list');
$app->post('/access/permission/save', \Access\Controller\PermissionController::class . ':save');

// competition
$app->get('/competition/', \Competition\Controller\HomeController::class . ':index');
$app->get('/competition/login', \Competition\Controller\LoginController::class . ':index');
$app->post('/competition/login', \Competition\Controller\LoginController::class . ':access');
$app->get('/competition/admin/', \Competition\Controller\AdminController::class . ':index')->add($mw_session_true);
$app->get('/competition/branch/list', \Competition\Controller\BranchController::class . ':listVW');
$app->get('/competition/branch_type/list', \Competition\Controller\BranchTypeController::class . ':list');
$app->post('/competition/branch/save', \Competition\Controller\BranchController::class . ':save');
$app->post('/competition/employee/photo_upload', \Competition\Controller\EmployeeController::class . ':photoUpload');
$app->get('/competition/employee/dni', \Competition\Controller\EmployeeController::class . ':dni');
$app->post('/competition/employee/participate', \Competition\Controller\EmployeeController::class . ':participate');
$app->get('/competition/employee/list', \Competition\Controller\EmployeeController::class . ':listWithBranch');
$app->post('/competition/employee/save', \Competition\Controller\EmployeeController::class . ':save');
