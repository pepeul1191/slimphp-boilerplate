-- migrate:up

CREATE VIEW vw_branches_types AS SELECT
  B.id AS id, B.name AS name, BT.id AS branch_type_id, BT.name AS branch_type_name
  FROM branches B
  INNER JOIN branch_types BT ON B.branch_type_id = BT.id;

-- migrate:down

DROP VIEW IF EXISTS vw_branches_types;
