-- migrate:up

CREATE VIEW vw_employees_branches AS SELECT
  E.id AS id, E.name AS name, E.dni AS dni, E.address AS address, E.phone AS phone, E.email AS email, E.branch_id AS branch_id, B.name AS branch_name, B.branch_type_id AS branch_type_id, BT.name AS branch_type_name
  FROM employees E
  INNER JOIN branches B ON B.id = E.branch_id
  INNER JOIN branch_types BT ON B.branch_type_id = BT.id;

-- migrate:down

DROP VIEW IF EXISTS vw_employees_branches;
