-- migrate:up

CREATE TABLE branches (
	id	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name	VARCHAR(50) NOT NULL,
  branch_type_id	INT NOT NULL,
  CONSTRAINT fk_branch_branch_type FOREIGN KEY (branch_type_id) REFERENCES branch_types(id)
);

-- migrate:down

ALTER TABLE branches DROP FOREIGN KEY fk_branch_branch_type;
DROP TABLE IF EXISTS branches;
