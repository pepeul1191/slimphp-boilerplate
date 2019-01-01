-- migrate:up

INSERT INTO branch_types (id, name) VALUES
  (1, 'Lima'),
  (2, 'Provincia');

-- migrate:down

TRUNCATE branch_types;
