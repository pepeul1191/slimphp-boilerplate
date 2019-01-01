-- migrate:up

INSERT INTO branches (id, name, branch_type_id) VALUES
  (1, 'CENTRAL (JUAN DE ARONA)', 1),
  (3, 'BARRANCO', 1),
  (4, 'CALLAO', 1),
  (5, 'COMAS', 1),
  (6, 'JESUS MARIA', 1),
  (7, 'LA MOLINA', 1),
  (8, 'LA VICTORIA', 1),
  (9, 'LIMA CENTRO', 1),
  (10, 'LOS OLIVOS', 1),
  (11, 'PUEBLO LIBRE', 1),
  (13, 'SAN BORJA 1', 1),
  (15, 'SAN JUAN DE LURIGANCHO', 1),
  (16, 'SAN JUAN DE MIRAFLORES', 1),
  (17, 'SAN MIGUEL 1', 1),
  (18, 'SURCO', 1),
  (19, 'SURQUILLO', 1),
  (20, 'AREQUIPA', 2),
  (22, 'CAJAMARCA', 2),
  (24, 'CHICLAYO', 2),
  (25, 'CUSCO', 2),
  (26, 'HUANCAYO', 2),
  (27, 'HUARAZ', 2),
  (28, 'ICA', 2),
  (29, 'JULIACA', 2),
  (30, 'MOQUEGUA', 2),
  (31, 'PIURA', 2),
  (32, 'PUCALLPA', 2),
  (33, 'PUNO', 2),
  (34, 'TACNA', 2),
  (35, 'TARAPOTO', 2),
  (36, 'TRUJILLO', 2),
  (37, 'TUMBES', 2),
  (42, 'MIRAFLORES', 1),
  (43, 'JAVIER PRADO', 1),
  (46, 'SAN MIGUEL 2', 1),
  (47, 'SAN BORJA 2', 1);

-- migrate:down

TRUNCATE branches;
