<?php

ORM::configure('sqlite:' . 'db/ubicaciones.db',  null, 'ubicaciones');
ORM::configure(array(
  'connection_string' => 'mysql:host=localhost;dbname=access',
  'username' => 'root',
  'password' => '123'
), null, 'access');
ORM::configure(array(
  'connection_string' => 'mysql:host=localhost;dbname=competition',
  'username' => 'root',
  'password' => '123'
), null, 'competition');
ORM::configure('return_result_sets', true);
ORM::configure('error_mode', PDO::ERRMODE_WARNING);
ORM::configure('logging', true);
ORM::configure('caching', true);
